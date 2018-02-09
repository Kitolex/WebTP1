"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProduitUpdateController = /** @class */ (function () {
    function ProduitUpdateController() {
    }
    ProduitUpdateController.prototype.setMain = function (main) {
        this.main = main;
    };
    ProduitUpdateController.prototype.retourAccueil = function () {
        this.main.showAdminPage();
    };
    ProduitUpdateController.prototype.updateProduit = function (titre, description, prix, produit) {
        var indice = 0;
        for (indice; indice < this.main.catalogue.produitList.length; indice++) {
            if (this.main.catalogue.getProduit(indice).nom == produit.nom) {
                this.main.catalogue.getProduit(indice).nom = titre;
                this.main.catalogue.getProduit(indice).description = description;
                this.main.catalogue.getProduit(indice).prix = Number.parseInt(prix);
                break;
            }
        }
        this.main.showAdminPage();
    };
    return ProduitUpdateController;
}());
exports.ProduitUpdateController = ProduitUpdateController;
