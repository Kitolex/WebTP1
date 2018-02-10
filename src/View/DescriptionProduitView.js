"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
/**
 * Class qui permet de gérer la vue de la description du produit
 */
var DescriptionProduitView = /** @class */ (function () {
    /**
     * Constructeur de la classe
     * @param {Produit} produit
     *  produit à afficher la description
     */
    function DescriptionProduitView(produit) {
        this.produit = produit;
    }
    /**
     * Fonction appellé par main qui permet d'afficher la description du produit
     */
    DescriptionProduitView.prototype.init = function () {
        //-----------------Génération HTML---------------
        var _this = this;
        // //variable pour afficher la description du produit
        var affichageDescriptionProduitFinal = '<div class="container">' +
            '<div class="row"  style="background-color:lavender;">' +
            '<div class="col-xs-9" >' +
            '<img src="' + this.produit.srcImage + '" class="img-responsive">' +
            '</div>' +
            '<div class="col">' +
            '<div class="well" class="float-right">' +
            '<div class="text">' +
            '<h5>' + this.produit.nom + '</h5>' +
            '<h6 class="descri arme">' + this.produit.description + '</h6>' +
            '<h5>' + this.produit.prix + ' $</h5>' +
            '<button id="panier' + this.produit.nom + '" type="button" class="btn btn-primary btn-sm">Ajouter au Panier</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="text-center">' +
            '<div class="btn-group">' +
            '<button id="retourCatalogue" type="button" class="btn btn-dark">Retour au catalogue</button>' +
            '<div>' +
            '</div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageDescriptionProduitFinal; // on applique html à la main div
        //-------------événement--------//
        //événement pour rajouter le produit au panier en appellant la fonction addPanier du controller
        document.getElementById("panier" + this.produit.nom).addEventListener("click", function (e) { return _this.controller.addPanier(_this.produit); });
        //événement du bouton pour revenir au catalogue en lançant la fonction retourAccueil du controller
        document.getElementById("retourCatalogue").addEventListener("click", function (e) { return _this.controller.retourAccueil(); });
    };
    DescriptionProduitView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return DescriptionProduitView;
}());
exports.DescriptionProduitView = DescriptionProduitView;
