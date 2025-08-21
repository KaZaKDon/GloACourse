/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/two */ \"./src/modules/two.js\");\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('20 september 2025')\r\n;(0,_modules_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\n\n//# sourceURL=webpack://lesson19/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    const formatTime = (time) => {\r\n        return time < 10 ? `0${time}` : time;\r\n    };\r\n\r\n    const getTimeRemaining = () => {\r\n        const dateStop = new Date(deadline).getTime();\r\n        const dateNow = new Date().getTime();\r\n        const timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n        if (timeRemaining <= 0) {\r\n            return { timeRemaining: 0, hours: 0, minutes: 0, seconds: 0 };\r\n        }\r\n\r\n        const hours = Math.floor(timeRemaining / 3600);\r\n        const minutes = Math.floor((timeRemaining % 3600) / 60);\r\n        const seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, hours, minutes, seconds };\r\n    };\r\n\r\n    const updateClock = () => {\r\n        const getTime = getTimeRemaining();\r\n\r\n        timerHours.textContent = formatTime(getTime.hours);\r\n        timerMinutes.textContent = formatTime(getTime.minutes);\r\n        timerSeconds.textContent = formatTime(getTime.seconds);\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            clearInterval(timerInterval); // Остановить таймер, если время истекло\r\n        }\r\n    };\r\n\r\n    // Проверяем, если дата уже прошла, устанавливаем 00:00:00\r\n    if (getTimeRemaining().timeRemaining <= 0) {\r\n        timerHours.textContent = '00';\r\n        timerMinutes.textContent = '00';\r\n        timerSeconds.textContent = '00';\r\n    } else {\r\n        // Запускаем таймер\r\n        const timerInterval = setInterval(updateClock, 1000);\r\n    }\r\n\r\n    updateClock()\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://lesson19/./src/modules/timer.js?\n}");

/***/ }),

/***/ "./src/modules/two.js":
/*!****************************!*\
  !*** ./src/modules/two.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst two = () => {\r\n    console.log(\"two12\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (two);\n\n//# sourceURL=webpack://lesson19/./src/modules/two.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;