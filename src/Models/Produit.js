"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Cette classe est le modèle d'un produit
 */
var Produit = /** @class */ (function () {
    /**
     *  Constructeur de la classe Produit
     * @param {string} nom
     *  nom d'un produit
     * @param {string} description
     *  description d'un produit
     * @param {number} prix
     *  prix d'un produit
     * @param {string} srcImage
     *  srcImage d'un produit
     * @param {number} taxe
     *  taxe d'un produit
     */
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
