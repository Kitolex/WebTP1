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
var Produit_1 = __webpack_require__(1);
var Panier_1 = __webpack_require__(2);
var eza = new Produit_1.Produit("444", "4", 5);
var panier = new Panier_1.Panier();
panier.addProduit(eza);
panier.addProduits(eza, 3);
console.log(panier.produitList);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Produit = /** @class */function () {
    function Produit(nom, description, prix) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
    }
    return Produit;
}();
exports.Produit = Produit;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Panier = /** @class */function () {
    function Panier() {
        this._produitList = new Map();
    }
    Panier.prototype.addProduits = function (produit, nombre) {
        if (this._produitList.has(produit)) {
            this._produitList.set(produit, this._produitList.get(produit) + nombre);
        } else {
            this._produitList.set(produit, 1);
        }
    };
    Panier.prototype.addProduit = function (produit) {
        this.addProduits(produit, 1);
    };
    Panier.prototype.deleteProduits = function (produit, nombre) {
        if (this._produitList.has(produit)) {
            if (this._produitList.get(produit) <= nombre) {
                this._produitList.delete(produit);
            } else {
                this._produitList.set(produit, this._produitList.get(produit) - nombre);
            }
        } else {
            throw new Error("Article inexistant dans le panier");
        }
    };
    Panier.prototype.deleteProduit = function (produit) {
        this.deleteProduits(produit, this._produitList.get(produit));
    };
    Object.defineProperty(Panier.prototype, "produitList", {
        get: function () {
            return this._produitList;
        },
        enumerable: true,
        configurable: true
    });
    Panier.prototype.supprimerPanier = function () {
        this._produitList.clear();
    };
    return Panier;
}();
exports.Panier = Panier;

/***/ })
/******/ ]);