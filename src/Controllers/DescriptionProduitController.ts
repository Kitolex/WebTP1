import {Main} from "../index";
import {Produit} from "../Models/Produit";

export class DescriptionProduitController{

    private main : Main;



    public setMain(main :Main){
        this.main=main;
    }

    public addPanier(produit: Produit) {
        this.main.panier.addProduit(produit);
    }

    public retourAccueil(){
        this.main.showCatalogue();
    }
}