/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: [BABEL] E:\\www\\react-demo\\app\\index.js: Cannot find module 'babel-preset-preset-env' from 'E:\\www\\react-demo'\n    at Function.module.exports [as sync] (E:\\www\\react-demo\\node_modules\\.1.5.0@resolve\\lib\\sync.js:40:15)\n    at resolveStandardizedName (E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\config\\loading\\files\\plugins.js:78:29)\n    at resolvePreset (E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\config\\loading\\files\\plugins.js:31:10)\n    at loadPreset (E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\config\\loading\\files\\plugins.js:50:18)\n    at createDescriptor (E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\config\\option-manager.js:280:21)\n    at E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\config\\option-manager.js:154:12\n    at Array.map (native)\n    at E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\config\\option-manager.js:153:48\n    at cachedFunction (E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\config\\caching.js:48:17)\n    at OptionManager.mergeOptions (E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\config\\option-manager.js:47:18)\n    at OptionManager.init (E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\config\\option-manager.js:115:14)\n    at manageOptions (E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\config\\option-manager.js:31:30)\n    at loadConfig (E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\config\\index.js:15:37)\n    at transformSync (E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\transform-sync.js:13:36)\n    at Object.transform (E:\\www\\react-demo\\node_modules\\.7.0.0-beta.32@@babel\\core\\lib\\transform.js:20:65)\n    at transpile (E:\\www\\react-demo\\node_modules\\.8.0.0-beta.0@babel-loader\\lib\\index.js:55:20)\n    at Object.module.exports (E:\\www\\react-demo\\node_modules\\.8.0.0-beta.0@babel-loader\\lib\\index.js:179:20)");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map