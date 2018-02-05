"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CatalogueController = /** @class */ (function () {
    function CatalogueController() {
    }
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
}());
exports.CatalogueController = CatalogueController;
