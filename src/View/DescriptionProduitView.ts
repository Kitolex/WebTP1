import {Produit} from "../Models/Produit";
import {DescriptionProduitController} from "../Controllers/DescriptionProduitController";
import {Main} from "../index";

export class DescriptionProduitView{


    private produit : Produit;
    private controller : DescriptionProduitController;


    constructor(produit: Produit) {
        this.produit = produit;
    }


    public init(){
        let affichageProduitsFinal =
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


        document.getElementById(Main.ID_MAIN_DIV).innerHTML = affichageProduitsFinal;

        document.getElementById("panier"+this.produit.nom).addEventListener("click", (e:Event) =>this.controller.addPanier(this.produit));
        document.getElementById("retourCatalogue").addEventListener("click", (e:Event) =>this.controller.retourAccueil());
    }

    public setController(controller : DescriptionProduitController, main :Main){
        this.controller=controller;
        controller.setMain(main);
    }
}