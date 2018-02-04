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
<<<<<<< HEAD
var AccueilController_1 = __webpack_require__(2);
var SRC_FICHIER = "../res/imageProduit/";
Catalogue_1.Catalogue.init(SRC_FICHIER);
var catalogue = new Catalogue_1.Catalogue();
=======
var AccueilController_1 = __webpack_require__(3);
var SRC_FICHIER = "../res/imageProduit/";
var catalogue = Catalogue_1.Catalogue.init(SRC_FICHIER);
>>>>>>> 0da222f6c4c1f6659f8b89e8f51c2ac6509ca02b
var controller = new AccueilController_1.AccueilController(catalogue);
controller.init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
=======
var Produit_1 = __webpack_require__(2);
>>>>>>> 0da222f6c4c1f6659f8b89e8f51c2ac6509ca02b
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
    Catalogue.init = function (srcFichier) {
        var produit1 = new Produit_1.Produit("KratosArme", "La grande et majestueuse arme de Kratos", 5, srcFichier + "kratos.jpg");
        var produit2 = new Produit_1.Produit("KratosArme22222", "22222La grande et majestueuse arme de Kratos", 5, srcFichier + "kratos.jpg");
        var produit3 = new Produit_1.Produit("KratosArme3333", "333333La grande et majestueuse arme de Kratos", 5, srcFichier + "kratos.jpg");
        var catalogue = new Catalogue();
        catalogue.addProduit(produit1);
        catalogue.addProduit(produit2);
        catalogue.addProduit(produit3);
        return catalogue;
    };
    return Catalogue;
}();
exports.Catalogue = Catalogue;

/***/ }),
/* 2 */
<<<<<<< HEAD
=======
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Produit = /** @class */function () {
    function Produit(nom, description, prix, srcImage) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.srcImage = srcImage;
    }
    return Produit;
}();
exports.Produit = Produit;

/***/ }),
/* 3 */
>>>>>>> 0da222f6c4c1f6659f8b89e8f51c2ac6509ca02b
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