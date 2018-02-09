"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DescriptionProduitController = /** @class */ (function () {
    function DescriptionProduitController() {
    }
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
}());
exports.DescriptionProduitController = DescriptionProduitController;
