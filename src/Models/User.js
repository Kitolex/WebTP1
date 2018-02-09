"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, mdp) {
        this.id = id;
        this.mdp = mdp;
    }
    User.prototype.connexion = function (listUser) {
        for (var _i = 0, listUser_1 = listUser; _i < listUser_1.length; _i++) {
            var user = listUser_1[_i];
            if (this.id == user.id && this.id == user.id) {
                return true;
            }
        }
        return false;
    };
    return User;
}());
exports.User = User;
