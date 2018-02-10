import {Main} from "../index";
import {Produit} from "../Models/Produit";
import {Controller} from "./Controller";

export class ProduitUpdateController extends Controller{


    retourAccueil() {
        this.getMain().showAdminPage();
    }

    updateProduit(titre: string, description: string, prix: string,produit : Produit) {
        let indice : number=0;
        for(indice;indice<this.getMain().catalogue.produitList.length;indice++){
            if(this.getMain().catalogue.getProduit(indice).nom==produit.nom){
                this.getMain().catalogue.getProduit(indice).nom=titre;
                this.getMain().catalogue.getProduit(indice).description=description;
                this.getMain().catalogue.getProduit(indice).prix=Number.parseInt(prix);
                break;
            }
        }
        this.getMain().showAdminPage();
    }
}