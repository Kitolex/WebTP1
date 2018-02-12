import {Main} from "../index";
import {Produit} from "../Models/Produit";
import {Controller} from "./Controller";

/**
 * Cette classe est le controlleur de la vue PanierView
 */
export class PanierController extends Controller{

    /**
     * Cette méthode permet de changer le nombre de fois qu'on achète le produit
     * @param {Produit} produit
     *  produit où on change son nombre d'occurence dans le panier
     * @param {number} number
     *  nombre d'occurence du produit dans le panier
     */
    public changeNumberProduit(produit: Produit, number: number) {
        this.getMain().panier.setNumberProduit(produit,number);
    }

    /**
     * Cette méthode permet d'acheter le panier ainsi que de le vider
     */
    public acheter() {
       //on actualise l'affichage de nombre de produit différent du nav
        this.getMain().showConfirmPage();//on affiche la vue de la confirmation de réussite ou d'échec de l'achat
        this.getMain().panier.clear();//on vide d'abord le panier
        this.getMain().actualisePanierNumber();
    }

    /**
     * Cette méthode permet d'ajouter un produit (1 fois)
     * @param {Produit} key
     */
   public addProduit(key: Produit) {
        this.getMain().panier.addProduit(key);//on incrémente le nombre dans le panier
        this.getMain().actualisePanierNumber();
    }

    /**
     * Cette méthode permet de supprimer toutes les occurences d'un produit
     * @param {Produit} key
     */
    public deleteProduits(key: Produit) {
        this.getMain().panier.deleteProduits(key,1);//on décrémente le nombre dans le panier
    }

    /**
     *  Cette méthode permet de supprimer un produit(1 fois)
     * @param {Produit} key
     */
    public deleteProduit(key: Produit) {
        this.getMain().panier.deleteProduit(key)//on supprimer le produit du panier
        this.getMain().actualisePanierNumber();
    }

    /**
     * Cette méthode permet de revenir à l'accueil
     */
    public retouraccueil() {
        alert("Le panier est vide.\nRetour au catalogue.")
        this.getMain().showCatalogue();
    }
}