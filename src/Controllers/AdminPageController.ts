import {Produit} from "../Models/Produit";
import {Controller} from "./Controller";

/**
 * Cette classe est le controlleur de la vue AdminPageView
 */
export class AdminPageController extends Controller{


    /**
     * Cette méthode permet de supprimer un produit du catalogue sans changer de page
     * @param {Produit} produit
     *  produit à supprimer
     * @param {number} page
     *  numéro de page actuel
     */
    supprimerProduit(produit: Produit,page:number) {
        if(confirm("Etes vous sur de vouloir le supprimer")){//on demande confirmation à l'utilisateur si on peut supprimer le produit
            this.getMain().catalogue.deleteProduit(produit);//on supprime le produit du catalogue
            this.getMain().showAdminPage(page);//on actualise la vue (en concervant la page)
        }
    }

    /**
     * Cette méthode permet de lancer la vue pour modifier un produit
     * @param {Produit} produit
     *  produit à modifier
     */
    modifierProduit(produit: Produit) {
        this.getMain().showProduitUpdate(produit);//lance la vue produitUpdate
    }

    /**
     * Cette méthode permet de lancer la vue pour créer un nouveaux produit
     */
    createProduit() {
        this.getMain().showCreateProduit();//lance la vue createProduit
    }
}