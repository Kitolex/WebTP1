import {Main} from "../index";
import {Produit} from "../Models/Produit";
import {Controller} from "./Controller";

export class DescriptionProduitController extends Controller{



    public addPanier(produit: Produit) {
        this.getMain().panier.addProduit(produit);
        document.getElementById(Main.ID_PANIER_NUMBER_DIV).innerText=this.getMain().panier.produitList.size+'';
    }

    public retourAccueil(){
        this.getMain().showCatalogue();
    }
}