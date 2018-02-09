import {Main} from "../index";
import {Produit} from "../Models/Produit";

export class ProduitUpdateController{
    private main: Main;

    setMain(main: Main) {
        this.main= main;
    }

    retourAccueil() {
        this.main.showAdminPage();
    }

    updateProduit(titre: string, description: string, prix: string,produit : Produit) {
        let indice : number=0;
        for(indice;indice<this.main.catalogue.produitList.length;indice++){
            if(this.main.catalogue.getProduit(indice).nom==produit.nom){
                this.main.catalogue.getProduit(indice).nom=titre;
                this.main.catalogue.getProduit(indice).description=description;
                this.main.catalogue.getProduit(indice).prix=Number.parseInt(prix);
                break;
            }
        }
        this.main.showAdminPage();
    }
}