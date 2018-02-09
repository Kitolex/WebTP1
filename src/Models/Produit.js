"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produit = /** @class */ (function () {
    function Produit(nom, description, prix, srcImage, taxe) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.srcImage = srcImage;
        this.taxe = taxe;
    }
    return Produit;
}());
exports.Produit = Produit;
