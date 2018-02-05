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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Catalogue_1 = __webpack_require__(1);
var CatalogueView_1 = __webpack_require__(2);
var Panier_1 = __webpack_require__(3);
var CatalogueController_1 = __webpack_require__(4);
var DescriptionProduitView_1 = __webpack_require__(5);
var DescriptionProduitController_1 = __webpack_require__(6);
window.onload = function () {
    console.log("ONLOAD");
    var main = new Main();
    main.init();
};
var Main = /** @class */function () {
    function Main() {}
    Main.prototype.init = function () {
        this.catalogue = Catalogue_1.Catalogue.init();
        this.panier = new Panier_1.Panier();
        this.showCatalogue();
    };
    Main.prototype.showCatalogue = function () {
        var catalogueView = new CatalogueView_1.CatalogueView(this.catalogue);
        catalogueView.setController(new CatalogueController_1.CatalogueController(), this);
        catalogueView.init(1);
    };
    Main.prototype.showDescription = function (produit) {
        var descriptionView = new DescriptionProduitView_1.DescriptionProduitView(produit);
        descriptionView.setController(new DescriptionProduitController_1.DescriptionProduitController(), this);
        descriptionView.init();
    };
    Main.SRC_FICHIER = "../res/imageProduit/";
    Main.ID_MAIN_DIV = "main";
    return Main;
}();
exports.Main = Main;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Produit_1 = __webpack_require__(8);
var index_1 = __webpack_require__(0);
var Catalogue = /** @class */function () {
    function Catalogue(produitList) {
        this.MAX_CHAR_DESCRIPTION = 30;
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
    Catalogue.prototype.getProduit = function (indice) {
        return this._produitList[indice];
    };
    Catalogue.init = function () {
        var produit1 = new Produit_1.Produit("KratosArme1", "La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit2 = new Produit_1.Produit("KratosArme2", "22222La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit3 = new Produit_1.Produit("KratosArme3", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit4 = new Produit_1.Produit("KratosArme4", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit5 = new Produit_1.Produit("KratosArme5", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit6 = new Produit_1.Produit("KratosArme6", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit7 = new Produit_1.Produit("KratosArme7", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit8 = new Produit_1.Produit("KratosArme8", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit9 = new Produit_1.Produit("KratosArme9", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit10 = new Produit_1.Produit("KratosArme10", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit11 = new Produit_1.Produit("KratosArme11", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit12 = new Produit_1.Produit("KratosArme12", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit13 = new Produit_1.Produit("KratosArme13", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit14 = new Produit_1.Produit("KratosArme14", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit15 = new Produit_1.Produit("KratosArme15", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit16 = new Produit_1.Produit("KratosArme16", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit17 = new Produit_1.Produit("KratosArme17", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit18 = new Produit_1.Produit("KratosArme18", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit19 = new Produit_1.Produit("KratosArme19", "La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit20 = new Produit_1.Produit("KratosArme20", "22222La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit21 = new Produit_1.Produit("KratosArme21", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit22 = new Produit_1.Produit("KratosArme22", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit23 = new Produit_1.Produit("KratosArme23", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit24 = new Produit_1.Produit("KratosArme24", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit25 = new Produit_1.Produit("KratosArme25", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit26 = new Produit_1.Produit("KratosArme26", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit27 = new Produit_1.Produit("KratosArme27", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit28 = new Produit_1.Produit("KratosArme28", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit29 = new Produit_1.Produit("KratosArme29", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit30 = new Produit_1.Produit("KratosArme30", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit31 = new Produit_1.Produit("KratosArme31", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit32 = new Produit_1.Produit("KratosArme32", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit33 = new Produit_1.Produit("KratosArme33", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit34 = new Produit_1.Produit("KratosArme34", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit35 = new Produit_1.Produit("KratosArme35", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit36 = new Produit_1.Produit("KratosArme36", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var catalogue = new Catalogue();
        catalogue.addProduit(produit1);
        catalogue.addProduit(produit2);
        catalogue.addProduit(produit3);
        catalogue.addProduit(produit4);
        catalogue.addProduit(produit5);
        catalogue.addProduit(produit6);
        catalogue.addProduit(produit7);
        catalogue.addProduit(produit8);
        catalogue.addProduit(produit9);
        catalogue.addProduit(produit10);
        catalogue.addProduit(produit11);
        catalogue.addProduit(produit12);
        catalogue.addProduit(produit13);
        catalogue.addProduit(produit14);
        catalogue.addProduit(produit15);
        catalogue.addProduit(produit16);
        catalogue.addProduit(produit17);
        catalogue.addProduit(produit18);
        catalogue.addProduit(produit19);
        catalogue.addProduit(produit20);
        catalogue.addProduit(produit21);
        catalogue.addProduit(produit22);
        catalogue.addProduit(produit22);
        catalogue.addProduit(produit23);
        catalogue.addProduit(produit24);
        catalogue.addProduit(produit25);
        catalogue.addProduit(produit26);
        catalogue.addProduit(produit27);
        catalogue.addProduit(produit28);
        catalogue.addProduit(produit29);
        catalogue.addProduit(produit30);
        catalogue.addProduit(produit31);
        catalogue.addProduit(produit32);
        catalogue.addProduit(produit33);
        catalogue.addProduit(produit34);
        catalogue.addProduit(produit35);
        catalogue.addProduit(produit36);
        return catalogue;
    };
    return Catalogue;
}();
exports.Catalogue = Catalogue;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var CatalogueView = /** @class */function () {
    function CatalogueView(catalogue) {
        this.catalogue = catalogue;
    }
    CatalogueView.prototype.init = function (page) {
        var _this = this;
        console.log(page);
        var affichageProduitsFinal = "";
        var sizeCatalogue = this.catalogue.produitList.length;
        var indiceDebutCatalogue = (page - 1) * 10;
        var indiceFinCatalogue = Math.min(sizeCatalogue, 10 * page);
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            affichageProduitsFinal += '<img src="' + this.catalogue.getProduit(i).srcImage + '"> ' + '<p id="nom' + this.catalogue.getProduit(i).nom + '">' + this.catalogue.getProduit(i).nom + '</p> ' + '<p>' + this.catalogue.getProduit(i).description.slice(0, this.catalogue.MAX_CHAR_DESCRIPTION) + '...</p>' + '<button id="panier' + this.catalogue.getProduit(i).nom + '">Try it</button><br>';
        }
        affichageProduitsFinal += '<button id="DebutButton"><<</button>';
        affichageProduitsFinal += '<button id="PrecedentButton"><</button>';
        for (var i = 2; i > 0; i--) {
            if (page > i) {
                affichageProduitsFinal += '<button id="-' + i + 'Page">' + (page - i) + '</button>';
            }
        }
        affichageProduitsFinal += '<button id="pageActuel">' + page + '</button>';
        for (var i = 1; i < 3; i++) {
            if (sizeCatalogue > page * 10 + 10 * (i - 1)) {
                affichageProduitsFinal += '<button id="+' + i + 'Page">' + (page + i) + '</button>';
            }
        }
        affichageProduitsFinal += '<button id="SuivantButton">></button>';
        affichageProduitsFinal += '<button id="FinButton">>></button>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageProduitsFinal;
        var _loop_1 = function (i) {
            document.getElementById("panier" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) {
                return _this.controller.buttonAddPanier(_this.catalogue.getProduit(i));
            });
            document.getElementById("nom" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) {
                return _this.controller.buttonDescriptionDetaille(_this.catalogue.getProduit(i));
            });
        };
        var this_1 = this;
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            _loop_1(i);
        }
        if (page == 1) {
            document.getElementById("DebutButton").setAttribute("disabled", "true");
            document.getElementById("PrecedentButton").setAttribute("disabled", "true");
        } else {
            document.getElementById("DebutButton").addEventListener("click", function (e) {
                return _this.init(1);
            });
            document.getElementById("PrecedentButton").addEventListener("click", function (e) {
                return _this.init(page - 1);
            });
        }
        if (sizeCatalogue < page * 10) {
            document.getElementById("SuivantButton").setAttribute("disabled", "true");
            document.getElementById("FinButton").setAttribute("disabled", "true");
        } else {
            document.getElementById("SuivantButton").addEventListener("click", function (e) {
                return _this.init(page + 1);
            });
            document.getElementById("FinButton").addEventListener("click", function (e) {
                return _this.init((10 + sizeCatalogue - sizeCatalogue % 10) / 10);
            });
        }
        var _loop_2 = function (i) {
            if (page > i) {
                document.getElementById("-" + i + "Page").addEventListener("click", function (e) {
                    return _this.init(page - i);
                });
            }
        };
        for (var i = 2; i > 0; i--) {
            _loop_2(i);
        }
        var _loop_3 = function (i) {
            if (sizeCatalogue > page * 10 + 10 * (i - 1)) {
                document.getElementById("+" + i + "Page").addEventListener("click", function (e) {
                    return _this.init(page + i);
                });
            }
        };
        for (var i = 1; i < 3; i++) {
            _loop_3(i);
        }
        document.getElementById("pageActuel").setAttribute("disabled", "true");
    };
    CatalogueView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return CatalogueView;
}();
exports.CatalogueView = CatalogueView;

/***/ }),
/* 3 */
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var CatalogueController = /** @class */function () {
    function CatalogueController() {}
    CatalogueController.prototype.buttonAddPanier = function (produit) {
        this.main.panier.addProduit(produit);
        console.log(this.main.panier);
    };
    CatalogueController.prototype.buttonDescriptionDetaille = function (produit) {
        this.main.showDescription(produit);
    };
    CatalogueController.prototype.setMain = function (main) {
        this.main = main;
    };
    return CatalogueController;
}();
exports.CatalogueController = CatalogueController;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var DescriptionProduitView = /** @class */function () {
    function DescriptionProduitView(produit) {
        this.produit = produit;
    }
    DescriptionProduitView.prototype.init = function () {
        var affichageProduitsFinal = '<img src="' + this.produit.srcImage + '"> ' + '<p id="nom' + this.produit.nom + '">' + this.produit.nom + '</p> ' + '<p>' + this.produit.description + '</p>' + '<button id="panier' + this.produit.nom + '">Try it</button><br>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageProduitsFinal;
    };
    DescriptionProduitView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return DescriptionProduitView;
}();
exports.DescriptionProduitView = DescriptionProduitView;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var DescriptionProduitController = /** @class */function () {
    function DescriptionProduitController() {}
    DescriptionProduitController.prototype.setMain = function (main) {
        this.main = main;
    };
    return DescriptionProduitController;
}();
exports.DescriptionProduitController = DescriptionProduitController;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Catalogue_1 = __webpack_require__(1);
var CatalogueView_1 = __webpack_require__(2);
var Panier_1 = __webpack_require__(3);
var CatalogueController_1 = __webpack_require__(4);
var DescriptionProduitView_1 = __webpack_require__(5);
var DescriptionProduitController_1 = __webpack_require__(6);
window.onload = function () {
    console.log("ONLOAD");
    var main = new Main();
    main.init();
};
var Main = /** @class */function () {
    function Main() {}
    Main.prototype.init = function () {
        this.catalogue = Catalogue_1.Catalogue.init();
        this.panier = new Panier_1.Panier();
        this.showCatalogue();
    };
    Main.prototype.showCatalogue = function () {
        var catalogueView = new CatalogueView_1.CatalogueView(this.catalogue);
        catalogueView.setController(new CatalogueController_1.CatalogueController(), this);
        catalogueView.init(1);
    };
    Main.prototype.showDescription = function (produit) {
        var descriptionView = new DescriptionProduitView_1.DescriptionProduitView(produit);
        descriptionView.setController(new DescriptionProduitController_1.DescriptionProduitController(), this);
        descriptionView.init();
    };
    Main.SRC_FICHIER = "../res/imageProduit/";
    Main.ID_MAIN_DIV = "main";
    return Main;
}();
exports.Main = Main;

/***/ }),
/* 8 */
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

/***/ })
/******/ ]);