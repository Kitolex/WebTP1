"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var AdminPageView = /** @class */ (function () {
    function AdminPageView(catalogue) {
        this.catalogue = catalogue;
    }
    AdminPageView.prototype.init = function (page) {
        var _this = this;
        var affichageFinalCatalogue = "";
        var sizeCatalogue = this.catalogue.produitList.length;
        var indiceDebutCatalogue = (page - 1) * 10;
        var indiceFinCatalogue = Math.min(sizeCatalogue, 10 * page);
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            affichageFinalCatalogue +=
                '<div class="container">' +
                    '<div class="row" style="background-color:lavender;">' +
                    '<div class="col-xs-9" >' +
                    '<img src="' + this.catalogue.getProduit(i).srcImage + '" class="img-responsive">' +
                    '</div>' +
                    '<div class="col">' +
                    '<div class="well" class="float-right">' +
                    '<h5>' + this.catalogue.getProduit(i).nom + '</h5>' +
                    '<h6 class="descri arme">' + this.catalogue.getProduit(i).description.slice(0, this.catalogue.MAX_CHAR_DESCRIPTION) + '...</h6>' +
                    '<h5>' + this.catalogue.getProduit(i).prix + ' $</h5> ' +
                    '<button id="update' + this.catalogue.getProduit(i).nom + '">Modifier</button>' +
                    '<button id="delete' + this.catalogue.getProduit(i).nom + '">Supprimer</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
        }
        affichageFinalCatalogue += '<div class="text-center">' +
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-dark" id="DebutButton"><<</button>' +
            '<button type="button" class="btn btn-dark" id="PrecedentButton"><</button>';
        for (var i = 2; i > 0; i--) {
            if (page > i) {
                affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="-' + i + 'Page">' + (page - i) + '</button>';
            }
        }
        affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="pageActuel">' + page + '</button>';
        for (var i = 1; i < 3; i++) {
            if (sizeCatalogue > page * 10 + (10 * (i - 1))) {
                affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="+' + i + 'Page">' + (page + i) + '</button>';
            }
        }
        affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="SuivantButton">></button>';
        affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="FinButton">>></button>';
        affichageFinalCatalogue += '</div></div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageFinalCatalogue;
        var _loop_1 = function (i) {
            document.getElementById("update" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) { return _this.controller.modifierProduit(_this.catalogue.getProduit(i)); });
            document.getElementById("delete" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) { return _this.controller.supprimerProduit(_this.catalogue.getProduit(i), page); });
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
    AdminPageView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return AdminPageView;
}());
exports.AdminPageView = AdminPageView;
