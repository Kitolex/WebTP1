"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var ConfirmPageView = /** @class */ (function () {
    function ConfirmPageView(reussite) {
        this.reussite = reussite;
    }
    ConfirmPageView.prototype.init = function () {
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
    ConfirmPageView.prototype.getIdTransaction = function () {
        var res = "";
        for (var i = 0; i < 5; i++) {
            res += String.fromCharCode(65 + this.getRandomNumber(26)) + "/";
        }
        for (var i = 0; i < 10; i++) {
            res += this.getRandomNumber(9) + "/";
        }
        return res;
    };
    ConfirmPageView.prototype.getRandomNumber = function (max) {
        return Math.floor(Math.random() * max);
    };
    return ConfirmPageView;
}());
exports.ConfirmPageView = ConfirmPageView;
