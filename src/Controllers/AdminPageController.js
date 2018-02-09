"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdminPageController = /** @class */ (function () {
    function AdminPageController() {
    }
    AdminPageController.prototype.setMain = function (main) {
        this.main = main;
    };
    AdminPageController.prototype.supprimerProduit = function (produit, page) {
        if (confirm("Etes vous sur de vouloir le supprimer")) {
            this.main.catalogue.deleteProduit(produit);
            this.main.showAdminPage(page);
        }
    };
    AdminPageController.prototype.modifierProduit = function (produit) {
        this.main.showProduitUpdate(produit);
    };
    return AdminPageController;
}());
exports.AdminPageController = AdminPageController;
