import {Main} from "../index";
import {Produit} from "../Models/Produit";
import {Controller} from "./Controller";

export class PanierController extends Controller{


    public changeNumberProduit(produit: Produit, number: number) {
        this.getMain().panier.setNumberProduit(produit,number);
    }

    public acheter() {
        this.getMain().panier.clear();
        document.getElementById(Main.ID_PANIER_NUMBER_DIV).innerText=this.getMain().panier.produitList.size+'';
        this.getMain().showConfirmPage();
    }
}