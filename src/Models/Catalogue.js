"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produit_1 = require("./Produit");
var index_1 = require("../index");
/**
 * Cette classe est le modèle d'un catalogue
 */
var Catalogue = /** @class */ (function () {
    /**
     * Constructeur de la classe Catalogue
     */
    function Catalogue() {
        /**
         * nombre de caractère maximun pour la description de l'objet en mode aperçu
         */
        this.MAX_CHAR_DESCRIPTION = 40;
        this._produitList = new Array(); //on instancie la liste
    }
    /**
     * Cette méthode permet d'ajouter un produit au catalogue
     * @param {Produit} produit
     *  produit à ajouter
     */
    Catalogue.prototype.addProduit = function (produit) {
        this._produitList.push(produit); //on ajoute le produit
    };
    Object.defineProperty(Catalogue.prototype, "produitList", {
        /**
         * Getter de la liste de produit du catalogue
         * @returns {Array<Produit>}
         *  liste de produit du catalogue
         */
        get: function () {
            return this._produitList;
        },
        /**
         * Setter de la liste de produit du catalogue
         * @param {Array<Produit>} value
         */
        set: function (value) {
            this._produitList = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Cette méthode permet de récupérer un produit à un indice précis
     * @param {number} indice
     *  indice du produit à récupérer dans la liste
     * @returns {Produit}
     *  porduit récupérer
     */
    Catalogue.prototype.getProduit = function (indice) {
        return this._produitList[indice];
    };
    /**
     * Cette méthode static permet de générer un catalogue de test
     * @returns {Catalogue}
     *  un catalogue
     */
    Catalogue.init = function () {
        var catalogue = new Catalogue();
        for (var i = 0; i < 45; i++) {
            var produit = new Produit_1.Produit("KratosArme" + i, "Ceci est une superbe description d'arme tres détaillée qui décrit toute l'arme de fond en comble. Donc ceci est l'arme de kratos qui a servis a tué les dieux Grec, Nordique, Egyptien, Maya, Européen, etc." + i, 10, index_1.Main.SRC_FICHIER + "kratos.jpg", 30);
            catalogue.addProduit(produit);
        }
        return catalogue;
    };
    /**
     * Cette méthode permet de supprimer un produit du catalogue
     * @param {Produit} produit
     */
    Catalogue.prototype.deleteProduit = function (produit) {
        this.produitList = this.produitList.filter(function (item) { return item.nom != produit.nom; }); //on supprime le produit
    };
    return Catalogue;
}());
exports.Catalogue = Catalogue;
