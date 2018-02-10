"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
/**
 * Class qui permet de gérer la vue pour la connexion
 */
var ConnexionView = /** @class */ (function () {
    function ConnexionView() {
    }
    /**
     * Fonction appellé par main qui permet d'afficher le formulaire de connexion
     */
    ConnexionView.prototype.init = function () {
        //-----------------Génération HTML---------------
        var _this = this;
        // variable pour afficher  le formulaire de connexion
        var affichageFormulaireConnexionFinal = "";
        affichageFormulaireConnexionFinal +=
            '<input id ="idUser" type="text" placeholder="Identifiant"><br>' +
                '<input id="mdpUser" type="password" placeholder="Mot de passe"><br>' +
                '<button id="connexionUser" type="button" class="btn btn-dark" >Connexion</button>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageFormulaireConnexionFinal; // on applique html à la main div
        //-------------événement--------//
        //évenement du boutton de Connexion qui lance la fonction la connexion du controller
        document.getElementById("connexionUser").addEventListener("click", function (e) { return _this.controller.connexion(document.getElementById("idUser").value //identifiant
        , document.getElementById("mdpUser").value // mot de passe
        ); });
    };
    ConnexionView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return ConnexionView;
}());
exports.ConnexionView = ConnexionView;
