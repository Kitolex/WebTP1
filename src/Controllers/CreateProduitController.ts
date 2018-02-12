import {Controller} from "./Controller";
import {Produit} from "../Models/Produit";
import {Main} from "../index";

/**
 * Cette classe est le controlleur de la vue CreateProduitView
 */
export class CreateProduitController extends Controller{

    /**
     * Cette méthode permet de créer un nouveau produit dans le catalogue
     * @param {string} titre
     *  titre du nouveau produit
     * @param {string} description
     *  description du nouveau produit
     * @param {string} prix
     *  prix du nouveau produit
     * @param {string} taxe
     *  taxe du nouveau produit
     */
    createProduit(titre: string, description: string , prix: string, taxe: string) {
        let produit : Produit = new Produit(titre,description,Number.parseInt(prix),Main.SRC_FICHIER+"placeholder.jpg",Number.parseInt(taxe)); // on met comme image un placeholder pour le produit
        let ajout : boolean = true;


        for(let i :number =0;i<this.getMain().catalogue.produitList.length;i++){//on regarde si le nom du produit existe déja
            if(this.getMain().catalogue.getProduit(i).nom==titre){
                console.log(this.getMain().catalogue.getProduit(i).nom+"/"+titre);
                alert("un produit porte déja ce nom\nVeuillez prendre un autre nom");
                ajout=false;
                break;
            }
        }
        if(ajout){
            this.getMain().catalogue.addProduit(produit);//on ajoute le produit au catalogue
            this.getMain().showAdminPage();//on affiche la page de gestion de catalogue(page admin)
        }
    }




}