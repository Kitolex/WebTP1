"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produit_1 = require("./Produit");
var Catalogue = /** @class */ (function () {
    function Catalogue(produitList) {
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
    Catalogue.init = function (srcFichier) {
        var produit1 = new Produit_1.Produit("KratosArme", "La grande et majestueuse arme de Kratos", 5, srcFichier + "kratos.jpg");
        var produit2 = new Produit_1.Produit("KratosArme22222", "22222La grande et majestueuse arme de Kratos", 5, srcFichier + "kratos.jpg");
        var produit3 = new Produit_1.Produit("KratosArme3333", "333333La grande et majestueuse arme de Kratos", 5, srcFichier + "kratos.jpg");
        var catalogue = new Catalogue();
        catalogue.addProduit(produit1);
        catalogue.addProduit(produit2);
        catalogue.addProduit(produit3);
        return catalogue;
    };
    return Catalogue;
}());
exports.Catalogue = Catalogue;
