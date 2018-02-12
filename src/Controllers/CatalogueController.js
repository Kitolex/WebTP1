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
 * Cette classe est le controlleur de la vue CatalogueView
 */
var CatalogueController = /** @class */ (function (_super) {
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
    /**
     * Méthode qui permet de retourner le bouton ajouter au panier à la vue
     * @param {Produit} produit
     * @returns {string}
     */
    CatalogueController.prototype.setNbPanier = function (produit) {
        return '<button id="panier' + produit.nom + '" type="button" class="btn btn-primary btn-sm">' + this.getMain().panier.produitList.get(produit) + '</button>';
    };
    /**
     * Méthode qui permet de savoir si le produit est déja dans le panier
     * @param {Produit} produit
     * @returns {boolean}
     */
    CatalogueController.prototype.existProduitPanier = function (produit) {
        return this.getMain().panier.produitList.get(produit) != null;
    };
    return CatalogueController;
}(Controller_1.Controller));
exports.CatalogueController = CatalogueController;
