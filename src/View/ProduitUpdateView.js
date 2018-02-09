"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var ProduitUpdtateView = /** @class */ (function () {
    function ProduitUpdtateView(produit) {
        this.produit = produit;
    }
    ProduitUpdtateView.prototype.setController = function (controller, main) {
        this.controller = controller;
        this.controller.setMain(main);
    };
    ProduitUpdtateView.prototype.init = function () {
        var _this = this;
        var affichageProduitsFinal = '<div class="container">' +
            '<div class="row"  style="background-color:lavender;">' +
            '<div class="col-xs-9" >' +
            '<img src="' + this.produit.srcImage + '" class="img-responsive">' +
            '</div>' +
            '<div class="col">' +
            '<div class="well" class="float-right">' +
            '<div class="text">' +
            '<input id="titre" value="' + this.produit.nom + '"><br>' +
            '<textarea id="description" rows="4" cols="50">' + this.produit.description + '</textarea><br>' +
            '<input id="prix" value="' + this.produit.prix + '"><br>' +
            '<button id="modifier" type="button" class="btn btn-primary btn-sm">Modifer</button>' +
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
        document.getElementById("modifier").addEventListener("click", function (e) { return _this.controller.updateProduit(document.getElementById("titre").value, document.getElementById("description").value, document.getElementById("prix").value, _this.produit); });
        document.getElementById("retourCatalogue").addEventListener("click", function (e) { return _this.controller.retourAccueil(); });
    };
    return ProduitUpdtateView;
}());
exports.ProduitUpdtateView = ProduitUpdtateView;
