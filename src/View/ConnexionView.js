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
            '<div class="container">' +
                '<div class="row"  style="background-color:lavender;">' +
                '<div class="well" class="float-center">' +
                '<form>' +
                '<div class="form-group">' +
                '<h7>Nom d\'utilisateur :</h7>' +
                '<input id ="idUser" type="text" placeholder="Identifiant" class="form-control">' +
                '</div>' +
                '<div class="form-group">' +
                '<h7>Mot de passe :</h7>' +
                '<input id="mdpUser" type="password" placeholder="Mot de passe" class="form-control">' +
                '</div>' +
                '</form>' +
                '<button id="connexionUser" type="button" class="btn btn-primary btn-sm" >Connexion</button>' +
                '</div>' +
                '</div>' +
                '</div>';
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
