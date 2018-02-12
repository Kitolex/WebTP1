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
/**
 * Cette classe est le controlleur de la vue DescriptionProduit
 */
var DescriptionProduitController = /** @class */ (function (_super) {
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
}(Controller_1.Controller));
exports.DescriptionProduitController = DescriptionProduitController;
