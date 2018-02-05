"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Catalogue_1 = require("./Models/Catalogue");
var CatalogueView_1 = require("./View/CatalogueView");
var Panier_1 = require("./Models/Panier");
var CatalogueController_1 = require("./Controllers/CatalogueController");
var DescriptionProduitView_1 = require("./View/DescriptionProduitView");
var DescriptionProduitController_1 = require("./Controllers/DescriptionProduitController");
window.onload = function () {
    console.log("ONLOAD");
    var main = new Main();
    main.init();
};
var Main = /** @class */ (function () {
    function Main() {
    }
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
}());
exports.Main = Main;
