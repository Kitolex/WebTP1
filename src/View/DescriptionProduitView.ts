import {Produit} from "../Models/Produit";
import {DescriptionProduitController} from "../Controllers/DescriptionProduitController";
import {Main} from "../index";

/**
 * Class qui permet de gérer la vue de la description du produit
 */
export class DescriptionProduitView{

    /**
     * Produit à afficher la description
     */
    private produit : Produit;
    /**
     * Controller de la vue
     */
    private controller : DescriptionProduitController;

    /**
     * Constructeur de la classe
     * @param {Produit} produit
     *  produit à afficher la description
     */
    constructor(produit: Produit) {
        this.produit = produit;
    }

    /**
     * Fonction appellé par main qui permet d'afficher la description du produit
     */
    public init(){

        //-----------------Génération HTML---------------

        // //variable pour afficher la description du produit
        let affichageDescriptionProduitFinal =
            '<div class="container">'+
                '<div class="row"  style="background-color:lavender;">'+
                    '<div class="col-xs-9" >'+
                        '<img src="'+this.produit.srcImage+'" class="img-responsive">'+
                    '</div>'+
                    '<div class="col">'+
                        '<div class="well" class="float-right">'+
                            '<div class="text">'+
                                '<h5>'+this.produit.nom +'</h5>'+
                                '<h6 class="descri arme">'+this.produit.description+'</h6>'+
                                '<h5>'+this.produit.prix+' $</h5>'+
                                '<button id="panier'+this.produit.nom+'" type="button" class="btn btn-primary btn-sm">Ajouter au Panier</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="text-center">'+
                '<div class="btn-group">'+
                    '<button id="retourCatalogue" type="button" class="btn btn-dark">Retour au catalogue</button>'+
                '<div>'+
            '</div>';


        document.getElementById(Main.ID_MAIN_DIV).innerHTML = affichageDescriptionProduitFinal;// on applique html à la main div

        //-------------événement--------//

        //événement pour rajouter le produit au panier en appellant la fonction addPanier du controller
        document.getElementById("panier"+this.produit.nom).addEventListener("click", (e:Event) =>this.controller.addPanier(this.produit));
        //événement du bouton pour revenir au catalogue en lançant la fonction retourAccueil du controller
        document.getElementById("retourCatalogue").addEventListener("click", (e:Event) =>this.controller.retourAccueil());
    }


    public setController(controller : DescriptionProduitController, main :Main){
        this.controller=controller;
        controller.setMain(main);
    }
}