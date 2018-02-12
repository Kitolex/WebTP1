"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../Models/User");
var Controller_1 = require("./Controller");
/**
 * Cette classe est controlleur de la vue ConnexionView
 */
var ConnexionController = /** @class */ (function (_super) {
    __extends(ConnexionController, _super);
    function ConnexionController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Cette méthode permet de pouvoir se connecter et de vérifier si l'identifiant et mot de passe et correct
     * @param {string} id
     *  identifiant de connexion
     * @param {string} mdp
     *  mot de passe de connexion
     */
    ConnexionController.prototype.connexion = function (id, mdp) {
        var user = new User_1.User(id, mdp); // création de l'utilisateur
        if (user.connexion(_super.prototype.getMain.call(this).listUser)) {
            this.getMain().user = user; //si oui on met l'utilsateur en utilsateur courant
            document.getElementById("connexion").innerHTML = id + '/Déconnexion'; //on modifie le texte du boutton de connexion par "'id'/Déconnexion"
            document.getElementById("panier").style.visibility = "hidden"; //on supprime le bouton panier de l'affichage(car c'est un admin)
            this.getMain().panier.clear();
            this.getMain().actualisePanierNumber();
            this.getMain().showAdminPage();
        }
        else {
            alert("les informations de connexion sont incorrect");
        }
    };
    return ConnexionController;
}(Controller_1.Controller));
exports.ConnexionController = ConnexionController;
