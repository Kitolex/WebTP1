"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    return Catalogue;
}());
exports.Catalogue = Catalogue;
