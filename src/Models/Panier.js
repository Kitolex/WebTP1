"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Panier = /** @class */ (function () {
    function Panier() {
        this._produitList = new Map();
    }
    Panier.prototype.addProduits = function (produit, nombre) {
        if (this._produitList.has(produit)) {
            this._produitList.set(produit, this._produitList.get(produit) + nombre);
        }
        else {
            this._produitList.set(produit, 1);
        }
        console.log(this.produitList);
    };
    Panier.prototype.addProduit = function (produit) {
        this.addProduits(produit, 1);
    };
    Panier.prototype.deleteProduits = function (produit, nombre) {
        if (this._produitList.has(produit)) {
            if (this._produitList.get(produit) <= nombre) {
                this._produitList.delete(produit);
            }
            else {
                this._produitList.set(produit, this._produitList.get(produit) - nombre);
            }
        }
        else {
            throw new Error("Article inexistant dans le panier");
        }
    };
    Panier.prototype.deleteProduit = function (produit) {
        this.deleteProduits(produit, this._produitList.get(produit));
    };
    Object.defineProperty(Panier.prototype, "produitList", {
        get: function () {
            return this._produitList;
        },
        enumerable: true,
        configurable: true
    });
    Panier.prototype.supprimerPanier = function () {
        this._produitList.clear();
    };
    Panier.prototype.getPrixTotalHT = function () {
        var prix = 0;
        this.produitList.forEach(function (value, key, map) {
            prix += value * key.prix;
        });
        return prix;
    };
    Panier.prototype.getPrixTotalTTC = function () {
        var prix = 0;
        this.produitList.forEach(function (value, key, map) {
            prix += value * (key.prix * (1 + key.taxe / 100));
        });
        return prix;
    };
    Panier.prototype.clear = function () {
        this.produitList.clear();
    };
    Panier.prototype.setNumberProduit = function (produit, number) {
        this.produitList.set(produit, number);
    };
    return Panier;
}());
exports.Panier = Panier;
