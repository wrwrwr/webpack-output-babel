"use strict";

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].e;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/e: {},
			/******/i: moduleId,
			/******/l: !1
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.e, module, module.e, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.l = !0;

		/******/ // Return the exports of the module
		/******/return module.e;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(__webpack_require__.s = 0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	/* harmony export */exports["test"] = test;function test() {
		return !1 | !0 & !0 ^ !1;
	}

	/***/
}
/******/]);