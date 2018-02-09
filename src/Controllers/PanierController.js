"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PanierController = /** @class */ (function () {
    function PanierController() {
    }
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
}());
exports.PanierController = PanierController;
