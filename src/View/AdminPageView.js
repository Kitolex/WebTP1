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
        //-----------------Génération HTML---------------
        var _this = this;
        //variable pour afficher la gestion du catalgue
        var affichageAdminPageFinal = "";
        var sizeCatalogue = this.catalogue.produitList.length; //taille du catalogue
        var indiceDebutCatalogue = (page - 1) * 10; //indice de début  de la liste
        var indiceFinCatalogue = Math.min(sizeCatalogue, 10 * page); //indice de fin de la liste
        //boutton pour ajouter un article
        affichageAdminPageFinal +=
            '<div class="container">' +
                '<button type="button" class="btn btn-primary btn-block" id="addProduit">Ajouter Produit</button>';
        '</div>';
        //affichage de chaque produit
        for (var i = indiceDebutCatalogue; i < indiceFinCatalogue; i++) {
            affichageAdminPageFinal +=
                '<div class="container">' +
                    '<div class="row" style="background-color:lavender;">' +
                    '<div class="col-xs-9" >' +
                    '<img src="' + this.catalogue.getProduit(i).srcImage + '" class="img-responsive">' +
                    '</div>' +
                    '<div class="col">' +
                    '<div class="well" class="float-right">' +
                    '<div class="text">' +
                    '<h5>' + this.catalogue.getProduit(i).nom + '</h5>' +
                    '<h6 class="text-descri-detaille-admin" class="descri arme">' + this.catalogue.getProduit(i).description.slice(0, this.catalogue.MAX_CHAR_DESCRIPTION) + '...</h6>' +
                    '<h5>' + this.catalogue.getProduit(i).prix + ' $</h5> ' +
                    '<button type="button" class="btn btn-primary btn-sm" id="update' + this.catalogue.getProduit(i).nom + '">Modifier</button>' +
                    '<button type="button" class="btn btn-primary btn-sm" id="delete' + this.catalogue.getProduit(i).nom + '">Supprimer</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
        }
        //--Boutton catalogue--
        affichageAdminPageFinal += '<div class="text-center">' +
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-dark" id="DebutButton"><<</button>' + // boutton pour revenir au début
            '<button type="button" class="btn btn-dark" id="PrecedentButton"><</button>'; // boutton pour aller à la page précédente
        //on met si besoin le boutton pour aller sur les 2 pages précédentes
        for (var i = 2; i > 0; i--) {
            if (page > i) {
                affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="-' + i + 'Page">' + (page - i) + '</button>';
            }
        }
        //boutton pour la page actuel (inutilisable)
        affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="pageActuel">' + page + '</button>';
        //boutton si possibilité pour aller sur les 2 pages suivantes
        for (var i = 1; i < 3; i++) {
            if (sizeCatalogue > page * 10 + (10 * (i - 1))) {
                affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="+' + i + 'Page">' + (page + i) + '</button>';
            }
        }
        //boutton pour aller sur la page suivantes
        affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="SuivantButton">></button>';
        //boutton pour aller sur la dernière page
        affichageAdminPageFinal += '<button type="button" class="btn btn-dark" id="FinButton">>></button>';
        affichageAdminPageFinal += '</div></div>'; //fermer les div des bouttons
        // on applique le html
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageAdminPageFinal;
        var _loop_1 = function (i) {
            document.getElementById("update" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) { return _this.controller.modifierProduit(_this.catalogue.getProduit(i)); });
            document.getElementById("delete" + this_1.catalogue.getProduit(i).nom).addEventListener("click", function (e) { return _this.controller.supprimerProduit(_this.catalogue.getProduit(i), page); });
        };
        var this_1 = this;
        //on place les boutton pour modifier et supprimer les produits
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
        // on désactive le boutton de la page actuel
        document.getElementById("pageActuel").setAttribute("disabled", "true");
        //évenement pour pouvoir ajouter un produit
        document.getElementById("addProduit").addEventListener("click", function (e) { return _this.controller.createProduit(); });
    };
    AdminPageView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    return AdminPageView;
}());
exports.AdminPageView = AdminPageView;
