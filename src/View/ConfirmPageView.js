"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
/**
 * Class qui permet de gérer la vue de la confirmation d'achat du panier
 */
var ConfirmPageView = /** @class */ (function () {
    /**
     * Constructeur de la classe
     * @param {boolean} reussite
     *  booléan pour savoir si la transaction est réussite ou non
     */
    function ConfirmPageView(reussite, panier) {
        this.reussite = reussite;
        this.panier = panier;
    }
    /**
     * Fonction appellé par main qui permet d'afficher la confirmation d'achat
     */
    ConfirmPageView.prototype.init = function () {
        //-----------------Génération HTML---------------
        // variable pour afficher  la confirmation d'achat
        var affichageConfirmationFinal = "";
        if (this.reussite) {
            affichageConfirmationFinal +=
                '<div class="container">' +
                    '<div class="row"  style="background-color:lavender;">' +
                    '<div class="well" class="float-left">' +
                    '<div class="col-xs-2">' +
                    '<h6 class="Transaction"> ID Transaction : <br> <span id="ID-Trans">' + this.getIdTransaction() + '</span></h6>' +
                    '<p class="Date1"> Date et heure de la transaction : <br> <span id="ID-Trans">' + this.getDate() + '</span></p>' +
                    '</div>' +
                    '<table class="tabl-centre">' +
                    '<tr>' +
                    '<th>Nom produit</th>' +
                    '<th>Nombre</th>' +
                    '<th>Prix total du produit</th>' +
                    '</tr>';
            this.panier.produitList.forEach(function (value, key, map) {
                affichageConfirmationFinal +=
                    '<tr>' +
                        '<td>' + key.nom + '</td>' +
                        '<td>' + value + '</td>' +
                        '<td>' + (key.prix * value) + '</td>' +
                        '</tr>';
            });
            affichageConfirmationFinal +=
                '<table class="taxe-panier-petit tabl-centre">' +
                    '<tr>' +
                    '<th class="th-taxe">Hors taxe</th>' +
                    '<td class="td-taxe-vide">:</td>' +
                    '<td class="td-taxe" id="prixTotalHT">' + this.panier.getPrixTotalHT() + '</td>' + //affichage du prix Hors Taxe
                    '</tr>' +
                    '<tr>' +
                    '<th class="th-taxe">Taxe</th>' +
                    '<td class="td-taxe-vide">:</td>' +
                    '<td class="td-taxe" id="ajoutTaxe">' + (this.panier.getPrixTotalTTC() - this.panier.getPrixTotalHT()) + '</td>' + //affichage des Taxes
                    '</tr>' +
                    '<tr>' +
                    '<th class="th-taxe">Livraison</th>' +
                    '<td class="td-taxe-vide">:</td>' +
                    '<td class="td-taxe" id="livraison">' + index_1.Main.COUT_LIVRAISON + '</td>' + //affichage du cout de livraison
                    '</tr>' +
                    '<tr>' +
                    '<th class="th-taxe">Prix final</th>' +
                    '<td class="td-taxe-vide">:</td>' +
                    '<td class="td-taxe" id="prixTotalTTC">' + (this.panier.getPrixTotalTTC() + index_1.Main.COUT_LIVRAISON) + '</td>' + //affichage du côut total
                    '</tr>' +
                    '</table>';
        }
        else {
            affichageConfirmationFinal =
                '<div class="container">' +
                    '<div class="row"  style="background-color:lavender;">' +
                    '<div class="well" class="float-left">' +
                    '<div class="col-xs-2">' +
                    '<p> Le payement a été refusé pour cause de <span class="raison-pas-payement">pane technique suite au renfersement de café de la part du stagiaire</span></p>' +
                    '<p>Vous pouvez retourner à la poutique</p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
        }
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageConfirmationFinal;
    };
    ConfirmPageView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    /**
     * Permet de générer un id de transaction de format : LETTRE*5+CHIFFRE*10
     * @returns {string}
     */
    ConfirmPageView.prototype.getIdTransaction = function () {
        var res = "";
        for (var i = 0; i < 5; i++) {
            res += String.fromCharCode(65 + this.getRandomNumber(26)); // on effectue un random avec 26 en max pour les lettres de l'alphabet
        }
        for (var i = 0; i < 10; i++) {
            res += this.getRandomNumber(9); // on effectue un random avec 9 au max
        }
        return res;
    };
    /**
     * Permet de générer un nombre aléatoire
     * @param {number} max
     *  Max à générer
     * @returns {number}
     *  nombre générer
     */
    ConfirmPageView.prototype.getRandomNumber = function (max) {
        return Math.floor(Math.random() * max);
    };
    ConfirmPageView.prototype.getDate = function () {
        var date = new Date();
        return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
    return ConfirmPageView;
}());
exports.ConfirmPageView = ConfirmPageView;
