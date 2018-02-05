"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var CatalogueView = /** @class */ (function () {
    function CatalogueView(catalogue) {
        this.catalogue = catalogue;
    }
    CatalogueView.prototype.init = function (page) {
        var _this = this;
        console.log(page);
        var affichageProduitsFinal = "";
        var sizeCatalogue = this.catalogue.produitList.length;
        var indiceDebutCatalogue = (page - 1) * 10;
        var indiceFinCatalogue = Math.min(sizeCatalogue, 10 * page);
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            affichageProduitsFinal += '<img src="' + this.catalogue.getProduit(i).srcImage + '"> ' +
                '<p id="nom' + this.catalogue.getProduit(i).nom + '">' + this.catalogue.getProduit(i).nom + '</p> ' +
                '<p>' + this.catalogue.getProduit(i).description.slice(0, this.catalogue.MAX_CHAR_DESCRIPTION) + '...</p>' +
                '<button id="panier' + this.catalogue.getProduit(i).nom + '">Try it</button><br>';
        }
        affichageProduitsFinal += '<button id="DebutButton"><<</button>';
        affichageProduitsFinal += '<button id="PrecedentButton"><</button>';
        for (var i = 2; i > 0; i--) {
            if (page > i) {
                affichageProduitsFinal += '<button id="-' + i + 'Page">' + (page - i) + '</button>';
            }
        }
        affichageProduitsFinal += '<button id="pageActuel">' + page + '</button>';
        for (var i = 1; i < 3; i++) {
            if (sizeCatalogue > page * 10 + (10 * (i - 1))) {
                affichageProduitsFinal += '<button id="+' + i + 'Page">' + (page + i) + '</button>';
            }
        }
        affichageProduitsFinal += '<button id="SuivantButton">></button>';
        affichageProduitsFinal += '<button id="FinButton">>></button>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageProduitsFinal;
        var _loop_1 = function (i) {
            document.getElementById("panier" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) { return _this.controller.buttonAddPanier(_this.catalogue.getProduit(i)); });
            document.getElementById("nom" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) { return _this.controller.buttonDescriptionDetaille(_this.catalogue.getProduit(i)); });
        };
        var this_1 = this;
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            _loop_1(i);
        }
        if (page == 1) {
            document.getElementById("DebutButton").setAttribute("disabled", "true");
            document.getElementById("PrecedentButton").setAttribute("disabled", "true");
        }
        else {
            document.getElementById("DebutButton").addEventListener("click", function (e) { return _this.init(1); });
            document.getElementById("PrecedentButton").addEventListener("click", function (e) { return _this.init(page - 1); });
        }
        if (sizeCatalogue < page * 10) {
            document.getElementById("SuivantButton").setAttribute("disabled", "true");
            document.getElementById("FinButton").setAttribute("disabled", "true");
        }
        else {
            document.getElementById("SuivantButton").addEventListener("click", function (e) { return _this.init(page + 1); });
            document.getElementById("FinButton").addEventListener("click", function (e) { return _this.init((10 + sizeCatalogue - (sizeCatalogue % 10)) / 10); });
        }
        var _loop_2 = function (i) {
            if (page > i) {
                document.getElementById("-" + i + "Page").addEventListener("click", function (e) { return _this.init(page - i); });
            }
        };
        for (var i = 2; i > 0; i--) {
            _loop_2(i);
        }
        var _loop_3 = function (i) {
            if (sizeCatalogue > page * 10 + (10 * (i - 1))) {
                document.getElementById("+" + i + "Page").addEventListener("click", function (e) { return _this.init(page + i); });
            }
        };
        for (var i = 1; i < 3; i++) {
            _loop_3(i);
        }
        document.getElementById("pageActuel").setAttribute("disabled", "true");
    };
    CatalogueView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return CatalogueView;
}());
exports.CatalogueView = CatalogueView;
