"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var PanierView = /** @class */ (function () {
    function PanierView(panier) {
        this.panier = panier;
    }
    PanierView.prototype.init = function () {
        var _this = this;
        var affichageProduitsFinal = "";
        this.panier.produitList.forEach(function (value, key, map) {
            affichageProduitsFinal += '<img src="' + key.srcImage + '"> ' +
                '<p id="nom' + key.nom + '" >' + key.nom + '</p> ' +
                '<p>' + key.description.slice(0, 30) + '...</p>' +
                '<button id="enlever' + key.nom + '">-</button><br>' +
                '<input id="nombre' + key.nom + '" value="' + value + '"><br>' +
                '<button id="ajouter' + key.nom + '">+</button><br>';
        });
        affichageProduitsFinal += '<p>' + this.panier.getPrixTotalHT() + '</p>';
        affichageProduitsFinal += '<p>' + (this.panier.getPrixTotalTTC() - this.panier.getPrixTotalHT()) + '</p>';
        affichageProduitsFinal += '<p>cout de livraison</p>';
        affichageProduitsFinal += '<p>' + this.panier.getPrixTotalTTC() + '</p>';
        affichageProduitsFinal += '<button id="acheter">Acheter</button>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageProduitsFinal;
        this.panier.produitList.forEach(function (value, key, map) {
            document.getElementById("nombre" + key.nom).addEventListener("input", function (e) { return _this.controller.changeNumberProduit(key, Number.parseInt(document.getElementById("nombre" + key.nom).value)); });
            document.getElementById("enlever" + key.nom).addEventListener("click", function (e) { return _this.removeNumberProduit(key); });
            document.getElementById("ajouter" + key.nom).addEventListener("click", function (e) { return _this.addNumberProduit(key); });
        });
        document.getElementById("acheter").addEventListener("click", function (e) { return _this.controller.acheter(); });
    };
    PanierView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    PanierView.prototype.addNumberProduit = function (key) {
        var input = document.getElementById("nombre" + key.nom);
        if (Number.parseInt(input.value) < 999) {
            input.value = (Number.parseInt(input.value) + 1) + "";
            this.panier.addProduit(key);
        }
        else {
            alert("Vous en avez peut être déja assez non ?");
        }
    };
    PanierView.prototype.removeNumberProduit = function (key) {
        var input = document.getElementById("nombre" + key.nom);
        if (Number.parseInt(input.value) > 1) {
            input.value = (Number.parseInt(input.value) - 1) + "";
            this.panier.deleteProduits(key, 1);
        }
        else {
            if (confirm("Cet action entrainera la supression de ce produit de votre panier.\nEn êtes vous sûr?")) {
                this.panier.deleteProduit(key);
                this.init();
            }
            else {
            }
        }
    };
    return PanierView;
}());
exports.PanierView = PanierView;
