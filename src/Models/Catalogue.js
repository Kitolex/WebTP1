"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produit_1 = require("./Produit");
var index_1 = require("../index");
var Catalogue = /** @class */ (function () {
    function Catalogue(produitList) {
        this.MAX_CHAR_DESCRIPTION = 30;
        if (produitList) {
            this._produitList = produitList;
        }
        else {
            this._produitList = new Array();
        }
    }
    Catalogue.prototype.addProduit = function (produit) {
        this._produitList.push(produit);
    };
    Object.defineProperty(Catalogue.prototype, "produitList", {
        get: function () {
            return this._produitList;
        },
        set: function (value) {
            this._produitList = value;
        },
        enumerable: true,
        configurable: true
    });
    Catalogue.prototype.getProduit = function (indice) {
        return this._produitList[indice];
    };
    Catalogue.init = function () {
        var catalogue = new Catalogue();
        for (var i = 0; i < 45; i++) {
            var produit = new Produit_1.Produit("KratosArme" + i, "Ceci est une superbe description d'arme tres détaillée qui décrit toute l'arme de fond en comble. Donc ceci est l'arme de kratos qui a servis a tué les dieux Grec, Nordique, Egyptien, Maya, Européen, etc." + i, 10, index_1.Main.SRC_FICHIER + "kratos.jpg", 30);
            catalogue.addProduit(produit);
        }
        return catalogue;
    };
    Catalogue.prototype.deleteProduit = function (produit) {
        this.produitList = this.produitList.filter(function (item) { return item.nom != produit.nom; });
    };
    return Catalogue;
}());
exports.Catalogue = Catalogue;
