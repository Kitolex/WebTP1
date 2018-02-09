import {Main} from "../index";
import {Produit} from "../Models/Produit";

export class AdminPageController{

    private main : Main;

    public setMain(main :Main){
        this.main=main;
    }

    supprimerProduit(produit: Produit,page:number) {
        if(confirm("Etes vous sur de vouloir le supprimer")){
           this.main.catalogue.deleteProduit(produit);
           this.main.showAdminPage(page);
        }
    }

    modifierProduit(produit: Produit) {
        this.main.showProduitUpdate(produit);
    }
}