"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var DescriptionProduitView = /** @class */ (function () {
    function DescriptionProduitView(produit) {
        this.produit = produit;
    }
    DescriptionProduitView.prototype.init = function () {
        var _this = this;
        var affichageProduitsFinal = '<div class="container">' +
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
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageProduitsFinal;
        document.getElementById("panier" + this.produit.nom).addEventListener("click", function (e) { return _this.controller.addPanier(_this.produit); });
        document.getElementById("retourCatalogue").addEventListener("click", function (e) { return _this.controller.retourAccueil(); });
    };
    DescriptionProduitView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return DescriptionProduitView;
}());
exports.DescriptionProduitView = DescriptionProduitView;
