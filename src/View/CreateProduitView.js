"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
/**
 * Class qui permet de gérer la vue pour la création d'un produit
 */
var CreateProduitView = /** @class */ (function () {
    function CreateProduitView() {
    }
    /**
     * Fonction appellé par main qui permet d'afficher la création du produit
     */
    CreateProduitView.prototype.init = function () {
        //-----------------Génération HTML---------------
        var _this = this;
        // variable pour afficher le formulaire pour créer le produit
        var affichageCreateProduitFinal = '<div class="container">' +
            '<div class="row"  style="background-color:lavender;">' +
            '<div class="col-xs-9" >' +
            '<p id="imageSRC"></p>' +
            '</div>' +
            '<div class="col">' +
            '<div class="well" class="float-right">' +
            '<div class="text">' +
            '<input id="titre" ><br>' +
            '<textarea id="description" rows="4" cols="50"></textarea><br>' +
            '<input id="prix"><br>' +
            '<input id="taxe" value="30"><br>' +
            '<button id="createProduit">Créer le produit</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageCreateProduitFinal; // on applique html à la main div
        //-------------événement--------//
        //évennement sur le boutton créer le produit qui lance la fonction createProduit du controlleur
        document.getElementById("createProduit").addEventListener("click", function (e) { return _this.controller.createProduit(document.getElementById("titre").value, //titre du produit
        document.getElementById("description").value, //description du produit
        document.getElementById("prix").value, //prix du produit
        document.getElementById("taxe").value); });
    };
    CreateProduitView.prototype.setController = function (controller, main) {
        this.controller = controller;
        this.controller.setMain(main);
    };
    return CreateProduitView;
}());
exports.CreateProduitView = CreateProduitView;
