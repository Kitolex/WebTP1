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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Catalogue_1 = __webpack_require__(1);
var AccueilController_1 = __webpack_require__(2);
var SRC_FICHIER = "../res/imageProduit/";
Catalogue_1.Catalogue.init(SRC_FICHIER);
var catalogue = new Catalogue_1.Catalogue();
var controller = new AccueilController_1.AccueilController(catalogue);
controller.init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Catalogue = /** @class */function () {
    function Catalogue(produitList) {
        if (produitList) {
            this._produitList = produitList;
        } else {
            this._produitList = new Array();
        }
    }
    Catalogue.prototype.addProduit = function (produit) {
        this._produitList.push(produit);
    };
    Object.defineProperty(Catalogue.prototype, "produitList", {
        get: function () {
            return this._produitList;
        },
        set: function (value) {
            this._produitList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Catalogue;
}();
exports.Catalogue = Catalogue;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var AccueilController = /** @class */function () {
    function AccueilController(catalogue) {
        this.ID_CATALOGUE_HTML = "main";
        this.MAX_CHAR_DESCRIPTION = 30;
        this._catalogue = catalogue;
    }
    Object.defineProperty(AccueilController.prototype, "catalogue", {
        get: function () {
            return this._catalogue;
        },
        set: function (value) {
            this._catalogue = value;
        },
        enumerable: true,
        configurable: true
    });
    AccueilController.prototype.init = function () {
        var affichageProduitsFinal = "";
        for (var _i = 0, _a = this._catalogue.produitList; _i < _a.length; _i++) {
            var produit = _a[_i];
            affichageProduitsFinal += '<img src="' + produit.srcImage + '"> ' + '<p>' + produit.nom + '</p> ' + '<p>' + produit.description.slice(0, this.MAX_CHAR_DESCRIPTION) + '...</p>' + '<button id="panier' + produit.nom + '">Try it</button><br>';
        }
        document.getElementById(this.ID_CATALOGUE_HTML).innerHTML += affichageProduitsFinal;
        var _loop_1 = function (produit) {
            document.getElementById("panier" + produit.nom).addEventListener("click", function () {
                console.log(produit.nom);
            });
        };
        for (var _b = 0, _c = this._catalogue.produitList; _b < _c.length; _b++) {
            var produit = _c[_b];
            _loop_1(produit);
        }
    };
    return AccueilController;
}();
exports.AccueilController = AccueilController;

/***/ })
/******/ ]);