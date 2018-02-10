"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
/**
 * Class qui permet de gérer la vue de l'affichage du catalogue et coût
 */
var CatalogueView = /** @class */ (function () {
    /**
     *  Constructeur de la classe
     * @param {Catalogue} catalogue
     *  catalogue à afficher
     */
    function CatalogueView(catalogue) {
        this.catalogue = catalogue;
    }
    /**
     * Fonction appellé par main qui permet d'afficher le catalogue
     * @param {number} page
     */
    CatalogueView.prototype.init = function (page) {
        //-----------------Génération HTML---------------
        var _this = this;
        //variable pour afficher le catalogue
        var affichageCatalogueFinal = "";
        var sizeCatalogue = this.catalogue.produitList.length; //taille du catalogue
        var indiceDebutCatalogue = (page - 1) * 10; //indice de début de la liste du catalogue
        var indiceFinCatalogue = Math.min(sizeCatalogue, 10 * page); //indice de fin de la liste du catalogue
        //affichage de chaque produit du catalogue
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            affichageCatalogueFinal +=
                '<div class="container">' +
                    '<div class="row" style="background-color:lavender;">' +
                    '<div class="col-xs-9" >' +
                    '<img src="' + this.catalogue.getProduit(i).srcImage + '" class="img-responsive">' +
                    '</div>' +
                    '<div class="col">' +
                    '<div class="well" class="float-right">' +
                    '<h5>' + this.catalogue.getProduit(i).nom + '</h5>' +
                    '<h6 class="descri arme">' + this.catalogue.getProduit(i).description.slice(0, this.catalogue.MAX_CHAR_DESCRIPTION) + '...</h6>' +
                    '<button id ="description' + this.catalogue.getProduit(i).nom + '" type="button" class="btn btn-link"> En savoir plus</button>' +
                    '<h5>' + this.catalogue.getProduit(i).prix + ' $</h5> ' +
                    '<button id="panier' + this.catalogue.getProduit(i).nom + '" type="button" class="btn btn-primary btn-sm">Ajouter au Panier</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
        }
        //--Boutton catalgue--
        affichageCatalogueFinal += '<div class="text-center">' +
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-dark" id="DebutButton"><<</button>' + // boutton pour revenir au début
            '<button type="button" class="btn btn-dark" id="PrecedentButton"><</button>'; // boutton pour aller à la page précédente
        //on met si besoin le boutton pour aller sur les 2 pages précédentes
        for (var i = 2; i > 0; i--) {
            if (page > i) {
                affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="-' + i + 'Page">' + (page - i) + '</button>';
            }
        }
        //boutton pour la page actuel (inutilisable)
        affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="pageActuel">' + page + '</button>';
        //boutton si possibilité pour aller sur les 2 pages suivantes
        for (var i = 1; i < 3; i++) {
            if (sizeCatalogue > page * 10 + (10 * (i - 1))) {
                affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="+' + i + 'Page">' + (page + i) + '</button>';
            }
        }
        //boutton pour aller sur la page suivantes
        affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="SuivantButton">></button>';
        //boutton pour aller sur la dernière page
        affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="FinButton">>></button>';
        affichageCatalogueFinal += '</div></div>'; //fermet les div des bouttons
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageCatalogueFinal; // on applique le html
        var _loop_1 = function (i) {
            document.getElementById("panier" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) { return _this.controller.buttonAddPanier(_this.catalogue.getProduit(i)); });
            document.getElementById("description" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) { return _this.controller.buttonDescriptionDetaille(_this.catalogue.getProduit(i)); });
        };
        var this_1 = this;
        //pour chaque porduit on met un evenement pour l'ajouter au panier et voir la description
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            _loop_1(i);
        }
        //si page 1 on disable le bouton du début et précédent
        if (page == 1) {
            document.getElementById("DebutButton").setAttribute("disabled", "true");
            document.getElementById("PrecedentButton").setAttribute("disabled", "true");
        }
        else {
            document.getElementById("DebutButton").addEventListener("click", function (e) { return _this.init(1); });
            document.getElementById("PrecedentButton").addEventListener("click", function (e) { return _this.init(page - 1); });
        }
        //si on est a la dernière page on disable le boutton suivant et fin
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
        //on met l'évenement si possibilité pour atteindre les 2 page précédentes en relançant init
        for (var i = 2; i > 0; i--) {
            _loop_2(i);
        }
        var _loop_3 = function (i) {
            if (sizeCatalogue > page * 10 + (10 * (i - 1))) {
                document.getElementById("+" + i + "Page").addEventListener("click", function (e) { return _this.init(page + i); });
            }
        };
        //on met l'évenement si possibilité pour atteindre les 2 page suivantes en relançant init
        for (var i = 1; i < 3; i++) {
            _loop_3(i);
        }
        document.getElementById("pageActuel").setAttribute("disabled", "true"); // on désactive le boutton de la page actuel
    };
    CatalogueView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return CatalogueView;
}());
exports.CatalogueView = CatalogueView;
