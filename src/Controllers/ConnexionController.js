"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../Models/User");
var ConnexionController = /** @class */ (function () {
    function ConnexionController() {
    }
    ConnexionController.prototype.setMain = function (main) {
        this.main = main;
    };
    ConnexionController.prototype.connexion = function (id, mdp) {
        var user = new User_1.User(id, mdp);
        if (user.connexion(this.main.listUser)) {
            this.main.user = user;
            document.getElementById("connexion").innerHTML = id;
            this.main.showAdminPage();
        }
        else {
            alert("pas bon");
        }
    };
    return ConnexionController;
}());
exports.ConnexionController = ConnexionController;
