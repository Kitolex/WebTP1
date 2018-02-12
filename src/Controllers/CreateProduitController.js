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
var Produit_1 = require("../Models/Produit");
var index_1 = require("../index");
/**
 * Cette classe est le controlleur de la vue CreateProduitView
 */
var CreateProduitController = /** @class */ (function (_super) {
    __extends(CreateProduitController, _super);
    function CreateProduitController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Cette méthode permet de créer un nouveau produit dans le catalogue
     * @param {string} titre
     *  titre du nouveau produit
     * @param {string} description
     *  description du nouveau produit
     * @param {string} prix
     *  prix du nouveau produit
     * @param {string} taxe
     *  taxe du nouveau produit
     */
    CreateProduitController.prototype.createProduit = function (titre, description, prix, taxe) {
        var produit = new Produit_1.Produit(titre, description, Number.parseInt(prix), index_1.Main.SRC_FICHIER + "placeholder.jpg", Number.parseInt(taxe)); // on met comme image un placeholder pour le produit
        var ajout = true;
        for (var i = 0; i < this.getMain().catalogue.produitList.length; i++) {
            if (this.getMain().catalogue.getProduit(i).nom == titre) {
                console.log(this.getMain().catalogue.getProduit(i).nom + "/" + titre);
                alert("un produit porte déja ce nom\nVeuillez prendre un autre nom");
                ajout = false;
                break;
            }
        }
        if (ajout) {
            this.getMain().catalogue.addProduit(produit); //on ajoute le produit au catalogue
            this.getMain().showAdminPage(); //on affiche la page de gestion de catalogue(page admin)
        }
    };
    return CreateProduitController;
}(Controller_1.Controller));
exports.CreateProduitController = CreateProduitController;
