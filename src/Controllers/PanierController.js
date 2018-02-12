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
var Controller_1 = require("./Controller");
/**
 * Cette classe est le controlleur de la vue PanierView
 */
var PanierController = /** @class */ (function (_super) {
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
    /**
     * Cette méthode permet d'ajouter un produit (1 fois)
     * @param {Produit} key
     */
    PanierController.prototype.addProduit = function (key) {
        this.getMain().panier.addProduit(key); //on incrémente le nombre dans le panier
        this.getMain().actualisePanierNumber();
    };
    /**
     * Cette méthode permet de supprimer toutes les occurences d'un produit
     * @param {Produit} key
     */
    PanierController.prototype.deleteProduits = function (key) {
        this.getMain().panier.deleteProduits(key, 1); //on décrémente le nombre dans le panier
    };
    /**
     *  Cette méthode permet de supprimer un produit(1 fois)
     * @param {Produit} key
     */
    PanierController.prototype.deleteProduit = function (key) {
        this.getMain().panier.deleteProduit(key); //on supprimer le produit du panier
        this.getMain().actualisePanierNumber();
    };
    /**
     * Cette méthode permet de revenir à l'accueil
     */
    PanierController.prototype.retouraccueil = function () {
        alert("Le panier est vide.\nRetour au catalogue.");
        this.getMain().showCatalogue();
    };
    return PanierController;
}(Controller_1.Controller));
exports.PanierController = PanierController;
