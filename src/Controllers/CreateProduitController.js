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
var Controller_1 = require("./Controller");
var Produit_1 = require("../Models/Produit");
var index_1 = require("../index");
var CreateProduitController = /** @class */ (function (_super) {
    __extends(CreateProduitController, _super);
    function CreateProduitController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateProduitController.prototype.createProduit = function (titre, description, prix, taxe) {
        console.log(description);
        var produit = new Produit_1.Produit(titre, description, Number.parseInt(prix), index_1.Main.SRC_FICHIER + "placeholder.jpg", Number.parseInt(taxe));
        this.getMain().catalogue.addProduit(produit);
        this.getMain().showAdminPage();
    };
    return CreateProduitController;
}(Controller_1.Controller));
exports.CreateProduitController = CreateProduitController;
