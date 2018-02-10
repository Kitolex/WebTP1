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
var ConnexionController = /** @class */ (function (_super) {
    __extends(ConnexionController, _super);
    function ConnexionController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnexionController.prototype.connexion = function (id, mdp) {
        var user = new User_1.User(id, mdp);
        if (user.connexion(_super.prototype.getMain.call(this).listUser)) {
            this.getMain().user = user;
            document.getElementById("connexion").innerHTML = id;
            document.getElementById("panier").style.visibility = "hidden";
            this.getMain().showAdminPage();
        }
        else {
            alert("pas bon");
        }
    };
    return ConnexionController;
}(Controller_1.Controller));
exports.ConnexionController = ConnexionController;
