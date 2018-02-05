"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produit_1 = require("./Produit");
var index_1 = require("../index");
var Catalogue = /** @class */ (function () {
    function Catalogue(produitList) {
        this.MAX_CHAR_DESCRIPTION = 30;
        if (produitList) {
            this._produitList = produitList;
        }
        else {
            this._produitList = new Array();
        }
    }
    Catalogue.prototype.addProduit = function (produit) {
        this._produitList.push(produit);
    };
    Object.defineProperty(Catalogue.prototype, "produitList", {
        get: function () {
            return this._produitList;
        },
        set: function (value) {
            this._produitList = value;
        },
        enumerable: true,
        configurable: true
    });
    Catalogue.prototype.getProduit = function (indice) {
        return this._produitList[indice];
    };
    Catalogue.init = function () {
        var produit1 = new Produit_1.Produit("KratosArme1", "La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit2 = new Produit_1.Produit("KratosArme2", "22222La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit3 = new Produit_1.Produit("KratosArme3", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit4 = new Produit_1.Produit("KratosArme4", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit5 = new Produit_1.Produit("KratosArme5", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit6 = new Produit_1.Produit("KratosArme6", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit7 = new Produit_1.Produit("KratosArme7", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit8 = new Produit_1.Produit("KratosArme8", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit9 = new Produit_1.Produit("KratosArme9", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit10 = new Produit_1.Produit("KratosArme10", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit11 = new Produit_1.Produit("KratosArme11", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit12 = new Produit_1.Produit("KratosArme12", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit13 = new Produit_1.Produit("KratosArme13", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit14 = new Produit_1.Produit("KratosArme14", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit15 = new Produit_1.Produit("KratosArme15", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit16 = new Produit_1.Produit("KratosArme16", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit17 = new Produit_1.Produit("KratosArme17", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit18 = new Produit_1.Produit("KratosArme18", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit19 = new Produit_1.Produit("KratosArme19", "La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit20 = new Produit_1.Produit("KratosArme20", "22222La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit21 = new Produit_1.Produit("KratosArme21", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit22 = new Produit_1.Produit("KratosArme22", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit23 = new Produit_1.Produit("KratosArme23", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit24 = new Produit_1.Produit("KratosArme24", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit25 = new Produit_1.Produit("KratosArme25", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit26 = new Produit_1.Produit("KratosArme26", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit27 = new Produit_1.Produit("KratosArme27", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit28 = new Produit_1.Produit("KratosArme28", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit29 = new Produit_1.Produit("KratosArme29", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit30 = new Produit_1.Produit("KratosArme30", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit31 = new Produit_1.Produit("KratosArme31", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit32 = new Produit_1.Produit("KratosArme32", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit33 = new Produit_1.Produit("KratosArme33", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit34 = new Produit_1.Produit("KratosArme34", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit35 = new Produit_1.Produit("KratosArme35", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var produit36 = new Produit_1.Produit("KratosArme36", "333333La grande et majestueuse arme de Kratos", 5, index_1.Main.SRC_FICHIER + "kratos.jpg");
        var catalogue = new Catalogue();
        catalogue.addProduit(produit1);
        catalogue.addProduit(produit2);
        catalogue.addProduit(produit3);
        catalogue.addProduit(produit4);
        catalogue.addProduit(produit5);
        catalogue.addProduit(produit6);
        catalogue.addProduit(produit7);
        catalogue.addProduit(produit8);
        catalogue.addProduit(produit9);
        catalogue.addProduit(produit10);
        catalogue.addProduit(produit11);
        catalogue.addProduit(produit12);
        catalogue.addProduit(produit13);
        catalogue.addProduit(produit14);
        catalogue.addProduit(produit15);
        catalogue.addProduit(produit16);
        catalogue.addProduit(produit17);
        catalogue.addProduit(produit18);
        catalogue.addProduit(produit19);
        catalogue.addProduit(produit20);
        catalogue.addProduit(produit21);
        catalogue.addProduit(produit22);
        catalogue.addProduit(produit22);
        catalogue.addProduit(produit23);
        catalogue.addProduit(produit24);
        catalogue.addProduit(produit25);
        catalogue.addProduit(produit26);
        catalogue.addProduit(produit27);
        catalogue.addProduit(produit28);
        catalogue.addProduit(produit29);
        catalogue.addProduit(produit30);
        catalogue.addProduit(produit31);
        catalogue.addProduit(produit32);
        catalogue.addProduit(produit33);
        catalogue.addProduit(produit34);
        catalogue.addProduit(produit35);
        catalogue.addProduit(produit36);
        return catalogue;
    };
    return Catalogue;
}());
exports.Catalogue = Catalogue;
