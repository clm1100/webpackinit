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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_tab_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_tab_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_tab_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_tab_js__ = __webpack_require__(8);



let tab = new __WEBPACK_IMPORTED_MODULE_1__custom_tab_js__["a" /* default */]('tab')
tab.init();

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
    function Tab(cId) {
        this.container = document.getElementById(cId);
        this.aInput = this.container.getElementsByTagName('input');
        this.aDiv = this.container.getElementsByTagName('div');
    }

    Tab.prototype.init = function() {
        this.aInput[0].style.backgroundColor = 'orange';
        this.aDiv[0].style.display = 'block';

        var that = this;
        for (var i = 0; i < this.aInput.length; i++) {
            this.aInput[i].index = i;
            this.aInput[i].onclick = function() {
                // 这里的this指的是当前点击的按钮
                that.change(this);
            }
        }
    }

    Tab.prototype.change = function(obj) {
        for (var j = 0; j < this.aInput.length; j++) {
            this.aInput[j].style.backgroundColor = '';
            this.aDiv[j].style.display = 'none';
        }
        obj.style.backgroundColor = 'orange';
        this.aDiv[obj.index].style.display = 'block';
    }

/* harmony default export */ __webpack_exports__["a"] = (Tab);

/***/ })

/******/ });