"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
/**
 * Class qui permet de gérer la vue d'une modification de produit par un admin
 */
var ProduitUpdtateView = /** @class */ (function () {
    /**
     * Constructeur de la classe ProduitUpdtateView
     * @param {Produit} produit
     *  le produit à modifier
     */
    function ProduitUpdtateView(produit) {
        this.produit = produit;
    }
    /**
     * Méthode qui permet de set up le controller pour la vue
     * @param {ProduitUpdateController} controller
     *  controller pour la vue
     * @param {Main} main
     *  la classe main est à rajouter dans la classe main afin de permettre au controller de modifier les infos principaux
     */
    ProduitUpdtateView.prototype.setController = function (controller, main) {
        this.controller = controller;
        this.controller.setMain(main);
    };
    /**
     * Fonction appellé par main qui permet d'afficher le produit à modifier et les différents éléments
     */
    ProduitUpdtateView.prototype.init = function () {
        //-----------------Génération HTML---------------
        var _this = this;
        //affichage du produit à modifier
        var affichageProduitUpdateFinal = '<div class="container">' +
            '<div class="row"  style="background-color:lavender;">' +
            '<div class="col-xs-9" >' +
            '<img src="' + this.produit.srcImage + '" class="img-responsive img-decri-deta">' +
            '</div>' +
            '<div class="col">' +
            '<div class="well" class="float-right">' +
            '<div class="text">' +
            '<h5>Titre de l\'arme :</h5>' +
            '<input class="form-control fc1" rows="1" id="titre" value="' + this.produit.nom + '">' +
            '<h5>Description de l\'arme :</h5>' +
            '<textarea class="form-control fc2" rows="3" id="description" rows="4" cols="50">' + this.produit.description + '</textarea>' +
            '<h5>Prix de l\'arme :</h5>' +
            '<input class="form-control fc3" rows="1" id="prix" value="' + this.produit.prix + '">' +
            '<button  id="modifier" type="button" class="btn btn-primary btn-sm">Modifer</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="text-center">' +
            '<div class="btn-group">' +
            '<button id="retourCatalogue" type="button" class="btn btn-dark">Retour au catalogue</button>' +
            '</div>' +
            '</div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichageProduitUpdateFinal; //applique html à la main div
        //-------------événement--------//
        //évenement pour le boutton "modifier" qui appelle la fonction du controller qui modifie le produit
        document.getElementById("modifier").addEventListener("click", function (e) { return _this.controller.updateProduit(document.getElementById("titre").value //titre du produit
        , document.getElementById("description").value //description du produit
        , document.getElementById("prix").value, //prix du produit
        _this.produit); });
        //évenement pour le bouton "Retour au catalogue" qui appelle la fonction du controller qui renvoie à la page d'accueil
        document.getElementById("retourCatalogue").addEventListener("click", function (e) { return _this.controller.retourAccueil(); });
    };
    return ProduitUpdtateView;
}());
exports.ProduitUpdtateView = ProduitUpdtateView;
