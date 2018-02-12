"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Cette classe est le modèle d'un utilisateur
 */
var User = /** @class */ (function () {
    /**
     * Constructeur de la classe
     * @param {string} id
     *  identifiant de l'utilisateur
     * @param {string} mdp
     *  mot de passe de l'utilisateur
     */
    function User(id, mdp) {
        this.id = id;
        this.mdp = mdp;
    }
    /**
     * Cette méthode permet de savoir si un utilisateur peut se connecter
     * @param {Array<User>} listUser
     *  liste des utilisateurs qui peuvent se connecter
     * @returns {boolean}
     *  retour vrai si il peut se connecter sinon faux
     */
    User.prototype.connexion = function (listUser) {
        for (var _i = 0, listUser_1 = listUser; _i < listUser_1.length; _i++) {
            var user = listUser_1[_i];
            if (this.id == user.id && this.id == user.id) {
                return true; //on renvoie vrai si oui
            }
        }
        return false; //sion on renvoie faux si aucun utilisateur de la liste ne correspond
    };
    return User;
}());
exports.User = User;
