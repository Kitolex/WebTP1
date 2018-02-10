import {Controller} from "./Controller";
import {Produit} from "../Models/Produit";
import {Main} from "../index";

export class CreateProduitController extends Controller{

    createProduit(titre: string, description: string , prix: string, taxe: string) {
        console.log(description);
        let produit : Produit = new Produit(titre,description,Number.parseInt(prix),Main.SRC_FICHIER+"placeholder.jpg",Number.parseInt(taxe));

        this.getMain().catalogue.addProduit(produit);
        this.getMain().showAdminPage();
    }




}