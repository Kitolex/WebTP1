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
    function ConfirmPageView(reussite) {
        this.reussite = reussite;
    }
    /**
     * Fonction appellé par main qui permet d'afficher la confirmation d'achat
     */
    ConfirmPageView.prototype.init = function () {
        //-----------------Génération HTML---------------
        // variable pour afficher  la confirmation d'achat
        var affichageConfirmationFinal = "";
        if (this.reussite) {
            document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = '<p>reussite ' + this.getIdTransaction() + '</p>';
        }
        else {
            document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = '<p>pas réussite</p>';
        }
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
    return ConfirmPageView;
}());
exports.ConfirmPageView = ConfirmPageView;
