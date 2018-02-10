"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var Controller_1 = require("./Controller");
var DescriptionProduitController = /** @class */ (function (_super) {
    __extends(DescriptionProduitController, _super);
    function DescriptionProduitController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionProduitController.prototype.addPanier = function (produit) {
        this.getMain().panier.addProduit(produit);
        document.getElementById(index_1.Main.ID_PANIER_NUMBER_DIV).innerText = this.getMain().panier.produitList.size + '';
    };
    DescriptionProduitController.prototype.retourAccueil = function () {
        this.getMain().showCatalogue();
    };
    return DescriptionProduitController;
}(Controller_1.Controller));
exports.DescriptionProduitController = DescriptionProduitController;
