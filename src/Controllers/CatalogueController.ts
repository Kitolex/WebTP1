import {Produit} from "../Models/Produit";
import {Main} from "../index";
import {Controller} from "./Controller";

export class CatalogueController extends Controller{



    public buttonAddPanier(produit : Produit){
        this.getMain().panier.addProduit(produit);
        document.getElementById(Main.ID_PANIER_NUMBER_DIV).innerText=this.getMain().panier.produitList.size+'';
    }

    public buttonDescriptionDetaille(produit : Produit){
        this.getMain().showDescription(produit);
    }


}