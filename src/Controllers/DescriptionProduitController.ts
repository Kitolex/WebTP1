import {Main} from "../index";
import {Produit} from "../Models/Produit";
import {Controller} from "./Controller";

/**
 * Cette classe est le controlleur de la vue DescriptionProduit
 */
export class DescriptionProduitController extends Controller{


    /**
     * Cette méthode permet d'ajouter un produit au panier
     * @param {Produit} produit
     *  produit à ajouter au panier
     */
    public addPanier(produit: Produit) {
        this.getMain().panier.addProduit(produit);//on ajoute le produit au panier
        document.getElementById(Main.ID_PANIER_NUMBER_DIV).innerText=this.getMain().panier.produitList.size+'';//on actualise la nombre de produit différent dans le panier
    }

    /**
     * Cette méthode permet de retourner au catalogue
     */
    public retourAccueil(){
        this.getMain().showCatalogue();//on affiche la vue du catalogue
    }
}