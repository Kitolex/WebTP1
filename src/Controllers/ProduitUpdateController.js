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
var ProduitUpdateController = /** @class */ (function (_super) {
    __extends(ProduitUpdateController, _super);
    function ProduitUpdateController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProduitUpdateController.prototype.retourAccueil = function () {
        this.getMain().showAdminPage();
    };
    ProduitUpdateController.prototype.updateProduit = function (titre, description, prix, produit) {
        var indice = 0;
        for (indice; indice < this.getMain().catalogue.produitList.length; indice++) {
            if (this.getMain().catalogue.getProduit(indice).nom == produit.nom) {
                this.getMain().catalogue.getProduit(indice).nom = titre;
                this.getMain().catalogue.getProduit(indice).description = description;
                this.getMain().catalogue.getProduit(indice).prix = Number.parseInt(prix);
                break;
            }
        }
        this.getMain().showAdminPage();
    };
    return ProduitUpdateController;
}(Controller_1.Controller));
exports.ProduitUpdateController = ProduitUpdateController;
