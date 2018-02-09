import {Main} from "../index";
import {Produit} from "../Models/Produit";

export class PanierController{

    private main : Main;



    public setMain(main :Main){
        this.main=main;
    }

    public changeNumberProduit(produit: Produit, number: number) {
        this.main.panier.setNumberProduit(produit,number);
    }

    public acheter() {
        this.main.panier.clear();
        this.main.showConfirmPage();
    }
}