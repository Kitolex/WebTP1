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
var CatalogueController = /** @class */ (function (_super) {
    __extends(CatalogueController, _super);
    function CatalogueController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CatalogueController.prototype.buttonAddPanier = function (produit) {
        this.getMain().panier.addProduit(produit);
        document.getElementById(index_1.Main.ID_PANIER_NUMBER_DIV).innerText = this.getMain().panier.produitList.size + '';
    };
    CatalogueController.prototype.buttonDescriptionDetaille = function (produit) {
        this.getMain().showDescription(produit);
    };
    return CatalogueController;
}(Controller_1.Controller));
exports.CatalogueController = CatalogueController;
