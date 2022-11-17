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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst cookie = __webpack_require__(/*! cookie */ \"cookie\");\nconst createToken = (userToken, secretWord, expiresIn)=>{\n    // console.log(userToken);\n    const { __id , email , password , name , user  } = userToken;\n    return jwt.sign({\n        __id,\n        email,\n        name,\n        password,\n        user\n    }, secretWord, {\n        expiresIn\n    });\n};\nasync function handler(req, res) {\n    const { user , password  } = req.query;\n    try {\n        const UserCol = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"User\");\n        const queryConsultant = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(UserCol, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"user\", \"==\", user));\n        const UserSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(queryConsultant);\n        let dataUser = [];\n        UserSnapshot.forEach((doc)=>dataUser = doc.data());\n        const comparePass = await bcrypt.compare(password, dataUser.password);\n        if (comparePass) {\n            const token = createToken(dataUser, process.env.palabraSecreta, \"48h\");\n            res.status(200).setHeader(\"Set-Cookie\", cookie.serialize(\"Token\", token, {\n                httpOnly: true,\n                secure: process.env.MODE == \"prod\",\n                maxAge: 60 * 60 * 1000,\n                sameSite: \"strict\",\n                path: \"/\"\n            })).json({\n                token: token,\n                success: true\n            });\n        } else {\n            throw new Error(\"La contrase\\xf1a es incorrecta\");\n        }\n    } catch (err) {\n        console.log(err);\n        res.json({\n            data: [],\n            error: err.message,\n            success: false\n        });\n    }\n} /*\r\n    //Post\r\n  try {\r\n    const docRef = await addDoc(collection(db, \"Task\"), {\r\n      name: \"Prueba 1\",\r\n      date: \"25/08/2022\"\r\n    });\r\n    console.log(\"Document written with ID: \", docRef.id);\r\n\r\n    //Update\r\n    const docUpdated = await updateDoc(doc(db, \"Task\", docRef.id),{\r\n      __id:docRef.id\r\n    })\r\n\r\n    //Get One\r\n    try {\r\n    const docGetOne = await getDoc(doc(db, \"Task\", docRef.id))\r\n    console.log(docGetOne.data());\r\n    } catch (err) {\r\n      console.log(err)\r\n    }\r\n\r\n    //Get One by data\r\n    // const taskCol1 = collection(db, 'Task');\r\n    // const queryConsultant = query(taskCol1, where('name',\"==\",\"Prueba\"));\r\n    // const taskSnapshot1 = await getDocs(queryConsultant);\r\n    // let taskList1;\r\n    // taskSnapshot1.forEach(doc => taskList1 = doc.data());\r\n    // console.log(taskList1)\r\n    // console.log(taskList1 != undefined)\r\n\r\n\r\n    //Delete\r\n    await deleteDoc(doc(db,\"Task\",docRef.id))\r\n\r\n  } catch (e) {\r\n    console.error(\"Error adding document: \", e);\r\n  }\r\n    //Get\r\n  const taskCol = collection(db, 'Task');\r\n  const taskSnapshot = await getDocs(taskCol);\r\n  const taskList = taskSnapshot.docs.map(doc => doc.data());\r\n  res.status(200).json(taskList)\r\n */ \n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBQ2dDO0FBQzVFLE1BQU1RLE1BQU1DLG1CQUFPQSxDQUFDO0FBQ3BCLE1BQU1DLFNBQVNELG1CQUFPQSxDQUFDO0FBQ3ZCLE1BQU1FLFNBQVNGLG1CQUFPQSxDQUFDO0FBRXZCLE1BQU1HLGNBQWMsQ0FBQ0MsV0FBV0MsWUFBWUMsWUFBYztJQUN0RCwwQkFBMEI7SUFDMUIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFQyxLQUFJLEVBQUVDLEtBQUksRUFBRSxHQUFHUDtJQUM5QyxPQUFPTCxJQUFJYSxJQUFJLENBQUM7UUFBRUw7UUFBTUM7UUFBT0U7UUFBTUQ7UUFBVUU7SUFBSyxHQUFHTixZQUFZO1FBQUVDO0lBQVU7QUFDbkY7QUFFZSxlQUFlTyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUVKLEtBQUksRUFBRUYsU0FBUSxFQUFFLEdBQUdLLElBQUloQixLQUFLO0lBRXBDLElBQUk7UUFDQSxNQUFNa0IsVUFBVW5CLDhEQUFVQSxDQUFDSixtQ0FBRUEsRUFBRTtRQUMvQixNQUFNd0Isa0JBQWtCbkIseURBQUtBLENBQUNrQixTQUFTckIseURBQUtBLENBQUMsUUFBUSxNQUFNZ0I7UUFDM0QsTUFBTU8sZUFBZSxNQUFNeEIsMkRBQU9BLENBQUN1QjtRQUVuQyxJQUFJRSxXQUFXLEVBQUU7UUFDakJELGFBQWFFLE9BQU8sQ0FBQ3hCLENBQUFBLE1BQU91QixXQUFXdkIsSUFBSXlCLElBQUk7UUFFL0MsTUFBTUMsY0FBYyxNQUFNckIsT0FBT3NCLE9BQU8sQ0FBQ2QsVUFBVVUsU0FBU1YsUUFBUTtRQUVwRSxJQUFJYSxhQUFhO1lBQ2IsTUFBTUUsUUFBUXJCLFlBQVlnQixVQUFVTSxRQUFRQyxHQUFHLENBQUNDLGNBQWMsRUFBRTtZQUdoRVosSUFBSWEsTUFBTSxDQUFDLEtBQUtDLFNBQVMsQ0FBQyxjQUFjM0IsT0FBTzRCLFNBQVMsQ0FBQyxTQUFTTixPQUFPO2dCQUNyRU8sVUFBVSxJQUFJO2dCQUNkQyxRQUFRUCxRQUFRQyxHQUFHLENBQUNPLElBQUksSUFBSTtnQkFDNUJDLFFBQVEsS0FBSyxLQUFLO2dCQUNsQkMsVUFBVTtnQkFDVkMsTUFBTTtZQUNWLElBQUlDLElBQUksQ0FBQztnQkFBRWIsT0FBT0E7Z0JBQU9jLFNBQVEsSUFBSTtZQUFDO1FBQzFDLE9BQ0k7WUFDQSxNQUFNLElBQUlDLE1BQU0sa0NBQStCO1FBQ25ELENBQUM7SUFFTCxFQUFFLE9BQU9DLEtBQUs7UUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaekIsSUFBSXNCLElBQUksQ0FBQztZQUFFaEIsTUFBTSxFQUFFO1lBQUVzQixPQUFPSCxJQUFJSSxPQUFPO1lBQUVOLFNBQVEsS0FBSztRQUFFO0lBQzVEO0FBQ0osQ0FBQyxDQUdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmFuYS1wYWdlLy4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyZWJhc2UsIGFwcCwgZGIgfSBmcm9tICcuLi8uLi9kYidcclxuaW1wb3J0IHsgZ2V0RG9jcywgd2hlcmUsIGRvYywgY29sbGVjdGlvbiwgcXVlcnkgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcclxuY29uc3QgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0Jyk7XHJcbmNvbnN0IGNvb2tpZSA9IHJlcXVpcmUoJ2Nvb2tpZScpO1xyXG5cclxuY29uc3QgY3JlYXRlVG9rZW4gPSAodXNlclRva2VuLCBzZWNyZXRXb3JkLCBleHBpcmVzSW4pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJUb2tlbik7XHJcbiAgICBjb25zdCB7IF9faWQsIGVtYWlsLCBwYXNzd29yZCwgbmFtZSwgdXNlciB9ID0gdXNlclRva2VuO1xyXG4gICAgcmV0dXJuIGp3dC5zaWduKHsgX19pZCwgZW1haWwsIG5hbWUsIHBhc3N3b3JkLCB1c2VyIH0sIHNlY3JldFdvcmQsIHsgZXhwaXJlc0luIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IHVzZXIsIHBhc3N3b3JkIH0gPSByZXEucXVlcnk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBVc2VyQ29sID0gY29sbGVjdGlvbihkYiwgJ1VzZXInKTtcclxuICAgICAgICBjb25zdCBxdWVyeUNvbnN1bHRhbnQgPSBxdWVyeShVc2VyQ29sLCB3aGVyZSgndXNlcicsIFwiPT1cIiwgdXNlcikpO1xyXG4gICAgICAgIGNvbnN0IFVzZXJTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocXVlcnlDb25zdWx0YW50KTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFVc2VyID0gW11cclxuICAgICAgICBVc2VyU25hcHNob3QuZm9yRWFjaChkb2MgPT4gZGF0YVVzZXIgPSBkb2MuZGF0YSgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tcGFyZVBhc3MgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgZGF0YVVzZXIucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICBpZiAoY29tcGFyZVBhc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBjcmVhdGVUb2tlbihkYXRhVXNlciwgcHJvY2Vzcy5lbnYucGFsYWJyYVNlY3JldGEsICc0OGgnKTtcclxuXHJcblxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgY29va2llLnNlcmlhbGl6ZSgnVG9rZW4nLCB0b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk1PREUgPT0gJ3Byb2QnLFxyXG4gICAgICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMTAwMCxcclxuICAgICAgICAgICAgICAgIHNhbWVTaXRlOiAnc3RyaWN0JyxcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICB9KSkuanNvbih7IHRva2VuOiB0b2tlbiwgc3VjY2Vzczp0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMYSBjb250cmFzZcOxYSBlcyBpbmNvcnJlY3RhXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgcmVzLmpzb24oeyBkYXRhOiBbXSwgZXJyb3I6IGVyci5tZXNzYWdlLCBzdWNjZXNzOmZhbHNlICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qXHJcbiAgICAvL1Bvc3RcclxuICB0cnkge1xyXG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwiVGFza1wiKSwge1xyXG4gICAgICBuYW1lOiBcIlBydWViYSAxXCIsXHJcbiAgICAgIGRhdGU6IFwiMjUvMDgvMjAyMlwiXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgd3JpdHRlbiB3aXRoIElEOiBcIiwgZG9jUmVmLmlkKTtcclxuXHJcbiAgICAvL1VwZGF0ZVxyXG4gICAgY29uc3QgZG9jVXBkYXRlZCA9IGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIFwiVGFza1wiLCBkb2NSZWYuaWQpLHtcclxuICAgICAgX19pZDpkb2NSZWYuaWRcclxuICAgIH0pXHJcblxyXG4gICAgLy9HZXQgT25lXHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgZG9jR2V0T25lID0gYXdhaXQgZ2V0RG9jKGRvYyhkYiwgXCJUYXNrXCIsIGRvY1JlZi5pZCkpXHJcbiAgICBjb25zb2xlLmxvZyhkb2NHZXRPbmUuZGF0YSgpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQgT25lIGJ5IGRhdGFcclxuICAgIC8vIGNvbnN0IHRhc2tDb2wxID0gY29sbGVjdGlvbihkYiwgJ1Rhc2snKTtcclxuICAgIC8vIGNvbnN0IHF1ZXJ5Q29uc3VsdGFudCA9IHF1ZXJ5KHRhc2tDb2wxLCB3aGVyZSgnbmFtZScsXCI9PVwiLFwiUHJ1ZWJhXCIpKTtcclxuICAgIC8vIGNvbnN0IHRhc2tTbmFwc2hvdDEgPSBhd2FpdCBnZXREb2NzKHF1ZXJ5Q29uc3VsdGFudCk7XHJcbiAgICAvLyBsZXQgdGFza0xpc3QxO1xyXG4gICAgLy8gdGFza1NuYXBzaG90MS5mb3JFYWNoKGRvYyA9PiB0YXNrTGlzdDEgPSBkb2MuZGF0YSgpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tMaXN0MSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tMaXN0MSAhPSB1bmRlZmluZWQpXHJcblxyXG5cclxuICAgIC8vRGVsZXRlXHJcbiAgICBhd2FpdCBkZWxldGVEb2MoZG9jKGRiLFwiVGFza1wiLGRvY1JlZi5pZCkpXHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcclxuICB9XHJcbiAgICAvL0dldFxyXG4gIGNvbnN0IHRhc2tDb2wgPSBjb2xsZWN0aW9uKGRiLCAnVGFzaycpO1xyXG4gIGNvbnN0IHRhc2tTbmFwc2hvdCA9IGF3YWl0IGdldERvY3ModGFza0NvbCk7XHJcbiAgY29uc3QgdGFza0xpc3QgPSB0YXNrU25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRhc2tMaXN0KVxyXG4gKi8iXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJhcHAiLCJkYiIsImdldERvY3MiLCJ3aGVyZSIsImRvYyIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImp3dCIsInJlcXVpcmUiLCJiY3J5cHQiLCJjb29raWUiLCJjcmVhdGVUb2tlbiIsInVzZXJUb2tlbiIsInNlY3JldFdvcmQiLCJleHBpcmVzSW4iLCJfX2lkIiwiZW1haWwiLCJwYXNzd29yZCIsIm5hbWUiLCJ1c2VyIiwic2lnbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJVc2VyQ29sIiwicXVlcnlDb25zdWx0YW50IiwiVXNlclNuYXBzaG90IiwiZGF0YVVzZXIiLCJmb3JFYWNoIiwiZGF0YSIsImNvbXBhcmVQYXNzIiwiY29tcGFyZSIsInRva2VuIiwicHJvY2VzcyIsImVudiIsInBhbGFicmFTZWNyZXRhIiwic3RhdHVzIiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJNT0RFIiwibWF4QWdlIiwic2FtZVNpdGUiLCJwYXRoIiwianNvbiIsInN1Y2Nlc3MiLCJFcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();