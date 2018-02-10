"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
/**
 * Class qui permet de gérer la vue de l'affichage de la gestion du catalogue par l'admin
 */
var AdminPageView = /** @class */ (function () {
    /**
     * Constructeur de la classe
     * @param {Catalogue} catalogue
     */
    function AdminPageView(catalogue) {
        this.catalogue = catalogue;
    }
    /**
     * Fonction appellé par main qui permet d'afficher la gestion du catalogue
     * @param {number} page
     */
    AdminPageView.prototype.init = function (page) {
        var _this = this;
        var affichageAdminPageFinal = "";
        var sizeCatalogue = this.catalogue.produitList.length;
        var indiceDebutCatalogue = (page - 1) * 10;
        var indiceFinCatalogue = Math.min(sizeCatalogue, 10 * page);
        affichageAdminPageFinal += '<button id="addProduit">Ajouter Produit</button>';
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            affichageAdminPageFinal +=
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
        affichageAdminPageFinal += '<div class="text-center">' +
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-dark" id="DebutButton"><<</button>' +
            '<button type="button" class="btn btn-dark" id="PrecedentButton"><</button>';
        for (var i = 2; i > 0; i--) {
            if (page > i) {
                affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="-' + i + 'Page">' + (page - i) + '</button>';
            }
        }
        affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="pageActuel">' + page + '</button>';
        for (var i = 1; i < 3; i++) {
            if (sizeCatalogue > page * 10 + (10 * (i - 1))) {
                affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="+' + i + 'Page">' + (page + i) + '</button>';
            }
        }
        affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="SuivantButton">></button>';
        affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="FinButton">>></button>';
        affichageAdminPageFinal += '</div></div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageAdminPageFinal;
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
        document.getElementById("addProduit").addEventListener("click", function (e) { return _this.controller.createProduit(); });
    };
    AdminPageView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return AdminPageView;
}());
exports.AdminPageView = AdminPageView;
