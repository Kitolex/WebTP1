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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Catalogue_1 = __webpack_require__(3);
var CatalogueView_1 = __webpack_require__(5);
var Panier_1 = __webpack_require__(6);
var CatalogueController_1 = __webpack_require__(7);
var DescriptionProduitView_1 = __webpack_require__(8);
var DescriptionProduitController_1 = __webpack_require__(9);
var PanierView_1 = __webpack_require__(10);
var PanierController_1 = __webpack_require__(11);
var ConnexionView_1 = __webpack_require__(12);
var ConnexionController_1 = __webpack_require__(13);
var User_1 = __webpack_require__(2);
var AdminPageController_1 = __webpack_require__(14);
var AdminPageView_1 = __webpack_require__(15);
var ProduitUpdateView_1 = __webpack_require__(16);
var ProduitUpdateController_1 = __webpack_require__(17);
var ConfirmPageView_1 = __webpack_require__(18);
var ConfirmPageController_1 = __webpack_require__(19);
var CreateProduitView_1 = __webpack_require__(20);
var CreateProduitController_1 = __webpack_require__(21);
/**
 * Appeler au lancement permet d'instancier la fonction main
 */
window.onload = function () {
    console.log("ONLOAD");
    var main = new Main();
    main.init();
};
/**
 * Cette classe est la classe principal du programme c'est celle qui contient les données importance au site et les fonctions pour afficher le contenu
 */
var Main = /** @class */function () {
    function Main() {}
    /**
     * Méthode qui permet d'initialiser les variable de la class ainsi que les événements de la barre de navigation
     */
    Main.prototype.init = function () {
        var _this = this;
        this.catalogue = Catalogue_1.Catalogue.init(); //on init le catalogue avec des produits pré-créer
        this.panier = new Panier_1.Panier(); // on initialise le catalogue
        this.listUser = new Array(); //on initialise la liste d'utilisateur
        this.listUser.push(new User_1.User("admin", "admin")); //on créer l'utilisateur qui peut se connecter (Dans ce cas il n'y en as qu'un, mais au moins la liste est prête si besoin de modification pour prochaine TP
        document.getElementById("panier").addEventListener("click", function (e) {
            return _this.showPanier();
        }); //on créer l'événement du bouton panier
        document.getElementById("connexion").addEventListener("click", function (e) {
            return _this.buttonConnexion();
        }); //on créer l'évenement du bouton connexion
        document.getElementById("accueil").addEventListener("click", function (e) {
            return _this.showAccueil();
        }); //on créer l'évenement du bouton accueil
        this.showCatalogue(); //on affiche le catalogue qui sert de page d'accueil du site
    };
    /**
     * Méthode qui permet d'afficher le catalogue
     */
    Main.prototype.showCatalogue = function () {
        var catalogueView = new CatalogueView_1.CatalogueView(this.catalogue); //on initialise la vue du catalogue
        catalogueView.setController(new CatalogueController_1.CatalogueController(), this); //on set le controller de la vue
        catalogueView.init(1); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet d'afficher la description détaillé du produit
     * @param {Produit} produit
     *  produit que l'on veut voir sa description détaillé
     */
    Main.prototype.showDescription = function (produit) {
        var descriptionView = new DescriptionProduitView_1.DescriptionProduitView(produit); //on initialise la vue de la description de produit
        descriptionView.setController(new DescriptionProduitController_1.DescriptionProduitController(), this); //on set le controller de la vue
        descriptionView.init(); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet d'afficher le panier si il n'est pas vide
     */
    Main.prototype.showPanier = function () {
        if (this.panier.produitList.size == 0) {
            alert("Panier Vide"); //si vide on prévient l'utilisateur
        } else {
            var panierView = new PanierView_1.PanierView(this.panier); //on initialise la vue du panier
            panierView.setController(new PanierController_1.PanierController(), this); //on set le controller de la vue
            panierView.init(); //on affiche le contenu de la page
        }
    };
    /**
     * Méthode qui permet d'afficher la page pour pouvoir se connecter
     */
    Main.prototype.showConnexion = function () {
        var connexionView = new ConnexionView_1.ConnexionView(); //on initialise la vue pour se connecter
        connexionView.setController(new ConnexionController_1.ConnexionController(), this); //on set le controller de la vue
        connexionView.init(); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet d'afficher la page de gestion du catalogue d'un admin
     * @param {number} page
     *  page du catalogue à afficher
     */
    Main.prototype.showAdminPage = function (page) {
        var adminPageView = new AdminPageView_1.AdminPageView(this.catalogue); //on initialise la vue pour les admins
        adminPageView.setController(new AdminPageController_1.AdminPageController(), this); //on set le controller de la vue
        adminPageView.init(page || 1); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet de modifier un produit
     * @param {Produit} produit
     *  produit à modifier
     */
    Main.prototype.showProduitUpdate = function (produit) {
        var produitUpdtateView = new ProduitUpdateView_1.ProduitUpdtateView(produit); //on initialise la vue pour la modification de produit
        produitUpdtateView.setController(new ProduitUpdateController_1.ProduitUpdateController(), this); //on set le controller de la vue
        produitUpdtateView.init(); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet d'avoir la confirmation si l'achat à réussi ou non
     */
    Main.prototype.showConfirmPage = function () {
        var confirmPageView = new ConfirmPageView_1.ConfirmPageView(this.getRandomBoolean(), this.panier); //on initialise la vue avec un boolean pour la confirmation (réussi/échec)
        confirmPageView.setController(new ConfirmPageController_1.ConfirmPageController(), this); //on set le controller de la vue
        confirmPageView.init(); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet d'avoir l'écran de création de produit
     */
    Main.prototype.showCreateProduit = function () {
        var createProduitView = new CreateProduitView_1.CreateProduitView(); //on initialise la vue
        createProduitView.setController(new CreateProduitController_1.CreateProduitController(), this); //on set le controller de la vue
        createProduitView.init(); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet d'avoir un boolean aléatoirement
     * @returns {boolean}
     */
    Main.prototype.getRandomBoolean = function () {
        return Math.random() * 2 > 1;
    };
    /**
     * Permet de gérer la connexion et déconnexion de l'utilisateur
     */
    Main.prototype.buttonConnexion = function () {
        if (this.user == null) {
            this.showConnexion(); //donc on affiche la connexion
        } else {
            if (confirm("Etes vous sur de vouloir vous déconnecter ?")) {
                this.user = null; //on repasse user à null pour dire que plus personne est connecter
                document.getElementById("connexion").innerHTML = "Connexion"; //on récrit connexion à la palce du nom de la personne
                document.getElementById("panier").style.visibility = "visible"; //on raffiche le bouton du panier
                this.showCatalogue();
            }
        }
    };
    /**
     * Méthode qui permet de gérer le boutton accueil du site selon si un utilisateur est connecter
     */
    Main.prototype.showAccueil = function () {
        if (this.user == null) {
            this.showCatalogue(); //on montre le catalogue de base
        } else {
            this.showAdminPage(1); //sinon on affiche la page de gestion de produit pour l'admin
        }
    };
    Main.prototype.actualisePanierNumber = function () {
        document.getElementById(Main.ID_PANIER_NUMBER_DIV).innerText = this.panier.produitList.size + '';
    };
    /**
     * constante qui permet de récupérer l'emplacement des images de produit du site
     * @type {string}
     */
    Main.SRC_FICHIER = "../res/imageProduit/";
    /**
     * constante qui permet de récupérer le nom de la div principal pour placer le contenu du site
     * @type {string}
     */
    Main.ID_MAIN_DIV = "main";
    /**
     * constante qui permet de récupérer le nom de la div qui contient le nombre d'élement au panier
     * @type {string}
     */
    Main.ID_PANIER_NUMBER_DIV = "numberProduitPanier";
    /**
     * constante qui permet de récupérer le prix de livraison du site
     * @type {number}
     */
    Main.COUT_LIVRAISON = 5;
    return Main;
}();
exports.Main = Main;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Cette classe étend tous les controlleurs et contient les méthodes et variables qu'ont besoin les controlleurs
 */
var Controller = /** @class */function () {
  function Controller() {}
  /**
   * Setter de l'attribut main
   * @param {Main} main
   */
  Controller.prototype.setMain = function (main) {
    this.main = main;
  };
  /**
   * Getter de l'attribut main
   * @returns {Main}
   */
  Controller.prototype.getMain = function () {
    return this.main;
  };
  return Controller;
}();
exports.Controller = Controller;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Cette classe est le modèle d'un utilisateur
 */
var User = /** @class */function () {
    /**
     * Constructeur de la classe
     * @param {string} id
     *  identifiant de l'utilisateur
     * @param {string} mdp
     *  mot de passe de l'utilisateur
     */
    function User(id, mdp) {
        this.id = id;
        this.mdp = mdp;
    }
    /**
     * Cette méthode permet de savoir si un utilisateur peut se connecter
     * @param {Array<User>} listUser
     *  liste des utilisateurs qui peuvent se connecter
     * @returns {boolean}
     *  retour vrai si il peut se connecter sinon faux
     */
    User.prototype.connexion = function (listUser) {
        for (var _i = 0, listUser_1 = listUser; _i < listUser_1.length; _i++) {
            var user = listUser_1[_i];
            if (this.id == user.id && this.id == user.id) {
                return true; //on renvoie vrai si oui
            }
        }
        return false; //sion on renvoie faux si aucun utilisateur de la liste ne correspond
    };
    return User;
}();
exports.User = User;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Produit_1 = __webpack_require__(4);
var index_1 = __webpack_require__(0);
/**
 * Cette classe est le modèle d'un catalogue
 */
var Catalogue = /** @class */function () {
    /**
     * Constructeur de la classe Catalogue
     */
    function Catalogue() {
        /**
         * nombre de caractère maximun pour la description de l'objet en mode aperçu
         */
        this.MAX_CHAR_DESCRIPTION = 40;
        this._produitList = new Array(); //on instancie la liste
    }
    /**
     * Cette méthode permet d'ajouter un produit au catalogue
     * @param {Produit} produit
     *  produit à ajouter
     */
    Catalogue.prototype.addProduit = function (produit) {
        this._produitList.push(produit); //on ajoute le produit
    };
    Object.defineProperty(Catalogue.prototype, "produitList", {
        /**
         * Getter de la liste de produit du catalogue
         * @returns {Array<Produit>}
         *  liste de produit du catalogue
         */
        get: function () {
            return this._produitList;
        },
        /**
         * Setter de la liste de produit du catalogue
         * @param {Array<Produit>} value
         */
        set: function (value) {
            this._produitList = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Cette méthode permet de récupérer un produit à un indice précis
     * @param {number} indice
     *  indice du produit à récupérer dans la liste
     * @returns {Produit}
     *  porduit récupérer
     */
    Catalogue.prototype.getProduit = function (indice) {
        return this._produitList[indice];
    };
    /**
     * Cette méthode static permet de générer un catalogue de test
     * @returns {Catalogue}
     *  un catalogue
     */
    Catalogue.init = function () {
        var catalogue = new Catalogue();
        for (var i = 0; i < 45; i++) {
            var produit = new Produit_1.Produit("KratosArme" + i, "Ceci est une superbe description d'arme tres détaillée qui décrit toute l'arme de fond en comble. Donc ceci est l'arme de kratos qui a servis a tué les dieux Grec, Nordique, Egyptien, Maya, Européen, etc." + i, 10, index_1.Main.SRC_FICHIER + "kratos.jpg", 30);
            catalogue.addProduit(produit);
        }
        return catalogue;
    };
    /**
     * Cette méthode permet de supprimer un produit du catalogue
     * @param {Produit} produit
     */
    Catalogue.prototype.deleteProduit = function (produit) {
        this.produitList = this.produitList.filter(function (item) {
            return item.nom != produit.nom;
        }); //on supprime le produit
    };
    return Catalogue;
}();
exports.Catalogue = Catalogue;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Cette classe est le modèle d'un produit
 */
var Produit = /** @class */function () {
  /**
   *  Constructeur de la classe Produit
   * @param {string} nom
   *  nom d'un produit
   * @param {string} description
   *  description d'un produit
   * @param {number} prix
   *  prix d'un produit
   * @param {string} srcImage
   *  srcImage d'un produit
   * @param {number} taxe
   *  taxe d'un produit
   */
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
/**
 * Class qui permet de gérer la vue de l'affichage du catalogue et coût
 */
var CatalogueView = /** @class */function () {
    /**
     *  Constructeur de la classe
     * @param {Catalogue} catalogue
     *  catalogue à afficher
     */
    function CatalogueView(catalogue) {
        this.catalogue = catalogue;
    }
    /**
     * Fonction appellé par main qui permet d'afficher le catalogue
     * @param {number} page
     */
    CatalogueView.prototype.init = function (page) {
        //-----------------Génération HTML---------------
        var _this = this;
        //variable pour afficher le catalogue
        var affichageCatalogueFinal = "";
        var sizeCatalogue = this.catalogue.produitList.length; //taille du catalogue
        var indiceDebutCatalogue = (page - 1) * 10; //indice de début de la liste du catalogue
        var indiceFinCatalogue = Math.min(sizeCatalogue, 10 * page); //indice de fin de la liste du catalogue
        //affichage de chaque produit du catalogue
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            affichageCatalogueFinal += '<div class="container">' + '<div class="row" style="background-color:lavender;">' + '<div class="col-xs-9" >' + '<img src="' + this.catalogue.getProduit(i).srcImage + '" class="img-responsive">' + '</div>' + '<div class="col">' + '<div class="well" class="float-right">' + '<h5>' + this.catalogue.getProduit(i).nom + '</h5>' + '<h6 class="descri arme">' + this.catalogue.getProduit(i).description.slice(0, this.catalogue.MAX_CHAR_DESCRIPTION) + '...</h6>' + '<button id ="description' + this.catalogue.getProduit(i).nom + '" type="button" class="btn btn-link"> En savoir plus</button>' + '<h5>' + this.catalogue.getProduit(i).prix + ' $</h5> ';
            if (this.controller.existProduitPanier(this.catalogue.getProduit(i))) {
                affichageCatalogueFinal += this.controller.setNbPanier(this.catalogue.getProduit(i));
            } else {
                affichageCatalogueFinal += '<button id="panier' + this.catalogue.getProduit(i).nom + '" type="button" class="btn btn-primary btn-sm">Ajouter au Panier</button>';
            }
            affichageCatalogueFinal += '<h5 id="panierNombre' + this.catalogue.getProduit(i).nom + '"></h5> ' + '</div>' + '</div>' + '</div>' + '</div>';
        }
        //--Boutton catalgue--
        affichageCatalogueFinal += '<div class="text-center">' + '<div class="btn-group">' + '<button type="button" class="btn btn-dark" id="DebutButton"><<</button>' + // boutton pour revenir au début
        '<button type="button" class="btn btn-dark" id="PrecedentButton"><</button>'; // boutton pour aller à la page précédente
        //on met si besoin le boutton pour aller sur les 2 pages précédentes
        for (var i = 2; i > 0; i--) {
            if (page > i) {
                affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="-' + i + 'Page">' + (page - i) + '</button>';
            }
        }
        //boutton pour la page actuel (inutilisable)
        affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="pageActuel">' + page + '</button>';
        //boutton si possibilité pour aller sur les 2 pages suivantes
        for (var i = 1; i < 3; i++) {
            if (sizeCatalogue > page * 10 + 10 * (i - 1)) {
                affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="+' + i + 'Page">' + (page + i) + '</button>';
            }
        }
        //boutton pour aller sur la page suivantes
        affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="SuivantButton">></button>';
        //boutton pour aller sur la dernière page
        affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="FinButton">>></button>';
        affichageCatalogueFinal += '</div></div>'; //fermer les div des bouttons
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageCatalogueFinal; // on applique le html
        var _loop_1 = function (i) {
            document.getElementById("panier" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) {
                return _this.controller.buttonAddPanier(_this.catalogue.getProduit(i), document.getElementById("panier" + _this.catalogue.getProduit(i).nom));
            });
            document.getElementById("description" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) {
                return _this.controller.buttonDescriptionDetaille(_this.catalogue.getProduit(i));
            });
            document.getElementById("panierNombre" + this_1.catalogue.getProduit(i).nom).setAttribute("visible", "false"); // on désactive le boutton de la page actuel
        };
        var this_1 = this;
        //pour chaque porduit on met un evenement pour l'ajouter au panier et voir la description
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            _loop_1(i);
        }
        //si page 1 on disable le bouton du début et précédent
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
        //si on est a la dernière page on disable le boutton suivant et fin
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
        //on met l'évenement si possibilité pour atteindre les 2 page précédentes en relançant init
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
        //on met l'évenement si possibilité pour atteindre les 2 page suivantes en relançant init
        for (var i = 1; i < 3; i++) {
            _loop_3(i);
        }
        document.getElementById("pageActuel").setAttribute("disabled", "true"); // on désactive le boutton de la page actuel
    };
    CatalogueView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return CatalogueView;
}();
exports.CatalogueView = CatalogueView;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Cette classe est le modèle d'un panier
 */
var Panier = /** @class */function () {
    /**
     * Constructeur de la classe Panier
     */
    function Panier() {
        this._produitList = new Map();
    }
    /**
     * Fonction pour ajouter plusieurs fois le même produit dans le panier
     * @param {Produit} produit
     *  produit à ajouter au panier
     * @param {number} nombre
     *  nombre d'occurence du produit ajouter
     */
    Panier.prototype.addProduits = function (produit, nombre) {
        if (this._produitList.has(produit)) {
            this._produitList.set(produit, this._produitList.get(produit) + nombre); //si oui on additionne juste le nombre d'occurence actuel du produit avec le nouveau nombre
        } else {
            this._produitList.set(produit, nombre);
        }
    };
    /**
     * Fonction pour ajouter un seul produit dans le panier
     * @param {Produit} produit
     *  produit à ajouter
     */
    Panier.prototype.addProduit = function (produit) {
        this.addProduits(produit, 1); //on utilise la fonction addProduits() en mettant 1 comme argument pour le nombre
    };
    /**
     * Fonction pour supprimer plusieurs fois le même produit dans le panier
     * @param {Produit} produit
     *  produit à supprimer au panier
     * @param {number} nombre
     *  nombre d'occurence du produit supprimer
     */
    Panier.prototype.deleteProduits = function (produit, nombre) {
        if (this._produitList.has(produit)) {
            if (this._produitList.get(produit) <= nombre) {
                this._produitList.delete(produit); //si oui on peut directement supprimer le produit
            } else {
                this._produitList.set(produit, this._produitList.get(produit) - nombre); //sinon on soustrait les 2 valeurs
            }
        } else {
            throw new Error("Article inexistant dans le panier");
        }
    };
    /**
     * Fonction pour supprimer toute les occurences d'un produit dans le panier
     * @param {Produit} produit
     *  produit à supprimer
     */
    Panier.prototype.deleteProduit = function (produit) {
        this.deleteProduits(produit, this._produitList.get(produit)); //on utilise la méthode deleteProduit() en mettant en argument le nombre d'occurence du produit pour le nombre
    };
    Object.defineProperty(Panier.prototype, "produitList", {
        /**
         * Getter de la liste du panier
         * @returns {Map<Produit, number>}
         *  map du panier
         */
        get: function () {
            return this._produitList;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Méthode qui permet de récupérer le prix Hors-Taxe du panier
     * @returns {number}
     *  prix hors-taxe du panier
     */
    Panier.prototype.getPrixTotalHT = function () {
        var prix = 0;
        this.produitList.forEach(function (value, key, map) {
            prix += value * key.prix;
        });
        return prix; //on retourne le total
    };
    /**
     * Méthode qui permet de récupérer le prix Toute-Taxe-Comprise du panier
     * @returns {number}
     */
    Panier.prototype.getPrixTotalTTC = function () {
        var prix = 0;
        this.produitList.forEach(function (value, key, map) {
            prix += value * (key.prix * (1 + key.taxe / 100));
        });
        return prix;
    };
    /**
     * Cette méthode permet de vider le panier
     */
    Panier.prototype.clear = function () {
        this.produitList.clear(); //on vide le panier
    };
    /**
     *  Cette méthode permet de mettre un nombre bien préçis d'occurence pour un produit
     * @param {Produit} produit
     * @param {number} number
     */
    Panier.prototype.setNumberProduit = function (produit, number) {
        if (this.produitList.has(produit)) {
            this.produitList.set(produit, number);
        }
    };
    return Panier;
}();
exports.Panier = Panier;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var Controller_1 = __webpack_require__(1);
/**
 * Cette classe est le controlleur de la vue CatalogueView
 */
var CatalogueController = /** @class */function (_super) {
    __extends(CatalogueController, _super);
    function CatalogueController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Cette méthode permet d'ajouter au panier le produit choisi
     * @param {Produit} produit
     *  produit à ajouter dans le panier
     */
    CatalogueController.prototype.buttonAddPanier = function (produit, htmlParagraphElement) {
        this.getMain().panier.addProduit(produit); //on ajoute le produit au panier
        htmlParagraphElement.innerText = "Ajouter au panier : " + this.getMain().panier.produitList.get(produit);
        document.getElementById(index_1.Main.ID_PANIER_NUMBER_DIV).innerText = this.getMain().panier.produitList.size + ''; //on actualise l'affichage du nombre de produit différent dans le panier
    };
    /**
     * Cette méthode permet de montrer la vue de la description détaillée du produit
     * @param {Produit} produit
     *  produit que l'on souhaite voir sa description détaillé
     */
    CatalogueController.prototype.buttonDescriptionDetaille = function (produit) {
        this.getMain().showDescription(produit); //on lance la vue pour voir la description détaillé
    };
    CatalogueController.prototype.setNbPanier = function (produit) {
        return '<button id="panier' + produit.nom + '" type="button" class="btn btn-primary btn-sm">' + this.getMain().panier.produitList.get(produit) + '</button>';
    };
    CatalogueController.prototype.existProduitPanier = function (produit) {
        return this.getMain().panier.produitList.get(produit) != null;
    };
    return CatalogueController;
}(Controller_1.Controller);
exports.CatalogueController = CatalogueController;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
/**
 * Class qui permet de gérer la vue de la description du produit
 */
var DescriptionProduitView = /** @class */function () {
    /**
     * Constructeur de la classe
     * @param {Produit} produit
     *  produit à afficher la description
     */
    function DescriptionProduitView(produit) {
        this.produit = produit;
    }
    /**
     * Fonction appellé par main qui permet d'afficher la description du produit
     */
    DescriptionProduitView.prototype.init = function () {
        //-----------------Génération HTML---------------
        var _this = this;
        // //variable pour afficher la description du produit
        var affichageDescriptionProduitFinal = '<div class="container">' + '<div class="row"  style="background-color:lavender;">' + '<div class="col-xs-9" >' + '<img src="' + this.produit.srcImage + '" class="img-responsive">' + '</div>' + '<div class="col">' + '<div class="well" class="float-right">' + '<div class="text">' + '<h5>' + this.produit.nom + '</h5>' + '<h6 class="descri arme">' + this.produit.description + '</h6>' + '<h5>' + this.produit.prix + ' $</h5>' + '<button id="panier' + this.produit.nom + '" type="button" class="btn btn-primary btn-sm">Ajouter au Panier</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="text-center">' + '<div class="btn-group">' + '<button id="retourCatalogue" type="button" class="btn btn-dark">Retour au catalogue</button>' + '<div>' + '</div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageDescriptionProduitFinal; // on applique html à la main div
        //-------------événement--------//
        //événement pour rajouter le produit au panier en appellant la fonction addPanier du controller
        document.getElementById("panier" + this.produit.nom).addEventListener("click", function (e) {
            return _this.controller.addPanier(_this.produit);
        });
        //événement du bouton pour revenir au catalogue en lançant la fonction retourAccueil du controller
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var Controller_1 = __webpack_require__(1);
/**
 * Cette classe est le controlleur de la vue DescriptionProduit
 */
var DescriptionProduitController = /** @class */function (_super) {
    __extends(DescriptionProduitController, _super);
    function DescriptionProduitController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Cette méthode permet d'ajouter un produit au panier
     * @param {Produit} produit
     *  produit à ajouter au panier
     */
    DescriptionProduitController.prototype.addPanier = function (produit) {
        this.getMain().panier.addProduit(produit); //on ajoute le produit au panier
        document.getElementById(index_1.Main.ID_PANIER_NUMBER_DIV).innerText = this.getMain().panier.produitList.size + ''; //on actualise la nombre de produit différent dans le panier
    };
    /**
     * Cette méthode permet de retourner au catalogue
     */
    DescriptionProduitController.prototype.retourAccueil = function () {
        this.getMain().showCatalogue(); //on affiche la vue du catalogue
    };
    return DescriptionProduitController;
}(Controller_1.Controller);
exports.DescriptionProduitController = DescriptionProduitController;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
/**
 * Class qui permet de gérer la vue de l'affichage du panier, du coût et taxes
 */
var PanierView = /** @class */function () {
    /**
     * Constructeur de la classe
     * @param {Panier} panier
     *  panier à utiliser pour la vue
     */
    function PanierView(panier) {
        this.panier = panier;
    }
    /**
     * Fonction appellé par main qui permet d'afficher le panier
     */
    PanierView.prototype.init = function () {
        //-----------------Génération HTML---------------
        var _this = this;
        //variable pour afficher le panier
        var affichagePanierFinal = "";
        affichagePanierFinal += '<div class="container">' + '<div class="row"  style="background-color:lavender;">';
        //affichage de chaque produit dans le panier
        this.panier.produitList.forEach(function (value, key, map) {
            affichagePanierFinal += '<table id="Liste panier">' + '<tr>' + '<th id="th-tabl-img">Image produit</th>' + '<th>Nom produit</th>' + '<th>Prix Unité</th>' + '<th>Nombre</th>' + '</tr>' + '<tr>' + '<td id="tabl-img"><img class="img-tableau" src="' + key.srcImage + '"></td>' + '<td><p id="nom' + key.nom + '" >' + key.nom + '</p></td>' + '<td><p>' + key.description.slice(0, 30) + '...</p></td>' + '<td>' + '<div class="btn-group btn-group-nombre">' + '<input type="text" class="form-control usr-panier" id="nombre' + key.nom + '" value="' + value + '">' + '</div>' + '<div class="btn-group">' + '<button type="button" class="btn btn-dark button-panier" id="enlever' + key.nom + '">-</button>' + '<button type="button" class="btn btn-dark bouton-panier-nombrebutton-panier2" id="ajouter' + key.nom + '">+</button>' + '</div>' + '</td>' + '</tr>' + '</table>';
        });
        affichagePanierFinal += '<table class="taxe-panier-petit">' + '<tr>' + '<th class="th-taxe">Hors taxe</th>' + '<td class="td-taxe-vide">:</td>' + '<td class="td-taxe" id="prixTotalHT">' + this.panier.getPrixTotalHT() + '</td>' + //affichage du prix Hors Taxe
        '</tr>' + '<tr>' + '<th class="th-taxe">Taxe</th>' + '<td class="td-taxe-vide">:</td>' + '<td class="td-taxe" id="ajoutTaxe">' + (this.panier.getPrixTotalTTC() - this.panier.getPrixTotalHT()) + '</td>' + //affichage des Taxes
        '</tr>' + '<tr>' + '<th class="th-taxe">Livraison</th>' + '<td class="td-taxe-vide">:</td>' + '<td class="td-taxe" id="livraison">' + index_1.Main.COUT_LIVRAISON + '</td>' + //affichage du cout de livraison
        '</tr>' + '<tr>' + '<th class="th-taxe">Prix final</th>' + '<td class="td-taxe-vide">:</td>' + '<td class="td-taxe" id="prixTotalTTC">' + (this.panier.getPrixTotalTTC() + index_1.Main.COUT_LIVRAISON) + '</td>' + //affichage du côut total
        '</tr>' + '</table>';
        affichagePanierFinal += '<div class="container">' + '<button id="acheter" type="button" class="btn btn-primary btn-sm">Acheter le panier</button>' + //bouton pour acheter le panier
        '</div>';
        affichagePanierFinal += '</div></div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichagePanierFinal; //applique html à la main div
        //-------------événement--------//
        //Pour chaque produit on applique des évenements pour gérer leur nombre
        this.panier.produitList.forEach(function (value, key, map) {
            //nombre de produit qu'on peut modifier à la main ce qui lance la fonction changeNumberProduit
            document.getElementById("nombre" + key.nom).addEventListener("input", function (e) {
                return _this.changeNumberProduit(key, //produit
                Number.parseInt(document.getElementById("nombre" + key.nom).value) //nombre de produit
                );
            });
            //boutton qui permet de décrémenter le nombre de produit en lançant la fonction removeNumberProduit
            document.getElementById("enlever" + key.nom).addEventListener("click", function (e) {
                return _this.removeNumberProduit(key);
            });
            //boutton qui permet d'incrémenter le nombre de produit en lançant la fonction addNumberProduit
            document.getElementById("ajouter" + key.nom).addEventListener("click", function (e) {
                return _this.addNumberProduit(key);
            });
        });
        //boutton acheter qui lance la fonction acheter du controller
        document.getElementById("acheter").addEventListener("click", function (e) {
            return _this.controller.acheter();
        });
    };
    PanierView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    /**
     * Méthode qui permet de changer le nombre de produit dans le panier (et visuellement)
     * @param {Produit} produit
     *  produit où son nombre à changer
     * @param {number} number
     *  nouveaux nombre du produit présent dans le panier
     */
    PanierView.prototype.changeNumberProduit = function (produit, number) {
        if (number > 0 && number <= 999) {
            this.controller.changeNumberProduit(produit, number); //fonction pour changer le nombre de produit
            this.initPrix(); //réinitialle les prix par rapport aux modification précédente
        } else if (number == 0) {
            if (confirm("Cet action entrainera la supression de ce produit de votre panier.\nEn êtes vous sûr?")) {
                this.controller.deleteProduit(produit);
                if (this.panier.produitList.size == 0) {
                    this.controller.retouraccueil();
                } else {
                    this.init();
                }
            }
        } else {
            alert("Chiffre entre 1 et 999");
            document.getElementById("nombre" + produit.nom).value = 1 + "";
        }
    };
    /**
     * Méthode qui permet d'ajoute un au nombre du produit
     * @param {Produit} key
     *  produti à incrémenter en nombre
     */
    PanierView.prototype.addNumberProduit = function (key) {
        var input = document.getElementById("nombre" + key.nom); //on récupère l'input du nombre de produit
        if (Number.parseInt(input.value) < 999) {
            input.value = Number.parseInt(input.value) + 1 + ""; //on incrémente le nombre visuellement
            this.controller.addProduit(key);
            this.initPrix(); //réinitialle les prix par rapport aux modification précédente
        } else {
            alert("Vous en avez peut être déja assez non ?"); //message qui s'affiche si on dépasse la limite
        }
    };
    /**
     * Méthode qui permet de décrémenter le nombre du produit
     * @param {Produit} key
     *  produti à incrémenter en nombre
     */
    PanierView.prototype.removeNumberProduit = function (key) {
        var input = document.getElementById("nombre" + key.nom); //on récupère l'input du nombre de produit
        if (Number.parseInt(input.value) > 1) {
            input.value = Number.parseInt(input.value) - 1 + ""; //on décrémente le nombre visuellement
            this.controller.deleteProduits(key);
        } else {
            if (confirm("Cet action entrainera la supression de ce produit de votre panier.\nEn êtes vous sûr?")) {
                this.controller.deleteProduit(key);
                if (this.panier.produitList.size == 0) {
                    this.controller.retouraccueil();
                } else {
                    this.init();
                }
            }
        }
        if (this.panier.produitList.size != 0) {
            this.initPrix(); //réinitialle les prix par rapport aux modification précédente
        }
    };
    /**
     * Méthode qui permet de gérer la réinitialisation du prix à chaque modification du panier
     */
    PanierView.prototype.initPrix = function () {
        document.getElementById("prixTotalHT").textContent = this.panier.getPrixTotalHT() + ''; //on recalcule le prix HT
        document.getElementById("ajoutTaxe").textContent = this.panier.getPrixTotalTTC() - this.panier.getPrixTotalHT() + ''; //on recalcule le cout des taxes
        document.getElementById("prixTotalTTC").textContent = '' + (this.panier.getPrixTotalTTC() + index_1.Main.COUT_LIVRAISON); //on recalcule le prix total avec la livraison
    };
    return PanierView;
}();
exports.PanierView = PanierView;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = __webpack_require__(1);
/**
 * Cette classe est le controlleur de la vue PanierView
 */
var PanierController = /** @class */function (_super) {
    __extends(PanierController, _super);
    function PanierController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Cette méthode permet de changer le nombre de fois qu'on achète le produit
     * @param {Produit} produit
     *  produit où on change son nombre d'occurence dans le panier
     * @param {number} number
     *  nombre d'occurence du produit dans le panier
     */
    PanierController.prototype.changeNumberProduit = function (produit, number) {
        this.getMain().panier.setNumberProduit(produit, number);
    };
    /**
     * Cette méthode permet d'acheter le panier ainsi que de le vider
     */
    PanierController.prototype.acheter = function () {
        //on actualise l'affichage de nombre de produit différent du nav
        this.getMain().showConfirmPage(); //on affiche la vue de la confirmation de réussite ou d'échec de l'achat
        this.getMain().panier.clear(); //on vide d'abord le panier
        this.getMain().actualisePanierNumber();
    };
    PanierController.prototype.addProduit = function (key) {
        this.getMain().panier.addProduit(key); //on incrémente le nombre dans le panier
        this.getMain().actualisePanierNumber();
    };
    PanierController.prototype.deleteProduits = function (key) {
        this.getMain().panier.deleteProduits(key, 1); //on décrémente le nombre dans le panier
    };
    PanierController.prototype.deleteProduit = function (key) {
        this.getMain().panier.deleteProduit(key); //on supprimer le produit du panier
        this.getMain().actualisePanierNumber();
    };
    PanierController.prototype.retouraccueil = function () {
        alert("Le panier est vide.\nRetour au catalogue.");
        this.getMain().showCatalogue();
    };
    return PanierController;
}(Controller_1.Controller);
exports.PanierController = PanierController;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
/**
 * Class qui permet de gérer la vue pour la connexion
 */
var ConnexionView = /** @class */function () {
    function ConnexionView() {}
    /**
     * Fonction appellé par main qui permet d'afficher le formulaire de connexion
     */
    ConnexionView.prototype.init = function () {
        //-----------------Génération HTML---------------
        var _this = this;
        // variable pour afficher  le formulaire de connexion
        var affichageFormulaireConnexionFinal = "";
        affichageFormulaireConnexionFinal += '<div class="container">' + '<div class="row"  style="background-color:lavender;">' + '<div class="well" class="float-center">' + '<form>' + '<div class="form-group">' + '<h7>Nom d\'utilisateur :</h7>' + '<input id ="idUser" type="text" placeholder="Identifiant" class="form-control">' + '</div>' + '<div class="form-group">' + '<h7>Mot de passe :</h7>' + '<input id="mdpUser" type="password" placeholder="Mot de passe" class="form-control">' + '</div>' + '</form>' + '<button id="connexionUser" type="button" class="btn btn-primary btn-sm" >Connexion</button>' + '</div>' + '</div>' + '</div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageFormulaireConnexionFinal; // on applique html à la main div
        //-------------événement--------//
        //évenement du boutton de Connexion qui lance la fonction la connexion du controller
        document.getElementById("connexionUser").addEventListener("click", function (e) {
            return _this.controller.connexion(document.getElementById("idUser").value //identifiant
            , document.getElementById("mdpUser").value // mot de passe
            );
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __webpack_require__(2);
var Controller_1 = __webpack_require__(1);
/**
 * Cette classe est controlleur de la vue ConnexionView
 */
var ConnexionController = /** @class */function (_super) {
    __extends(ConnexionController, _super);
    function ConnexionController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Cette méthode permet de pouvoir se connecter et de vérifier si l'identifiant et mot de passe et correct
     * @param {string} id
     *  identifiant de connexion
     * @param {string} mdp
     *  mot de passe de connexion
     */
    ConnexionController.prototype.connexion = function (id, mdp) {
        var user = new User_1.User(id, mdp); // création de l'utilisateur
        if (user.connexion(_super.prototype.getMain.call(this).listUser)) {
            this.getMain().user = user; //si oui on met l'utilsateur en utilsateur courant
            document.getElementById("connexion").innerHTML = id + '/Déconnexion'; //on modifie le texte du boutton de connexion par "'id'/Déconnexion"
            document.getElementById("panier").style.visibility = "hidden"; //on supprime le bouton panier de l'affichage(car c'est un admin)
            this.getMain().panier.clear();
            this.getMain().actualisePanierNumber();
            this.getMain().showAdminPage();
        } else {
            alert("les informations de connexion sont incorrect");
        }
    };
    return ConnexionController;
}(Controller_1.Controller);
exports.ConnexionController = ConnexionController;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = __webpack_require__(1);
/**
 * Cette classe est le controlleur de la vue AdminPageView
 */
var AdminPageController = /** @class */function (_super) {
    __extends(AdminPageController, _super);
    function AdminPageController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Cette méthode permet de supprimer un produit du catalogue sans changer de page
     * @param {Produit} produit
     *  produit à supprimer
     * @param {number} page
     *  numéro de page actuel
     */
    AdminPageController.prototype.supprimerProduit = function (produit, page) {
        if (confirm("Etes vous sur de vouloir le supprimer")) {
            this.getMain().catalogue.deleteProduit(produit); //on supprime le produit du catalogue
            this.getMain().showAdminPage(page); //on actualise la vue (en concervant la page)
        }
    };
    /**
     * Cette méthode permet de lancer la vue pour modifier un produit
     * @param {Produit} produit
     *  produit à modifier
     */
    AdminPageController.prototype.modifierProduit = function (produit) {
        this.getMain().showProduitUpdate(produit); //lance la vue produitUpdate
    };
    /**
     * Cette méthode permet de lancer la vue pour créer un nouveaux produit
     */
    AdminPageController.prototype.createProduit = function () {
        this.getMain().showCreateProduit(); //lance la vue createProduit
    };
    return AdminPageController;
}(Controller_1.Controller);
exports.AdminPageController = AdminPageController;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
/**
 * Class qui permet de gérer la vue de l'affichage de la gestion du catalogue par l'admin
 */
var AdminPageView = /** @class */function () {
    /**
     * Constructeur de la classe
     * @param {Catalogue} catalogue
     */
    function AdminPageView(catalogue) {
        this.catalogue = catalogue;
    }
    /**
     * Fonction appellé par main qui permet d'afficher la gestion du catalogue
     * @param {number} page
     */
    AdminPageView.prototype.init = function (page) {
        //-----------------Génération HTML---------------
        var _this = this;
        //variable pour afficher la gestion du catalgue
        var affichageAdminPageFinal = "";
        var sizeCatalogue = this.catalogue.produitList.length; //taille du catalogue
        var indiceDebutCatalogue = (page - 1) * 10; //indice de début  de la liste
        var indiceFinCatalogue = Math.min(sizeCatalogue, 10 * page); //indice de fin de la liste
        //boutton pour ajouter un article
        affichageAdminPageFinal += '<div class="container">' + '<button type="button" class="btn btn-primary btn-block" id="addProduit">Ajouter Produit</button>';
        '</div>';
        //affichage de chaque produit
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            affichageAdminPageFinal += '<div class="container">' + '<div class="row" style="background-color:lavender;">' + '<div class="col-xs-9" >' + '<img src="' + this.catalogue.getProduit(i).srcImage + '" class="img-responsive">' + '</div>' + '<div class="col">' + '<div class="well" class="float-right">' + '<div class="text">' + '<h5>' + this.catalogue.getProduit(i).nom + '</h5>' + '<h6 class="text-descri-detaille-admin" class="descri arme">' + this.catalogue.getProduit(i).description.slice(0, this.catalogue.MAX_CHAR_DESCRIPTION) + '...</h6>' + '<h5>' + this.catalogue.getProduit(i).prix + ' $</h5> ' + '<button type="button" class="btn btn-primary btn-sm" id="update' + this.catalogue.getProduit(i).nom + '">Modifier</button>' + '<button type="button" class="btn btn-primary btn-sm" id="delete' + this.catalogue.getProduit(i).nom + '">Supprimer</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>';
        }
        //--Boutton catalogue--
        affichageAdminPageFinal += '<div class="text-center">' + '<div class="btn-group">' + '<button type="button" class="btn btn-dark" id="DebutButton"><<</button>' + // boutton pour revenir au début
        '<button type="button" class="btn btn-dark" id="PrecedentButton"><</button>'; // boutton pour aller à la page précédente
        //on met si besoin le boutton pour aller sur les 2 pages précédentes
        for (var i = 2; i > 0; i--) {
            if (page > i) {
                affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="-' + i + 'Page">' + (page - i) + '</button>';
            }
        }
        //boutton pour la page actuel (inutilisable)
        affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="pageActuel">' + page + '</button>';
        //boutton si possibilité pour aller sur les 2 pages suivantes
        for (var i = 1; i < 3; i++) {
            if (sizeCatalogue > page * 10 + 10 * (i - 1)) {
                affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="+' + i + 'Page">' + (page + i) + '</button>';
            }
        }
        //boutton pour aller sur la page suivantes
        affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="SuivantButton">></button>';
        //boutton pour aller sur la dernière page
        affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="FinButton">>></button>';
        affichageAdminPageFinal += '</div></div>'; //fermer les div des bouttons
        // on applique le html
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageAdminPageFinal;
        var _loop_1 = function (i) {
            document.getElementById("update" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) {
                return _this.controller.modifierProduit(_this.catalogue.getProduit(i));
            });
            document.getElementById("delete" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) {
                return _this.controller.supprimerProduit(_this.catalogue.getProduit(i), page);
            });
        };
        var this_1 = this;
        //on place les boutton pour modifier et supprimer les produits
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            _loop_1(i);
        }
        //si page 1 on disable le bouton du début et précédent
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
        //si on est a la dernière page on disable le boutton suivant et fin
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
        //on met l'évenement si possibilité pour atteindre les 2 page précédentes en relançant init
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
        //on met l'évenement si possibilité pour atteindre les 2 page suivantes en relançant init
        for (var i = 1; i < 3; i++) {
            _loop_3(i);
        }
        // on désactive le boutton de la page actuel
        document.getElementById("pageActuel").setAttribute("disabled", "true");
        //évenement pour pouvoir ajouter un produit
        document.getElementById("addProduit").addEventListener("click", function (e) {
            return _this.controller.createProduit();
        });
    };
    AdminPageView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return AdminPageView;
}();
exports.AdminPageView = AdminPageView;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
/**
 * Class qui permet de gérer la vue d'une modification de produit par un admin
 */
var ProduitUpdtateView = /** @class */function () {
    /**
     * Constructeur de la classe ProduitUpdtateView
     * @param {Produit} produit
     *  le produit à modifier
     */
    function ProduitUpdtateView(produit) {
        this.produit = produit;
    }
    /**
     * Méthode qui permet de set up le controller pour la vue
     * @param {ProduitUpdateController} controller
     *  controller pour la vue
     * @param {Main} main
     *  la classe main est à rajouter dans la classe main afin de permettre au controller de modifier les infos principaux
     */
    ProduitUpdtateView.prototype.setController = function (controller, main) {
        this.controller = controller;
        this.controller.setMain(main);
    };
    /**
     * Fonction appellé par main qui permet d'afficher le produit à modifier et les différents éléments
     */
    ProduitUpdtateView.prototype.init = function () {
        //-----------------Génération HTML---------------
        var _this = this;
        //affichage du produit à modifier
        var affichageProduitUpdateFinal = '<div class="container">' + '<div class="row"  style="background-color:lavender;">' + '<div class="col-xs-9" >' + '<img src="' + this.produit.srcImage + '" class="img-responsive img-decri-deta">' + '</div>' + '<div class="col">' + '<div class="well" class="float-right">' + '<div class="text">' + '<h5>Titre de l\'arme :</h5>' + '<input class="form-control fc1" rows="1" id="titre" value="' + this.produit.nom + '">' + '<h5>Description de l\'arme :</h5>' + '<textarea class="form-control fc2" rows="3" id="description" rows="4" cols="50">' + this.produit.description + '</textarea>' + '<h5>Prix de l\'arme :</h5>' + '<input class="form-control fc3" rows="1" id="prix" value="' + this.produit.prix + '">' + '<button  id="modifier" type="button" class="btn btn-primary btn-sm">Modifer</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="text-center">' + '<div class="btn-group">' + '<button id="retourCatalogue" type="button" class="btn btn-dark">Retour au catalogue</button>' + '</div>' + '</div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageProduitUpdateFinal; //applique html à la main div
        //-------------événement--------//
        //évenement pour le boutton "modifier" qui appelle la fonction du controller qui modifie le produit
        document.getElementById("modifier").addEventListener("click", function (e) {
            return _this.controller.updateProduit(document.getElementById("titre").value //titre du produit
            , document.getElementById("description").value //description du produit
            , document.getElementById("prix").value, //prix du produit
            _this.produit);
        });
        //évenement pour le bouton "Retour au catalogue" qui appelle la fonction du controller qui renvoie à la page d'accueil
        document.getElementById("retourCatalogue").addEventListener("click", function (e) {
            return _this.controller.retourAccueil();
        });
    };
    return ProduitUpdtateView;
}();
exports.ProduitUpdtateView = ProduitUpdtateView;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = __webpack_require__(1);
/**
 * Cette classe est le controlleur de la vue ProduitUpdate
 */
var ProduitUpdateController = /** @class */function (_super) {
    __extends(ProduitUpdateController, _super);
    function ProduitUpdateController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Cette méthode permet de revenir à l'accueil de l'admin
     */
    ProduitUpdateController.prototype.retourAccueil = function () {
        this.getMain().showAdminPage(); //lance la vue de la page d'admin
    };
    /**
     * Cette méthode permet de modifier un produit du catalogue
     * @param {string} titre
     *  nouveau titre du produit
     * @param {string} description
     *  nouvelle description du produit
     * @param {string} prix
     *  nouveau prix du produit
     * @param {Produit} produit
     *  produit à modifier
     */
    ProduitUpdateController.prototype.updateProduit = function (titre, description, prix, produit) {
        var indice = 0;
        var ajout = true;
        for (indice; indice < this.getMain().catalogue.produitList.length; indice++) {
            if (this.getMain().catalogue.getProduit(indice).nom == produit.nom) {
                for (var i = 0; i < this.getMain().catalogue.produitList.length; i++) {
                    if (this.getMain().catalogue.getProduit(i).nom == titre) {
                        console.log(this.getMain().catalogue.getProduit(i).nom + "/" + titre);
                        alert("un produit porte déja ce nom\nVeuillez prendre un autre nom");
                        ajout = false;
                        break;
                    }
                }
                if (ajout) {
                    this.getMain().catalogue.getProduit(indice).nom = titre;
                    this.getMain().catalogue.getProduit(indice).description = description;
                    this.getMain().catalogue.getProduit(indice).prix = Number.parseInt(prix);
                }
                break; //on sort de la boucle des qu'on l'a trouvé
            }
        }
        if (ajout) {
            this.getMain().showAdminPage(); //et on réaffiche la page d'admin
        }
    };
    return ProduitUpdateController;
}(Controller_1.Controller);
exports.ProduitUpdateController = ProduitUpdateController;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
/**
 * Class qui permet de gérer la vue de la confirmation d'achat du panier
 */
var ConfirmPageView = /** @class */function () {
    /**
     * Constructeur de la classe
     * @param {boolean} reussite
     *  booléan pour savoir si la transaction est réussite ou non
     */
    function ConfirmPageView(reussite, panier) {
        this.reussite = reussite;
        this.panier = panier;
    }
    /**
     * Fonction appellé par main qui permet d'afficher la confirmation d'achat
     */
    ConfirmPageView.prototype.init = function () {
        //-----------------Génération HTML---------------
        // variable pour afficher  la confirmation d'achat
        var affichageConfirmationFinal = "";
        if (this.reussite) {
            affichageConfirmationFinal += '<div class="container">' + '<div class="row"  style="background-color:lavender;">' + '<div class="well" class="float-left">' + '<div class="col-xs-2">' + '<h6 class="Transaction"> ID Transaction : <br> <span id="ID-Trans">' + this.getIdTransaction() + '</span></h6>' + '<p class="Date1"> Date et heure de la transaction : <br> <span id="ID-Trans">' + this.getDate() + '</span></p>' + '</div>' + '<table class="tabl-centre">' + '<tr>' + '<th>Nom produit</th>' + '<th>Nombre</th>' + '<th>Prix total du produit</th>' + '</tr>';
            this.panier.produitList.forEach(function (value, key, map) {
                affichageConfirmationFinal += '<tr>' + '<td>' + key.nom + '</td>' + '<td>' + value + '</td>' + '<td>' + key.prix * value + '</td>' + '</tr>';
            });
            affichageConfirmationFinal += '<table class="taxe-panier-petit tabl-centre">' + '<tr>' + '<th class="th-taxe">Hors taxe</th>' + '<td class="td-taxe-vide">:</td>' + '<td class="td-taxe" id="prixTotalHT">' + this.panier.getPrixTotalHT() + '</td>' + //affichage du prix Hors Taxe
            '</tr>' + '<tr>' + '<th class="th-taxe">Taxe</th>' + '<td class="td-taxe-vide">:</td>' + '<td class="td-taxe" id="ajoutTaxe">' + (this.panier.getPrixTotalTTC() - this.panier.getPrixTotalHT()) + '</td>' + //affichage des Taxes
            '</tr>' + '<tr>' + '<th class="th-taxe">Livraison</th>' + '<td class="td-taxe-vide">:</td>' + '<td class="td-taxe" id="livraison">' + index_1.Main.COUT_LIVRAISON + '</td>' + //affichage du cout de livraison
            '</tr>' + '<tr>' + '<th class="th-taxe">Prix final</th>' + '<td class="td-taxe-vide">:</td>' + '<td class="td-taxe" id="prixTotalTTC">' + (this.panier.getPrixTotalTTC() + index_1.Main.COUT_LIVRAISON) + '</td>' + //affichage du côut total
            '</tr>' + '</table>';
        } else {
            affichageConfirmationFinal = '<div class="container">' + '<div class="row"  style="background-color:lavender;">' + '<div class="well" class="float-left">' + '<div class="col-xs-2">' + '<p> Le payement a été refusé pour cause de <span class="raison-pas-payement">pane technique suite au renfersement de café de la part du stagiaire</span></p>' + '<p>Vous pouvez retourner à la poutique</p>' + '</div>' + '</div>' + '</div>' + '</div>';
        }
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageConfirmationFinal;
    };
    ConfirmPageView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    /**
     * Permet de générer un id de transaction de format : LETTRE*5+CHIFFRE*10
     * @returns {string}
     */
    ConfirmPageView.prototype.getIdTransaction = function () {
        var res = "";
        for (var i = 0; i < 5; i++) {
            res += String.fromCharCode(65 + this.getRandomNumber(26)); // on effectue un random avec 26 en max pour les lettres de l'alphabet
        }
        for (var i = 0; i < 10; i++) {
            res += this.getRandomNumber(9); // on effectue un random avec 9 au max
        }
        return res;
    };
    /**
     * Permet de générer un nombre aléatoire
     * @param {number} max
     *  Max à générer
     * @returns {number}
     *  nombre générer
     */
    ConfirmPageView.prototype.getRandomNumber = function (max) {
        return Math.floor(Math.random() * max);
    };
    ConfirmPageView.prototype.getDate = function () {
        var date = new Date();
        return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
    return ConfirmPageView;
}();
exports.ConfirmPageView = ConfirmPageView;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = __webpack_require__(1);
var ConfirmPageController = /** @class */function (_super) {
    __extends(ConfirmPageController, _super);
    function ConfirmPageController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConfirmPageController;
}(Controller_1.Controller);
exports.ConfirmPageController = ConfirmPageController;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
/**
 * Class qui permet de gérer la vue pour la création d'un produit
 */
var CreateProduitView = /** @class */function () {
    function CreateProduitView() {}
    /**
     * Fonction appellé par main qui permet d'afficher la création du produit
     */
    CreateProduitView.prototype.init = function () {
        //-----------------Génération HTML---------------
        var _this = this;
        // variable pour afficher le formulaire pour créer le produit
        var affichageCreateProduitFinal = '<div class="container">' + '<div class="row"  style="background-color:lavender;">' + '<div class="col-xs-9" >' + '<p id="imageSRC"></p>' + '</div>' + '<div class="col">' + '<div class="well" class="float-right">' + '<div class="text">' + '<h5>Titre de l\'arme :</h5>' + '<input class="form-control fc1" rows="1" id="titre" >' + '<h5>Description de l\'arme :</h5>' + '<textarea class="form-control fc2" id="description" rows="4" cols="50"></textarea>' + '<h5>Prix de l\'arme :</h5>' + '<input class="form-control fc4" rows="1" id="prix">' + '<h5>Valeur de la taxe :</h5>' + '<input class="form-control fc5" rows="1" id="taxe" value="30">' + '<button class="btn btn-primary btn-sm" id="createProduit">Créer le produit</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageCreateProduitFinal; // on applique html à la main div
        //-------------événement--------//
        //évennement sur le boutton créer le produit qui lance la fonction createProduit du controlleur
        document.getElementById("createProduit").addEventListener("click", function (e) {
            return _this.controller.createProduit(document.getElementById("titre").value, //titre du produit
            document.getElementById("description").value, //description du produit
            document.getElementById("prix").value, //prix du produit
            document.getElementById("taxe").value);
        });
    };
    CreateProduitView.prototype.setController = function (controller, main) {
        this.controller = controller;
        this.controller.setMain(main);
    };
    return CreateProduitView;
}();
exports.CreateProduitView = CreateProduitView;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = __webpack_require__(1);
var Produit_1 = __webpack_require__(4);
var index_1 = __webpack_require__(0);
/**
 * Cette classe est le controlleur de la vue CreateProduitView
 */
var CreateProduitController = /** @class */function (_super) {
    __extends(CreateProduitController, _super);
    function CreateProduitController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Cette méthode permet de créer un nouveau produit dans le catalogue
     * @param {string} titre
     *  titre du nouveau produit
     * @param {string} description
     *  description du nouveau produit
     * @param {string} prix
     *  prix du nouveau produit
     * @param {string} taxe
     *  taxe du nouveau produit
     */
    CreateProduitController.prototype.createProduit = function (titre, description, prix, taxe) {
        var produit = new Produit_1.Produit(titre, description, Number.parseInt(prix), index_1.Main.SRC_FICHIER + "placeholder.jpg", Number.parseInt(taxe)); // on met comme image un placeholder pour le produit
        var ajout = true;
        for (var i = 0; i < this.getMain().catalogue.produitList.length; i++) {
            if (this.getMain().catalogue.getProduit(i).nom == titre) {
                console.log(this.getMain().catalogue.getProduit(i).nom + "/" + titre);
                alert("un produit porte déja ce nom\nVeuillez prendre un autre nom");
                ajout = false;
                break;
            }
        }
        if (ajout) {
            this.getMain().catalogue.addProduit(produit); //on ajoute le produit au catalogue
            this.getMain().showAdminPage(); //on affiche la page de gestion de catalogue(page admin)
        }
    };
    return CreateProduitController;
}(Controller_1.Controller);
exports.CreateProduitController = CreateProduitController;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Catalogue_1 = __webpack_require__(3);
var CatalogueView_1 = __webpack_require__(5);
var Panier_1 = __webpack_require__(6);
var CatalogueController_1 = __webpack_require__(7);
var DescriptionProduitView_1 = __webpack_require__(8);
var DescriptionProduitController_1 = __webpack_require__(9);
var PanierView_1 = __webpack_require__(10);
var PanierController_1 = __webpack_require__(11);
var ConnexionView_1 = __webpack_require__(12);
var ConnexionController_1 = __webpack_require__(13);
var User_1 = __webpack_require__(2);
var AdminPageController_1 = __webpack_require__(14);
var AdminPageView_1 = __webpack_require__(15);
var ProduitUpdateView_1 = __webpack_require__(16);
var ProduitUpdateController_1 = __webpack_require__(17);
var ConfirmPageView_1 = __webpack_require__(18);
var ConfirmPageController_1 = __webpack_require__(19);
var CreateProduitView_1 = __webpack_require__(20);
var CreateProduitController_1 = __webpack_require__(21);
/**
 * Appeler au lancement permet d'instancier la fonction main
 */
window.onload = function () {
    console.log("ONLOAD");
    var main = new Main();
    main.init();
};
/**
 * Cette classe est la classe principal du programme c'est celle qui contient les données importance au site et les fonctions pour afficher le contenu
 */
var Main = /** @class */function () {
    function Main() {}
    /**
     * Méthode qui permet d'initialiser les variable de la class ainsi que les événements de la barre de navigation
     */
    Main.prototype.init = function () {
        var _this = this;
        this.catalogue = Catalogue_1.Catalogue.init(); //on init le catalogue avec des produits pré-créer
        this.panier = new Panier_1.Panier(); // on initialise le catalogue
        this.listUser = new Array(); //on initialise la liste d'utilisateur
        this.listUser.push(new User_1.User("admin", "admin")); //on créer l'utilisateur qui peut se connecter (Dans ce cas il n'y en as qu'un, mais au moins la liste est prête si besoin de modification pour prochaine TP
        document.getElementById("panier").addEventListener("click", function (e) {
            return _this.showPanier();
        }); //on créer l'événement du bouton panier
        document.getElementById("connexion").addEventListener("click", function (e) {
            return _this.buttonConnexion();
        }); //on créer l'évenement du bouton connexion
        document.getElementById("accueil").addEventListener("click", function (e) {
            return _this.showAccueil();
        }); //on créer l'évenement du bouton accueil
        this.showCatalogue(); //on affiche le catalogue qui sert de page d'accueil du site
    };
    /**
     * Méthode qui permet d'afficher le catalogue
     */
    Main.prototype.showCatalogue = function () {
        var catalogueView = new CatalogueView_1.CatalogueView(this.catalogue); //on initialise la vue du catalogue
        catalogueView.setController(new CatalogueController_1.CatalogueController(), this); //on set le controller de la vue
        catalogueView.init(1); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet d'afficher la description détaillé du produit
     * @param {Produit} produit
     *  produit que l'on veut voir sa description détaillé
     */
    Main.prototype.showDescription = function (produit) {
        var descriptionView = new DescriptionProduitView_1.DescriptionProduitView(produit); //on initialise la vue de la description de produit
        descriptionView.setController(new DescriptionProduitController_1.DescriptionProduitController(), this); //on set le controller de la vue
        descriptionView.init(); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet d'afficher le panier si il n'est pas vide
     */
    Main.prototype.showPanier = function () {
        if (this.panier.produitList.size == 0) {
            alert("Panier Vide"); //si vide on prévient l'utilisateur
        } else {
            var panierView = new PanierView_1.PanierView(this.panier); //on initialise la vue du panier
            panierView.setController(new PanierController_1.PanierController(), this); //on set le controller de la vue
            panierView.init(); //on affiche le contenu de la page
        }
    };
    /**
     * Méthode qui permet d'afficher la page pour pouvoir se connecter
     */
    Main.prototype.showConnexion = function () {
        var connexionView = new ConnexionView_1.ConnexionView(); //on initialise la vue pour se connecter
        connexionView.setController(new ConnexionController_1.ConnexionController(), this); //on set le controller de la vue
        connexionView.init(); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet d'afficher la page de gestion du catalogue d'un admin
     * @param {number} page
     *  page du catalogue à afficher
     */
    Main.prototype.showAdminPage = function (page) {
        var adminPageView = new AdminPageView_1.AdminPageView(this.catalogue); //on initialise la vue pour les admins
        adminPageView.setController(new AdminPageController_1.AdminPageController(), this); //on set le controller de la vue
        adminPageView.init(page || 1); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet de modifier un produit
     * @param {Produit} produit
     *  produit à modifier
     */
    Main.prototype.showProduitUpdate = function (produit) {
        var produitUpdtateView = new ProduitUpdateView_1.ProduitUpdtateView(produit); //on initialise la vue pour la modification de produit
        produitUpdtateView.setController(new ProduitUpdateController_1.ProduitUpdateController(), this); //on set le controller de la vue
        produitUpdtateView.init(); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet d'avoir la confirmation si l'achat à réussi ou non
     */
    Main.prototype.showConfirmPage = function () {
        var confirmPageView = new ConfirmPageView_1.ConfirmPageView(this.getRandomBoolean(), this.panier); //on initialise la vue avec un boolean pour la confirmation (réussi/échec)
        confirmPageView.setController(new ConfirmPageController_1.ConfirmPageController(), this); //on set le controller de la vue
        confirmPageView.init(); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet d'avoir l'écran de création de produit
     */
    Main.prototype.showCreateProduit = function () {
        var createProduitView = new CreateProduitView_1.CreateProduitView(); //on initialise la vue
        createProduitView.setController(new CreateProduitController_1.CreateProduitController(), this); //on set le controller de la vue
        createProduitView.init(); //on affiche le contenu de la page
    };
    /**
     * Méthode qui permet d'avoir un boolean aléatoirement
     * @returns {boolean}
     */
    Main.prototype.getRandomBoolean = function () {
        return Math.random() * 2 > 1;
    };
    /**
     * Permet de gérer la connexion et déconnexion de l'utilisateur
     */
    Main.prototype.buttonConnexion = function () {
        if (this.user == null) {
            this.showConnexion(); //donc on affiche la connexion
        } else {
            if (confirm("Etes vous sur de vouloir vous déconnecter ?")) {
                this.user = null; //on repasse user à null pour dire que plus personne est connecter
                document.getElementById("connexion").innerHTML = "Connexion"; //on récrit connexion à la palce du nom de la personne
                document.getElementById("panier").style.visibility = "visible"; //on raffiche le bouton du panier
                this.showCatalogue();
            }
        }
    };
    /**
     * Méthode qui permet de gérer le boutton accueil du site selon si un utilisateur est connecter
     */
    Main.prototype.showAccueil = function () {
        if (this.user == null) {
            this.showCatalogue(); //on montre le catalogue de base
        } else {
            this.showAdminPage(1); //sinon on affiche la page de gestion de produit pour l'admin
        }
    };
    Main.prototype.actualisePanierNumber = function () {
        document.getElementById(Main.ID_PANIER_NUMBER_DIV).innerText = this.panier.produitList.size + '';
    };
    /**
     * constante qui permet de récupérer l'emplacement des images de produit du site
     * @type {string}
     */
    Main.SRC_FICHIER = "../res/imageProduit/";
    /**
     * constante qui permet de récupérer le nom de la div principal pour placer le contenu du site
     * @type {string}
     */
    Main.ID_MAIN_DIV = "main";
    /**
     * constante qui permet de récupérer le nom de la div qui contient le nombre d'élement au panier
     * @type {string}
     */
    Main.ID_PANIER_NUMBER_DIV = "numberProduitPanier";
    /**
     * constante qui permet de récupérer le prix de livraison du site
     * @type {number}
     */
    Main.COUT_LIVRAISON = 5;
    return Main;
}();
exports.Main = Main;

/***/ })
/******/ ]);