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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Catalogue_1 = __webpack_require__(2);
var CatalogueView_1 = __webpack_require__(3);
var Panier_1 = __webpack_require__(4);
var CatalogueController_1 = __webpack_require__(5);
var DescriptionProduitView_1 = __webpack_require__(6);
var DescriptionProduitController_1 = __webpack_require__(7);
var PanierView_1 = __webpack_require__(8);
var PanierController_1 = __webpack_require__(9);
var ConnexionView_1 = __webpack_require__(10);
var ConnexionController_1 = __webpack_require__(11);
var User_1 = __webpack_require__(1);
var AdminPageController_1 = __webpack_require__(12);
var AdminPageView_1 = __webpack_require__(13);
var ProduitUpdateView_1 = __webpack_require__(14);
var ProduitUpdateController_1 = __webpack_require__(15);
var ConfirmPageView_1 = __webpack_require__(16);
var ConfirmPageController_1 = __webpack_require__(17);
window.onload = function () {
    console.log("ONLOAD");
    var main = new Main();
    main.init();
};
var Main = /** @class */function () {
    function Main() {}
    Main.prototype.init = function () {
        var _this = this;
        this.catalogue = Catalogue_1.Catalogue.init();
        this.panier = new Panier_1.Panier();
        this.listUser = new Array();
        this.listUser.push(new User_1.User("admin", "admin"));
        document.getElementById("panier").addEventListener("click", function (e) {
            return _this.showPanier();
        });
        document.getElementById("connexion").addEventListener("click", function (e) {
            return _this.showConnexion();
        });
        document.getElementById("accueil").addEventListener("click", function (e) {
            return _this.showCatalogue();
        });
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
    Main.prototype.showPanier = function () {
        if (this.panier.produitList.size == 0) {
            alert("Panier Vide");
        } else {
            var panierView = new PanierView_1.PanierView(this.panier);
            panierView.setController(new PanierController_1.PanierController(), this);
            panierView.init();
        }
    };
    Main.prototype.showConnexion = function () {
        var connexionView = new ConnexionView_1.ConnexionView();
        connexionView.setController(new ConnexionController_1.ConnexionController(), this);
        connexionView.init();
    };
    Main.prototype.showAdminPage = function (page) {
        var adminPageView = new AdminPageView_1.AdminPageView(this.catalogue);
        adminPageView.setController(new AdminPageController_1.AdminPageController(), this);
        adminPageView.init(page || 1);
    };
    Main.prototype.showProduitUpdate = function (produit) {
        var produitUpdtateView = new ProduitUpdateView_1.ProduitUpdtateView(produit);
        produitUpdtateView.setController(new ProduitUpdateController_1.ProduitUpdateController(), this);
        produitUpdtateView.init();
    };
    Main.prototype.showConfirmPage = function () {
        var confirmPageView = new ConfirmPageView_1.ConfirmPageView(this.getRandomBoolean());
        confirmPageView.setController(new ConfirmPageController_1.ConfirmPageController(), this);
        confirmPageView.init();
    };
    Main.prototype.getRandomBoolean = function () {
        return Math.random() * 2 > 1;
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
var User = /** @class */function () {
    function User(id, mdp) {
        this.id = id;
        this.mdp = mdp;
    }
    User.prototype.connexion = function (listUser) {
        for (var _i = 0, listUser_1 = listUser; _i < listUser_1.length; _i++) {
            var user = listUser_1[_i];
            if (this.id == user.id && this.id == user.id) {
                return true;
            }
        }
        return false;
    };
    return User;
}();
exports.User = User;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Produit_1 = __webpack_require__(19);
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
        var catalogue = new Catalogue();
        for (var i = 0; i < 45; i++) {
            var produit = new Produit_1.Produit("KratosArme" + i, "Ceci est une superbe description d'arme tres détaillée qui décrit toute l'arme de fond en comble. Donc ceci est l'arme de kratos qui a servis a tué les dieux Grec, Nordique, Egyptien, Maya, Européen, etc." + i, 10, index_1.Main.SRC_FICHIER + "kratos.jpg", 30);
            catalogue.addProduit(produit);
        }
        return catalogue;
    };
    Catalogue.prototype.deleteProduit = function (produit) {
        this.produitList = this.produitList.filter(function (item) {
            return item.nom != produit.nom;
        });
    };
    return Catalogue;
}();
exports.Catalogue = Catalogue;

/***/ }),
/* 3 */
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
        var affichageFinalCatalogue = "";
        var sizeCatalogue = this.catalogue.produitList.length;
        var indiceDebutCatalogue = (page - 1) * 10;
        var indiceFinCatalogue = Math.min(sizeCatalogue, 10 * page);
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            affichageFinalCatalogue += '<div class="container">' + '<div class="row" style="background-color:lavender;">' + '<div class="col-xs-9" >' + '<img src="' + this.catalogue.getProduit(i).srcImage + '" class="img-responsive">' + '</div>' + '<div class="col">' + '<div class="well" class="float-right">' + '<h5>' + this.catalogue.getProduit(i).nom + '</h5>' + '<h6 class="descri arme">' + this.catalogue.getProduit(i).description.slice(0, this.catalogue.MAX_CHAR_DESCRIPTION) + '...</h6>' + '<button id ="description' + this.catalogue.getProduit(i).nom + '" type="button" class="btn btn-link"> En savoir plus</button>' + '<h5>' + this.catalogue.getProduit(i).prix + ' $</h5> ' + '<button id="panier' + this.catalogue.getProduit(i).nom + '" type="button" class="btn btn-primary btn-sm">Ajouter au Panier</button>' + '</div>' + '</div>' + '</div>' + '</div>';
        }
        affichageFinalCatalogue += '<div class="text-center">' + '<div class="btn-group">' + '<button type="button" class="btn btn-dark" id="DebutButton"><<</button>' + '<button type="button" class="btn btn-dark" id="PrecedentButton"><</button>';
        for (var i = 2; i > 0; i--) {
            if (page > i) {
                affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="-' + i + 'Page">' + (page - i) + '</button>';
            }
        }
        affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="pageActuel">' + page + '</button>';
        for (var i = 1; i < 3; i++) {
            if (sizeCatalogue > page * 10 + 10 * (i - 1)) {
                affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="+' + i + 'Page">' + (page + i) + '</button>';
            }
        }
        affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="SuivantButton">></button>';
        affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="FinButton">>></button>';
        affichageFinalCatalogue += '</div></div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageFinalCatalogue;
        var _loop_1 = function (i) {
            document.getElementById("panier" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) {
                return _this.controller.buttonAddPanier(_this.catalogue.getProduit(i));
            });
            document.getElementById("description" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) {
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
/* 4 */
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
        console.log(this.produitList);
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
    Panier.prototype.getPrixTotalHT = function () {
        var prix = 0;
        this.produitList.forEach(function (value, key, map) {
            prix += value * key.prix;
        });
        return prix;
    };
    Panier.prototype.getPrixTotalTTC = function () {
        var prix = 0;
        this.produitList.forEach(function (value, key, map) {
            prix += value * (key.prix * (1 + key.taxe / 100));
        });
        return prix;
    };
    Panier.prototype.clear = function () {
        this.produitList.clear();
    };
    Panier.prototype.setNumberProduit = function (produit, number) {
        this.produitList.set(produit, number);
    };
    return Panier;
}();
exports.Panier = Panier;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var CatalogueController = /** @class */function () {
    function CatalogueController() {}
    CatalogueController.prototype.buttonAddPanier = function (produit) {
        this.main.panier.addProduit(produit);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var DescriptionProduitView = /** @class */function () {
    function DescriptionProduitView(produit) {
        this.produit = produit;
    }
    DescriptionProduitView.prototype.init = function () {
        var _this = this;
        var affichageProduitsFinal = '<div class="container">' + '<div class="row"  style="background-color:lavender;">' + '<div class="col-xs-9" >' + '<img src="' + this.produit.srcImage + '" class="img-responsive">' + '</div>' + '<div class="col">' + '<div class="well" class="float-right">' + '<div class="text">' + '<h5>' + this.produit.nom + '</h5>' + '<h6 class="descri arme">' + this.produit.description + '</h6>' + '<h5>' + this.produit.prix + ' $</h5>' + '<button id="panier' + this.produit.nom + '" type="button" class="btn btn-primary btn-sm">Ajouter au Panier</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="text-center">' + '<div class="btn-group">' + '<button id="retourCatalogue" type="button" class="btn btn-dark">Retour au catalogue</button>' + '<div>' + '</div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageProduitsFinal;
        document.getElementById("panier" + this.produit.nom).addEventListener("click", function (e) {
            return _this.controller.addPanier(_this.produit);
        });
        document.getElementById("retourCatalogue").addEventListener("click", function (e) {
            return _this.controller.retourAccueil();
        });
    };
    DescriptionProduitView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return DescriptionProduitView;
}();
exports.DescriptionProduitView = DescriptionProduitView;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var DescriptionProduitController = /** @class */function () {
    function DescriptionProduitController() {}
    DescriptionProduitController.prototype.setMain = function (main) {
        this.main = main;
    };
    DescriptionProduitController.prototype.addPanier = function (produit) {
        this.main.panier.addProduit(produit);
    };
    DescriptionProduitController.prototype.retourAccueil = function () {
        this.main.showCatalogue();
    };
    return DescriptionProduitController;
}();
exports.DescriptionProduitController = DescriptionProduitController;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var PanierView = /** @class */function () {
    function PanierView(panier) {
        this.panier = panier;
    }
    PanierView.prototype.init = function () {
        var _this = this;
        var affichageProduitsFinal = "";
        this.panier.produitList.forEach(function (value, key, map) {
            affichageProduitsFinal += '<img src="' + key.srcImage + '"> ' + '<p id="nom' + key.nom + '" >' + key.nom + '</p> ' + '<p>' + key.description.slice(0, 30) + '...</p>' + '<button id="enlever' + key.nom + '">-</button><br>' + '<input id="nombre' + key.nom + '" value="' + value + '"><br>' + '<button id="ajouter' + key.nom + '">+</button><br>';
        });
        affichageProduitsFinal += '<p>' + this.panier.getPrixTotalHT() + '</p>';
        affichageProduitsFinal += '<p>' + (this.panier.getPrixTotalTTC() - this.panier.getPrixTotalHT()) + '</p>';
        affichageProduitsFinal += '<p>cout de livraison</p>';
        affichageProduitsFinal += '<p>' + this.panier.getPrixTotalTTC() + '</p>';
        affichageProduitsFinal += '<button id="acheter">Acheter</button>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageProduitsFinal;
        this.panier.produitList.forEach(function (value, key, map) {
            document.getElementById("nombre" + key.nom).addEventListener("input", function (e) {
                return _this.controller.changeNumberProduit(key, Number.parseInt(document.getElementById("nombre" + key.nom).value));
            });
            document.getElementById("enlever" + key.nom).addEventListener("click", function (e) {
                return _this.removeNumberProduit(key);
            });
            document.getElementById("ajouter" + key.nom).addEventListener("click", function (e) {
                return _this.addNumberProduit(key);
            });
        });
        document.getElementById("acheter").addEventListener("click", function (e) {
            return _this.controller.acheter();
        });
    };
    PanierView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    PanierView.prototype.addNumberProduit = function (key) {
        var input = document.getElementById("nombre" + key.nom);
        if (Number.parseInt(input.value) < 999) {
            input.value = Number.parseInt(input.value) + 1 + "";
            this.panier.addProduit(key);
        } else {
            alert("Vous en avez peut être déja assez non ?");
        }
    };
    PanierView.prototype.removeNumberProduit = function (key) {
        var input = document.getElementById("nombre" + key.nom);
        if (Number.parseInt(input.value) > 1) {
            input.value = Number.parseInt(input.value) - 1 + "";
            this.panier.deleteProduits(key, 1);
        } else {
            if (confirm("Cet action entrainera la supression de ce produit de votre panier.\nEn êtes vous sûr?")) {
                this.panier.deleteProduit(key);
                this.init();
            } else {}
        }
    };
    return PanierView;
}();
exports.PanierView = PanierView;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var PanierController = /** @class */function () {
    function PanierController() {}
    PanierController.prototype.setMain = function (main) {
        this.main = main;
    };
    PanierController.prototype.changeNumberProduit = function (produit, number) {
        this.main.panier.setNumberProduit(produit, number);
    };
    PanierController.prototype.acheter = function () {
        this.main.panier.clear();
        this.main.showConfirmPage();
    };
    return PanierController;
}();
exports.PanierController = PanierController;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var ConnexionView = /** @class */function () {
    function ConnexionView() {}
    ConnexionView.prototype.init = function () {
        var _this = this;
        var affichageFinalCatalogue = "";
        affichageFinalCatalogue += '<input id ="idUser" type="text" placeholder="Identifiant"><br>' + '<input id="mdpUser" type="password" placeholder="Mot de passe"><br>' + '<button id="connexionUser" type="button" class="btn btn-dark" >Connexion</button>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageFinalCatalogue;
        document.getElementById("connexionUser").addEventListener("click", function (e) {
            return _this.controller.connexion(document.getElementById("idUser").value, document.getElementById("mdpUser").value);
        });
    };
    ConnexionView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return ConnexionView;
}();
exports.ConnexionView = ConnexionView;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __webpack_require__(1);
var ConnexionController = /** @class */function () {
    function ConnexionController() {}
    ConnexionController.prototype.setMain = function (main) {
        this.main = main;
    };
    ConnexionController.prototype.connexion = function (id, mdp) {
        var user = new User_1.User(id, mdp);
        if (user.connexion(this.main.listUser)) {
            this.main.user = user;
            document.getElementById("connexion").innerHTML = id;
            this.main.showAdminPage();
        } else {
            alert("pas bon");
        }
    };
    return ConnexionController;
}();
exports.ConnexionController = ConnexionController;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var AdminPageController = /** @class */function () {
    function AdminPageController() {}
    AdminPageController.prototype.setMain = function (main) {
        this.main = main;
    };
    AdminPageController.prototype.supprimerProduit = function (produit, page) {
        if (confirm("Etes vous sur de vouloir le supprimer")) {
            this.main.catalogue.deleteProduit(produit);
            this.main.showAdminPage(page);
        }
    };
    AdminPageController.prototype.modifierProduit = function (produit) {
        this.main.showProduitUpdate(produit);
    };
    return AdminPageController;
}();
exports.AdminPageController = AdminPageController;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var AdminPageView = /** @class */function () {
    function AdminPageView(catalogue) {
        this.catalogue = catalogue;
    }
    AdminPageView.prototype.init = function (page) {
        var _this = this;
        var affichageFinalCatalogue = "";
        var sizeCatalogue = this.catalogue.produitList.length;
        var indiceDebutCatalogue = (page - 1) * 10;
        var indiceFinCatalogue = Math.min(sizeCatalogue, 10 * page);
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            affichageFinalCatalogue += '<div class="container">' + '<div class="row" style="background-color:lavender;">' + '<div class="col-xs-9" >' + '<img src="' + this.catalogue.getProduit(i).srcImage + '" class="img-responsive">' + '</div>' + '<div class="col">' + '<div class="well" class="float-right">' + '<h5>' + this.catalogue.getProduit(i).nom + '</h5>' + '<h6 class="descri arme">' + this.catalogue.getProduit(i).description.slice(0, this.catalogue.MAX_CHAR_DESCRIPTION) + '...</h6>' + '<h5>' + this.catalogue.getProduit(i).prix + ' $</h5> ' + '<button id="update' + this.catalogue.getProduit(i).nom + '">Modifier</button>' + '<button id="delete' + this.catalogue.getProduit(i).nom + '">Supprimer</button>' + '</div>' + '</div>' + '</div>' + '</div>';
        }
        affichageFinalCatalogue += '<div class="text-center">' + '<div class="btn-group">' + '<button type="button" class="btn btn-dark" id="DebutButton"><<</button>' + '<button type="button" class="btn btn-dark" id="PrecedentButton"><</button>';
        for (var i = 2; i > 0; i--) {
            if (page > i) {
                affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="-' + i + 'Page">' + (page - i) + '</button>';
            }
        }
        affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="pageActuel">' + page + '</button>';
        for (var i = 1; i < 3; i++) {
            if (sizeCatalogue > page * 10 + 10 * (i - 1)) {
                affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="+' + i + 'Page">' + (page + i) + '</button>';
            }
        }
        affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="SuivantButton">></button>';
        affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="FinButton">>></button>';
        affichageFinalCatalogue += '</div></div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageFinalCatalogue;
        var _loop_1 = function (i) {
            document.getElementById("update" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) {
                return _this.controller.modifierProduit(_this.catalogue.getProduit(i));
            });
            document.getElementById("delete" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) {
                return _this.controller.supprimerProduit(_this.catalogue.getProduit(i), page);
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
    AdminPageView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return AdminPageView;
}();
exports.AdminPageView = AdminPageView;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var ProduitUpdtateView = /** @class */function () {
    function ProduitUpdtateView(produit) {
        this.produit = produit;
    }
    ProduitUpdtateView.prototype.setController = function (controller, main) {
        this.controller = controller;
        this.controller.setMain(main);
    };
    ProduitUpdtateView.prototype.init = function () {
        var _this = this;
        var affichageProduitsFinal = '<div class="container">' + '<div class="row"  style="background-color:lavender;">' + '<div class="col-xs-9" >' + '<img src="' + this.produit.srcImage + '" class="img-responsive">' + '</div>' + '<div class="col">' + '<div class="well" class="float-right">' + '<div class="text">' + '<input id="titre" value="' + this.produit.nom + '"><br>' + '<textarea id="description" rows="4" cols="50">' + this.produit.description + '</textarea><br>' + '<input id="prix" value="' + this.produit.prix + '"><br>' + '<button id="modifier" type="button" class="btn btn-primary btn-sm">Modifer</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="text-center">' + '<div class="btn-group">' + '<button id="retourCatalogue" type="button" class="btn btn-dark">Retour au catalogue</button>' + '<div>' + '</div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageProduitsFinal;
        document.getElementById("modifier").addEventListener("click", function (e) {
            return _this.controller.updateProduit(document.getElementById("titre").value, document.getElementById("description").value, document.getElementById("prix").value, _this.produit);
        });
        document.getElementById("retourCatalogue").addEventListener("click", function (e) {
            return _this.controller.retourAccueil();
        });
    };
    return ProduitUpdtateView;
}();
exports.ProduitUpdtateView = ProduitUpdtateView;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ProduitUpdateController = /** @class */function () {
    function ProduitUpdateController() {}
    ProduitUpdateController.prototype.setMain = function (main) {
        this.main = main;
    };
    ProduitUpdateController.prototype.retourAccueil = function () {
        this.main.showAdminPage();
    };
    ProduitUpdateController.prototype.updateProduit = function (titre, description, prix, produit) {
        var indice = 0;
        for (indice; indice < this.main.catalogue.produitList.length; indice++) {
            if (this.main.catalogue.getProduit(indice).nom == produit.nom) {
                this.main.catalogue.getProduit(indice).nom = titre;
                this.main.catalogue.getProduit(indice).description = description;
                this.main.catalogue.getProduit(indice).prix = Number.parseInt(prix);
                break;
            }
        }
        this.main.showAdminPage();
    };
    return ProduitUpdateController;
}();
exports.ProduitUpdateController = ProduitUpdateController;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var ConfirmPageView = /** @class */function () {
    function ConfirmPageView(reussite) {
        this.reussite = reussite;
    }
    ConfirmPageView.prototype.init = function () {
        if (this.reussite) {
            document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = '<p>reussite ' + this.getIdTransaction() + '</p>';
        } else {
            document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = '<p>pas réussite</p>';
        }
    };
    ConfirmPageView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    ConfirmPageView.prototype.getIdTransaction = function () {
        var res = "";
        for (var i = 0; i < 5; i++) {
            res += String.fromCharCode(97 + 26) + "/";
        }
        for (var i = 0; i < 10; i++) {
            res += this.getRandomNumber(9) + "/";
        }
        return res;
    };
    ConfirmPageView.prototype.getRandomNumber = function (max) {
        return Math.floor(Math.random() * max);
    };
    return ConfirmPageView;
}();
exports.ConfirmPageView = ConfirmPageView;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ConfirmPageController = /** @class */function () {
    function ConfirmPageController() {}
    ConfirmPageController.prototype.setMain = function (main) {
        this.main = main;
    };
    return ConfirmPageController;
}();
exports.ConfirmPageController = ConfirmPageController;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Catalogue_1 = __webpack_require__(2);
var CatalogueView_1 = __webpack_require__(3);
var Panier_1 = __webpack_require__(4);
var CatalogueController_1 = __webpack_require__(5);
var DescriptionProduitView_1 = __webpack_require__(6);
var DescriptionProduitController_1 = __webpack_require__(7);
var PanierView_1 = __webpack_require__(8);
var PanierController_1 = __webpack_require__(9);
var ConnexionView_1 = __webpack_require__(10);
var ConnexionController_1 = __webpack_require__(11);
var User_1 = __webpack_require__(1);
var AdminPageController_1 = __webpack_require__(12);
var AdminPageView_1 = __webpack_require__(13);
var ProduitUpdateView_1 = __webpack_require__(14);
var ProduitUpdateController_1 = __webpack_require__(15);
var ConfirmPageView_1 = __webpack_require__(16);
var ConfirmPageController_1 = __webpack_require__(17);
window.onload = function () {
    console.log("ONLOAD");
    var main = new Main();
    main.init();
};
var Main = /** @class */function () {
    function Main() {}
    Main.prototype.init = function () {
        var _this = this;
        this.catalogue = Catalogue_1.Catalogue.init();
        this.panier = new Panier_1.Panier();
        this.listUser = new Array();
        this.listUser.push(new User_1.User("admin", "admin"));
        document.getElementById("panier").addEventListener("click", function (e) {
            return _this.showPanier();
        });
        document.getElementById("connexion").addEventListener("click", function (e) {
            return _this.showConnexion();
        });
        document.getElementById("accueil").addEventListener("click", function (e) {
            return _this.showCatalogue();
        });
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
    Main.prototype.showPanier = function () {
        if (this.panier.produitList.size == 0) {
            alert("Panier Vide");
        } else {
            var panierView = new PanierView_1.PanierView(this.panier);
            panierView.setController(new PanierController_1.PanierController(), this);
            panierView.init();
        }
    };
    Main.prototype.showConnexion = function () {
        var connexionView = new ConnexionView_1.ConnexionView();
        connexionView.setController(new ConnexionController_1.ConnexionController(), this);
        connexionView.init();
    };
    Main.prototype.showAdminPage = function (page) {
        var adminPageView = new AdminPageView_1.AdminPageView(this.catalogue);
        adminPageView.setController(new AdminPageController_1.AdminPageController(), this);
        adminPageView.init(page || 1);
    };
    Main.prototype.showProduitUpdate = function (produit) {
        var produitUpdtateView = new ProduitUpdateView_1.ProduitUpdtateView(produit);
        produitUpdtateView.setController(new ProduitUpdateController_1.ProduitUpdateController(), this);
        produitUpdtateView.init();
    };
    Main.prototype.showConfirmPage = function () {
        var confirmPageView = new ConfirmPageView_1.ConfirmPageView(this.getRandomBoolean());
        confirmPageView.setController(new ConfirmPageController_1.ConfirmPageController(), this);
        confirmPageView.init();
    };
    Main.prototype.getRandomBoolean = function () {
        return Math.random() * 2 > 1;
    };
    Main.SRC_FICHIER = "../res/imageProduit/";
    Main.ID_MAIN_DIV = "main";
    return Main;
}();
exports.Main = Main;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Produit = /** @class */function () {
    function Produit(nom, description, prix, srcImage, taxe) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.srcImage = srcImage;
        this.taxe = taxe;
    }
    return Produit;
}();
exports.Produit = Produit;

/***/ })
/******/ ]);