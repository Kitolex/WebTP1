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
var AdminPageController = /** @class */ (function (_super) {
    __extends(AdminPageController, _super);
    function AdminPageController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminPageController.prototype.supprimerProduit = function (produit, page) {
        if (confirm("Etes vous sur de vouloir le supprimer")) {
            this.getMain().catalogue.deleteProduit(produit);
            this.getMain().showAdminPage(page);
        }
    };
    AdminPageController.prototype.modifierProduit = function (produit) {
        this.getMain().showProduitUpdate(produit);
    };
    AdminPageController.prototype.createProduit = function () {
        this.getMain().showCreateProduit();
    };
    return AdminPageController;
}(Controller_1.Controller));
exports.AdminPageController = AdminPageController;
