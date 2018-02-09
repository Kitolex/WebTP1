import {Produit} from "../Models/Produit";
import {ProduitUpdateController} from "../Controllers/ProduitUpdateController";
import {Main} from "../index";

export class ProduitUpdtateView {

    private produit :Produit;
    private controller : ProduitUpdateController;


    constructor(produit: Produit) {
        this.produit = produit;
    }

    setController(controller: ProduitUpdateController, main: Main) {
        this.controller=controller;
        this.controller.setMain(main);
    }

    init() {
        let affichageProduitsFinal =
            '<div class="container">'+
            '<div class="row"  style="background-color:lavender;">'+
            '<div class="col-xs-9" >'+
            '<img src="'+this.produit.srcImage+'" class="img-responsive">'+
            '</div>'+
            '<div class="col">'+
            '<div class="well" class="float-right">'+
            '<div class="text">'+
            '<input id="titre" value="'+this.produit.nom +'"><br>'+
            '<textarea id="description" rows="4" cols="50">'+this.produit.description+'</textarea><br>'+
            '<input id="prix" value="'+this.produit.prix +'"><br>'+
            '<button id="modifier" type="button" class="btn btn-primary btn-sm">Modifer</button>'+
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

        document.getElementById("modifier").addEventListener("click", (e:Event) =>this.controller.updateProduit(
            (<HTMLInputElement>document.getElementById("titre")).value
            ,(<HTMLInputElement>document.getElementById("description")).value
            ,(<HTMLInputElement>document.getElementById("prix")).value,
            this.produit
        ));
        document.getElementById("retourCatalogue").addEventListener("click", (e:Event) =>this.controller.retourAccueil());
    }
}