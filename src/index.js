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
window.onload = function () {
    console.log("ONLOAD");
    var main = new Main();
    main.init();
};
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.init = function () {
        var _this = this;
        this.catalogue = Catalogue_1.Catalogue.init();
        this.panier = new Panier_1.Panier();
        this.listUser = new Array();
        this.listUser.push(new User_1.User("admin", "admin"));
        document.getElementById("panier").addEventListener("click", function (e) { return _this.showPanier(); });
        document.getElementById("connexion").addEventListener("click", function (e) { return _this.showConnexion(); });
        document.getElementById("accueil").addEventListener("click", function (e) { return _this.showCatalogue(); });
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
        }
        else {
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
        return (Math.random() * 2) > 1;
    };
    Main.SRC_FICHIER = "../res/imageProduit/";
    Main.ID_MAIN_DIV = "main";
    return Main;
}());
exports.Main = Main;
