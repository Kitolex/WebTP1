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
var index_1 = require("../index");
var Controller_1 = require("./Controller");
var PanierController = /** @class */ (function (_super) {
    __extends(PanierController, _super);
    function PanierController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanierController.prototype.changeNumberProduit = function (produit, number) {
        this.getMain().panier.setNumberProduit(produit, number);
    };
    PanierController.prototype.acheter = function () {
        this.getMain().panier.clear();
        document.getElementById(index_1.Main.ID_PANIER_NUMBER_DIV).innerText = this.getMain().panier.produitList.size + '';
        this.getMain().showConfirmPage();
    };
    return PanierController;
}(Controller_1.Controller));
exports.PanierController = PanierController;
