import {Produit} from "../Models/Produit";
import {Main} from "../index";
import {Controller} from "./Controller";

/**
 * Cette classe est le controlleur de la vue CatalogueView
 */
export class CatalogueController extends Controller{


    /**
     * Cette méthode permet d'ajouter au panier le produit choisi
     * @param {Produit} produit
     *  produit à ajouter dans le panier
     */
    public buttonAddPanier(produit: Produit, htmlParagraphElement: HTMLParagraphElement){
        this.getMain().panier.addProduit(produit);//on ajoute le produit au panier
        htmlParagraphElement.innerText="Ajouter au panier : "+this.getMain().panier.produitList.get(produit);
        document.getElementById(Main.ID_PANIER_NUMBER_DIV).innerText=this.getMain().panier.produitList.size+'';//on actualise l'affichage du nombre de produit différent dans le panier
    }

    /**
     * Cette méthode permet de montrer la vue de la description détaillée du produit
     * @param {Produit} produit
     *  produit que l'on souhaite voir sa description détaillé
     */
    public buttonDescriptionDetaille(produit : Produit){
        this.getMain().showDescription(produit)//on lance la vue pour voir la description détaillé
    }

    /**
     * Méthode qui permet de retourner le bouton ajouter au panier à la vue
     * @param {Produit} produit
     * @returns {string}
     */
    public setNbPanier(produit : Produit) :string{
        return '<button id="panier'+produit.nom+'" type="button" class="btn btn-primary btn-sm">'+this.getMain().panier.produitList.get(produit)+'</button>';
    }

    /**
     * Méthode qui permet de savoir si le produit est déja dans le panier
     * @param {Produit} produit
     * @returns {boolean}
     */
    public existProduitPanier(produit: Produit) :boolean{
        return this.getMain().panier.produitList.get(produit)!=null;
    }
}