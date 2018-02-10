import {Produit} from "../Models/Produit";
import {Controller} from "./Controller";

export class AdminPageController extends Controller{


    supprimerProduit(produit: Produit,page:number) {
        if(confirm("Etes vous sur de vouloir le supprimer")){
            this.getMain().catalogue.deleteProduit(produit);
            this.getMain().showAdminPage(page);
        }
    }

    modifierProduit(produit: Produit) {
        this.getMain().showProduitUpdate(produit);
    }

    createProduit() {
        this.getMain().showCreateProduit();
    }
}