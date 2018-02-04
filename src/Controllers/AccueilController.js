"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccueilController = /** @class */ (function () {
    function AccueilController(catalogue) {
        this.ID_CATALOGUE_HTML = "main";
        this.MAX_CHAR_DESCRIPTION = 30;
        this._catalogue = catalogue;
    }
    Object.defineProperty(AccueilController.prototype, "catalogue", {
        get: function () {
            return this._catalogue;
        },
        set: function (value) {
            this._catalogue = value;
        },
        enumerable: true,
        configurable: true
    });
    AccueilController.prototype.init = function () {
        var affichageProduitsFinal = "";
        for (var _i = 0, _a = this._catalogue.produitList; _i < _a.length; _i++) {
            var produit = _a[_i];
            affichageProduitsFinal += '<img src="' + produit.srcImage + '"> ' +
                '<p>' + produit.nom + '</p> ' +
                '<p>' + produit.description.slice(0, this.MAX_CHAR_DESCRIPTION) + '...</p>' +
                '<button id="panier' + produit.nom + '">Try it</button><br>';
        }
        document.getElementById(this.ID_CATALOGUE_HTML).innerHTML += affichageProduitsFinal;
        var _loop_1 = function (produit) {
            document.getElementById("panier" + produit.nom).addEventListener("click", function () {
                console.log(produit.nom);
            });
        };
        for (var _b = 0, _c = this._catalogue.produitList; _b < _c.length; _b++) {
            var produit = _c[_b];
            _loop_1(produit);
        }
    };
    return AccueilController;
}());
exports.AccueilController = AccueilController;
