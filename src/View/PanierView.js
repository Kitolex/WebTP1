"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
/**
 * Class qui permet de gérer la vue de l'affichage du panier, du coût et taxes
 */
var PanierView = /** @class */ (function () {
    /**
     * Constructeur de la classe
     * @param {Panier} panier
     *  panier à utiliser pour la vue
     */
    function PanierView(panier) {
        this.panier = panier;
    }
    /**
     * Fonction appellé par main qui permet d'afficher le panier
     */
    PanierView.prototype.init = function () {
        //-----------------Génération HTML---------------
        var _this = this;
        //variable pour afficher le panier
        var affichagePanierFinal = "";
        affichagePanierFinal +=
            '<div class="container">' +
                '<div class="row"  style="background-color:lavender;">';
        //affichage de chaque produit dans le panier
        this.panier.produitList.forEach(function (value, key, map) {
            affichagePanierFinal +=
                '<table id="Liste panier">' +
                    '<tr>' +
                    '<th id="th-tabl-img">Image produit</th>' +
                    '<th>Nom produit</th>' +
                    '<th>Prix Unité</th>' +
                    '<th>Nombre</th>' +
                    '</tr>' +
                    '<tr>' +
                    '<td id="tabl-img"><img class="img-tableau" src="' + key.srcImage + '"></td>' +
                    '<td><p id="nom' + key.nom + '" >' + key.nom + '</p></td>' +
                    '<td><p>' + key.description.slice(0, 30) + '...</p></td>' +
                    '<td>' +
                    '<div class="btn-group btn-group-nombre">' +
                    '<input type="text" class="form-control usr-panier" id="nombre' + key.nom + '" value="' + value + '">' +
                    '</div>' +
                    '<div class="btn-group">' +
                    '<button type="button" class="btn btn-dark button-panier" id="enlever' + key.nom + '">-</button>' +
                    '<button type="button" class="btn btn-dark bouton-panier-nombrebutton-panier2" id="ajouter' + key.nom + '">+</button>' +
                    '</div>' +
                    '</td>' +
                    '</tr>' +
                    '</table>';
        });
        affichagePanierFinal +=
            '<table class="taxe-panier-petit">' +
                '<tr>' +
                '<th class="th-taxe">Hors taxe</th>' +
                '<td class="td-taxe-vide">:</td>' +
                '<td class="td-taxe" id="prixTotalHT">' + this.panier.getPrixTotalHT() + '</td>' + //affichage du prix Hors Taxe
                '</tr>' +
                '<tr>' +
                '<th class="th-taxe">Taxe</th>' +
                '<td class="td-taxe-vide">:</td>' +
                '<td class="td-taxe" id="ajoutTaxe">' + (this.panier.getPrixTotalTTC() - this.panier.getPrixTotalHT()) + '</td>' + //affichage des Taxes
                '</tr>' +
                '<tr>' +
                '<th class="th-taxe">Livraison</th>' +
                '<td class="td-taxe-vide">:</td>' +
                '<td class="td-taxe" id="livraison">' + index_1.Main.COUT_LIVRAISON + '</td>' + //affichage du cout de livraison
                '</tr>' +
                '<tr>' +
                '<th class="th-taxe">Prix final</th>' +
                '<td class="td-taxe-vide">:</td>' +
                '<td class="td-taxe" id="prixTotalTTC">' + (this.panier.getPrixTotalTTC() + index_1.Main.COUT_LIVRAISON) + '</td>' + //affichage du côut total
                '</tr>' +
                '</table>';
        affichagePanierFinal +=
            '<div class="container">' +
                '<button id="acheter" type="button" class="btn btn-primary btn-sm">Acheter le panier</button>' + //bouton pour acheter le panier
                '</div>';
        affichagePanierFinal += '</div></div>';
        document.getElementById(index_1.Main.ID_MAIN_DIV).innerHTML = affichagePanierFinal; //applique html à la main div
        //-------------événement--------//
        //Pour chaque produit on applique des évenements pour gérer leur nombre
        this.panier.produitList.forEach(function (value, key, map) {
            //nombre de produit qu'on peut modifier à la main ce qui lance la fonction changeNumberProduit
            document.getElementById("nombre" + key.nom).addEventListener("input", function (e) { return _this.changeNumberProduit(key, //produit
            Number.parseInt(document.getElementById("nombre" + key.nom).value) //nombre de produit
            ); });
            //boutton qui permet de décrémenter le nombre de produit en lançant la fonction removeNumberProduit
            document.getElementById("enlever" + key.nom).addEventListener("click", function (e) { return _this.removeNumberProduit(key); });
            //boutton qui permet d'incrémenter le nombre de produit en lançant la fonction addNumberProduit
            document.getElementById("ajouter" + key.nom).addEventListener("click", function (e) { return _this.addNumberProduit(key); });
        });
        //boutton acheter qui lance la fonction acheter du controller
        document.getElementById("acheter").addEventListener("click", function (e) { return _this.controller.acheter(); });
    };
    PanierView.prototype.setController = function (controller, main) {
        this.controller = controller;
        controller.setMain(main);
    };
    /**
     * Méthode qui permet de changer le nombre de produit dans le panier (et visuellement)
     * @param {Produit} produit
     *  produit où son nombre à changer
     * @param {number} number
     *  nouveaux nombre du produit présent dans le panier
     */
    PanierView.prototype.changeNumberProduit = function (produit, number) {
        if (number > 0 && number <= 999) {
            this.controller.changeNumberProduit(produit, number); //fonction pour changer le nombre de produit
            this.initPrix(); //réinitialle les prix par rapport aux modification précédente
        }
        else if (number == 0) {
            if (confirm("Cet action entrainera la supression de ce produit de votre panier.\nEn êtes vous sûr?")) {
                this.controller.deleteProduit(produit);
                if (this.panier.produitList.size == 0) {
                    this.controller.retouraccueil();
                }
                else {
                    this.init();
                }
            }
        }
        else {
            alert("Chiffre entre 1 et 999");
            document.getElementById("nombre" + produit.nom).value = 1 + "";
        }
    };
    /**
     * Méthode qui permet d'ajoute un au nombre du produit
     * @param {Produit} key
     *  produti à incrémenter en nombre
     */
    PanierView.prototype.addNumberProduit = function (key) {
        var input = document.getElementById("nombre" + key.nom); //on récupère l'input du nombre de produit
        if (Number.parseInt(input.value) < 999) {
            input.value = (Number.parseInt(input.value) + 1) + ""; //on incrémente le nombre visuellement
            this.controller.addProduit(key);
            this.initPrix(); //réinitialle les prix par rapport aux modification précédente
        }
        else {
            alert("Vous en avez peut être déja assez non ?"); //message qui s'affiche si on dépasse la limite
        }
    };
    /**
     * Méthode qui permet de décrémenter le nombre du produit
     * @param {Produit} key
     *  produti à incrémenter en nombre
     */
    PanierView.prototype.removeNumberProduit = function (key) {
        var input = document.getElementById("nombre" + key.nom); //on récupère l'input du nombre de produit
        if (Number.parseInt(input.value) > 1) {
            input.value = (Number.parseInt(input.value) - 1) + ""; //on décrémente le nombre visuellement
            this.controller.deleteProduits(key);
        }
        else {
            if (confirm("Cet action entrainera la supression de ce produit de votre panier.\nEn êtes vous sûr?")) {
                this.controller.deleteProduit(key);
                if (this.panier.produitList.size == 0) {
                    this.controller.retouraccueil();
                }
                else {
                    this.init();
                }
            }
        }
        if (this.panier.produitList.size != 0) {
            this.initPrix(); //réinitialle les prix par rapport aux modification précédente
        }
    };
    /**
     * Méthode qui permet de gérer la réinitialisation du prix à chaque modification du panier
     */
    PanierView.prototype.initPrix = function () {
        document.getElementById("prixTotalHT").textContent = this.panier.getPrixTotalHT() + ''; //on recalcule le prix HT
        document.getElementById("ajoutTaxe").textContent = (this.panier.getPrixTotalTTC() - this.panier.getPrixTotalHT()) + ''; //on recalcule le cout des taxes
        document.getElementById("prixTotalTTC").textContent = '' + (this.panier.getPrixTotalTTC() + index_1.Main.COUT_LIVRAISON); //on recalcule le prix total avec la livraison
    };
    return PanierView;
}());
exports.PanierView = PanierView;
