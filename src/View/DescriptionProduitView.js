"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var DescriptionProduitView = /** @class */ (function () {
    function DescriptionProduitView(produit) {
        this.produit = produit;
    }
    DescriptionProduitView.prototype.init = function () {
        var affichageProduitsFinal = '<img src="' + this.produit.srcImage + '"> ' +
            '<p id="nom' + this.produit.nom + '">' + this.produit.nom + '</p> ' +
            '<p>' + this.produit.description + '</p>' +
            '<button id="panier' + this.produit.nom + '">Try it</button><br>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageProduitsFinal;
    };
    DescriptionProduitView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return DescriptionProduitView;
}());
exports.DescriptionProduitView = DescriptionProduitView;
