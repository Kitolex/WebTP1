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
/**
 * Cette classe est le controlleur de la vue AdminPageView
 */
var AdminPageController = /** @class */ (function (_super) {
    __extends(AdminPageController, _super);
    function AdminPageController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Cette méthode permet de supprimer un produit du catalogue sans changer de page
     * @param {Produit} produit
     *  produit à supprimer
     * @param {number} page
     *  numéro de page actuel
     */
    AdminPageController.prototype.supprimerProduit = function (produit, page) {
        if (confirm("Etes vous sur de vouloir le supprimer")) {
            this.getMain().catalogue.deleteProduit(produit); //on supprime le produit du catalogue
            this.getMain().showAdminPage(page); //on actualise la vue (en concervant la page)
        }
    };
    /**
     * Cette méthode permet de lancer la vue pour modifier un produit
     * @param {Produit} produit
     *  produit à modifier
     */
    AdminPageController.prototype.modifierProduit = function (produit) {
        this.getMain().showProduitUpdate(produit); //lance la vue produitUpdate
    };
    /**
     * Cette méthode permet de lancer la vue pour créer un nouveaux produit
     */
    AdminPageController.prototype.createProduit = function () {
        this.getMain().showCreateProduit(); //lance la vue createProduit
    };
    return AdminPageController;
}(Controller_1.Controller));
exports.AdminPageController = AdminPageController;
