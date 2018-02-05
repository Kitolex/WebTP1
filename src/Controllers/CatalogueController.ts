import {Produit} from "../Models/Produit";
import {Main} from "../index";

export class CatalogueController{

    private main : Main;

    public buttonAddPanier(produit : Produit){
        this.main.panier.addProduit(produit);
        console.log(this.main.panier);
    }

    public buttonDescriptionDetaille(produit : Produit){
        this.main.showDescription(produit);
    }

    public setMain(main :Main){
        this.main=main;
    }

}