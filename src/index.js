"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Catalogue_1 = require("./Models/Catalogue");
var CatalogueView_1 = require("./View/CatalogueView");
var Panier_1 = require("./Models/Panier");
var CatalogueController_1 = require("./Controllers/CatalogueController");
var DescriptionProduitView_1 = require("./View/DescriptionProduitView");
var DescriptionProduitController_1 = require("./Controllers/DescriptionProduitController");
var PanierView_1 = require("./View/PanierView");
var PanierController_1 = require("./Controllers/PanierController");
var ConnexionView_1 = require("./View/ConnexionView");
var ConnexionController_1 = require("./Controllers/ConnexionController");
var User_1 = require("./Models/User");
var AdminPageController_1 = require("./Controllers/AdminPageController");
var AdminPageView_1 = require("./View/AdminPageView");
var ProduitUpdateView_1 = require("./View/ProduitUpdateView");
var ProduitUpdateController_1 = require("./Controllers/ProduitUpdateController");
var ConfirmPageView_1 = require("./View/ConfirmPageView");
var ConfirmPageController_1 = require("./Controllers/ConfirmPageController");
var CreateProduitView_1 = require("./View/CreateProduitView");
var CreateProduitController_1 = require("./Controllers/CreateProduitController");
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
var Main = /** @class */ (function () {
    function Main() {
    }
    /**
     * Méthode qui permet d'initialiser les variable de la class ainsi que les événements de la barre de navigation
     */
    Main.prototype.init = function () {
        var _this = this;
        this.catalogue = Catalogue_1.Catalogue.init(); //on init le catalogue avec des produits pré-créer
        this.panier = new Panier_1.Panier(); // on initialise le catalogue
        this.listUser = new Array(); //on initialise la liste d'utilisateur
        this.listUser.push(new User_1.User("admin", "admin")); //on créer l'utilisateur qui peut se connecter (Dans ce cas il n'y en as qu'un, mais au moins la liste est prête si besoin de modification pour prochaine TP
        document.getElementById("panier").addEventListener("click", function (e) { return _this.showPanier(); }); //on créer l'événement du bouton panier
        document.getElementById("connexion").addEventListener("click", function (e) { return _this.buttonConnexion(); }); //on créer l'évenement du bouton connexion
        document.getElementById("accueil").addEventListener("click", function (e) { return _this.showAccueil(); }); //on créer l'évenement du bouton accueil
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
        }
        else {
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
        return (Math.random() * 2) > 1;
    };
    /**
     * Permet de gérer la connexion et déconnexion de l'utilisateur
     */
    Main.prototype.buttonConnexion = function () {
        if (this.user == null) {
            this.showConnexion(); //donc on affiche la connexion
        }
        else {
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
        }
        else {
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
}());
exports.Main = Main;
