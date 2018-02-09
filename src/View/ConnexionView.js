"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var ConnexionView = /** @class */ (function () {
    function ConnexionView() {
    }
    ConnexionView.prototype.init = function () {
        var _this = this;
        var affichageFinalCatalogue = "";
        affichageFinalCatalogue +=
            '<input id ="idUser" type="text" placeholder="Identifiant"><br>' +
                '<input id="mdpUser" type="password" placeholder="Mot de passe"><br>' +
                '<button id="connexionUser" type="button" class="btn btn-dark" >Connexion</button>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageFinalCatalogue;
        document.getElementById("connexionUser").addEventListener("click", function (e) { return _this.controller.connexion(document.getElementById("idUser").value, document.getElementById("mdpUser").value); });
    };
    ConnexionView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return ConnexionView;
}());
exports.ConnexionView = ConnexionView;
