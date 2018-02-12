"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Cette classe est le modèle d'un panier
 */
var Panier = /** @class */ (function () {
    /**
     * Constructeur de la classe Panier
     */
    function Panier() {
        this._produitList = new Map();
    }
    /**
     * Fonction pour ajouter plusieurs fois le même produit dans le panier
     * @param {Produit} produit
     *  produit à ajouter au panier
     * @param {number} nombre
     *  nombre d'occurence du produit ajouter
     */
    Panier.prototype.addProduits = function (produit, nombre) {
        if (this._produitList.has(produit)) {
            this._produitList.set(produit, this._produitList.get(produit) + nombre); //si oui on additionne juste le nombre d'occurence actuel du produit avec le nouveau nombre
        }
        else {
            this._produitList.set(produit, nombre);
        }
    };
    /**
     * Fonction pour ajouter un seul produit dans le panier
     * @param {Produit} produit
     *  produit à ajouter
     */
    Panier.prototype.addProduit = function (produit) {
        this.addProduits(produit, 1); //on utilise la fonction addProduits() en mettant 1 comme argument pour le nombre
    };
    /**
     * Fonction pour supprimer plusieurs fois le même produit dans le panier
     * @param {Produit} produit
     *  produit à supprimer au panier
     * @param {number} nombre
     *  nombre d'occurence du produit supprimer
     */
    Panier.prototype.deleteProduits = function (produit, nombre) {
        if (this._produitList.has(produit)) {
            if (this._produitList.get(produit) <= nombre) {
                this._produitList.delete(produit); //si oui on peut directement supprimer le produit
            }
            else {
                this._produitList.set(produit, this._produitList.get(produit) - nombre); //sinon on soustrait les 2 valeurs
            }
        }
        else {
            throw new Error("Article inexistant dans le panier");
        }
    };
    /**
     * Fonction pour supprimer toute les occurences d'un produit dans le panier
     * @param {Produit} produit
     *  produit à supprimer
     */
    Panier.prototype.deleteProduit = function (produit) {
        this.deleteProduits(produit, this._produitList.get(produit)); //on utilise la méthode deleteProduit() en mettant en argument le nombre d'occurence du produit pour le nombre
    };
    Object.defineProperty(Panier.prototype, "produitList", {
        /**
         * Getter de la liste du panier
         * @returns {Map<Produit, number>}
         *  map du panier
         */
        get: function () {
            return this._produitList;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Méthode qui permet de récupérer le prix Hors-Taxe du panier
     * @returns {number}
     *  prix hors-taxe du panier
     */
    Panier.prototype.getPrixTotalHT = function () {
        var prix = 0;
        this.produitList.forEach(function (value, key, map) {
            prix += value * key.prix;
        });
        return prix; //on retourne le total
    };
    /**
     * Méthode qui permet de récupérer le prix Toute-Taxe-Comprise du panier
     * @returns {number}
     */
    Panier.prototype.getPrixTotalTTC = function () {
        var prix = 0;
        this.produitList.forEach(function (value, key, map) {
            prix += value * (key.prix * (1 + key.taxe / 100));
        });
        return prix;
    };
    /**
     * Cette méthode permet de vider le panier
     */
    Panier.prototype.clear = function () {
        this.produitList.clear(); //on vide le panier
    };
    /**
     *  Cette méthode permet de mettre un nombre bien préçis d'occurence pour un produit
     * @param {Produit} produit
     * @param {number} number
     */
    Panier.prototype.setNumberProduit = function (produit, number) {
        if (this.produitList.has(produit)) {
            this.produitList.set(produit, number);
        }
    };
    return Panier;
}());
exports.Panier = Panier;
