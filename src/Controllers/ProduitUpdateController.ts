import {Produit} from "../Models/Produit";
import {Controller} from "./Controller";

/**
 * Cette classe est le controlleur de la vue ProduitUpdate
 */
export class ProduitUpdateController extends Controller{

    /**
     * Cette méthode permet de revenir à l'accueil de l'admin
     */
    retourAccueil() {
        this.getMain().showAdminPage();//lance la vue de la page d'admin
    }

    /**
     * Cette méthode permet de modifier un produit du catalogue
     * @param {string} titre
     *  nouveau titre du produit
     * @param {string} description
     *  nouvelle description du produit
     * @param {string} prix
     *  nouveau prix du produit
     * @param {Produit} produit
     *  produit à modifier
     */
    updateProduit(titre: string, description: string, prix: string,produit : Produit) {
        let indice : number=0;
        let ajout : boolean=true;
        for(indice;indice<this.getMain().catalogue.produitList.length;indice++){//on parcourt la liste de produit du catalogue pour trouver le produit modifier
            if(this.getMain().catalogue.getProduit(indice).nom==produit.nom){//une fois trouvé on modifier le titre,description et prix

                for(let i :number =0;i<this.getMain().catalogue.produitList.length;i++){
                    if(this.getMain().catalogue.getProduit(i).nom==titre){
                        console.log(this.getMain().catalogue.getProduit(i).nom+"/"+titre);
                        alert("un produit porte déja ce nom\nVeuillez prendre un autre nom");
                        ajout=false;
                        break;
                    }
                }

                if(ajout){
                    this.getMain().catalogue.getProduit(indice).nom=titre;
                    this.getMain().catalogue.getProduit(indice).description=description;
                    this.getMain().catalogue.getProduit(indice).prix=Number.parseInt(prix);
                }
                break;//on sort de la boucle des qu'on l'a trouvé
            }
        }
        if(ajout){
            this.getMain().showAdminPage();//et on réaffiche la page d'admin
        }

    }
}