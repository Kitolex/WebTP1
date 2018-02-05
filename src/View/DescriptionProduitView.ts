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
        let affichageProduitsFinal = '<img src="'+ this.produit.srcImage+'"> '+
            '<p id="nom'+this.produit.nom+'">'+this.produit.nom +'</p> '+
            '<p>'+this.produit.description+'</p>'+
            '<button id="panier'+this.produit.nom+'">Try it</button><br>';

        document.getElementById(Main.ID_MAIN_DIV).innerHTML = affichageProduitsFinal;
    }

    public setController(controller : DescriptionProduitController, main :Main){
        this.controller=controller;
        controller.setMain(main);
    }
}