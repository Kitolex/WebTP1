"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Cette classe étend tous les controlleurs et contient les méthodes et variables qu'ont besoin les controlleurs
 */
var Controller = /** @class */ (function () {
    function Controller() {
    }
    /**
     * Setter de l'attribut main
     * @param {Main} main
     */
    Controller.prototype.setMain = function (main) {
        this.main = main;
    };
    /**
     * Getter de l'attribut main
     * @returns {Main}
     */
    Controller.prototype.getMain = function () {
        return this.main;
    };
    return Controller;
}());
exports.Controller = Controller;
