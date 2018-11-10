/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
    }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
      /******/
    };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
  }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
    /******/
  };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
    /******/
  };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
  /******/
})
/************************************************************************/
/******/({

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Asteroid */ \"./src/models/Asteroid.js\");\n\n\n\n\nfunction addAsteroid(asteroidModel) {\n  var asteroid = document.createElement('div');\n  asteroid.className = 'asteroid';\n  asteroid.style.top = asteroidModel.coords.y + 'vh';\n  asteroid.style.left = asteroidModel.coords.x + 'vw';\n  var size = asteroidModel.size + 'px';\n  asteroid.style.height = size;\n  asteroid.style.width = size;\n  asteroid.style.backgroundSize = size;\n  document.body.appendChild(asteroid);\n}\n\ndocument.addEventListener('DOMContentLoaded', addChildren);\n\nfunction addChildren() {\n  for (var i = 0; i < 5; i++) {\n    var asteroid = new _models_Asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('asteroid_' + i);\n    addAsteroid(asteroid);\n    console.log(asteroid);\n  }\n}\n\n//# sourceURL=webpack:///./src/entry.js?");

        /***/
      }),

/***/ "./src/models/Asteroid.js":
/*!********************************!*\
  !*** ./src/models/Asteroid.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Asteroid = function Asteroid(name) {\n  _classCallCheck(this, Asteroid);\n\n  this.name = name;\n  this.size = 50 + Math.round(Math.random() * 101); // TODO: сделать так, чтобы астероиды не находились в одном месте\n\n  this.coords = {\n    x: 30 + Math.round(Math.random() * 50),\n    y: 30 + Math.round(Math.random() * 50)\n  };\n  this.resources = Math.round(Math.floor(Math.random() * 20) * this.size / 10);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Asteroid);\n\n//# sourceURL=webpack:///./src/models/Asteroid.js?");

        /***/
      })

    /******/
  });
