import {Produit} from "./Produit";

export class Catalogue{

    private _produitList : Array<Produit> ;
    private MAX_AFFICHE_PRODUIT : number;


    constructor(produitList?: Array<Produit>) {
        if(produitList){
            this._produitList = produitList;
        }else{
            this._produitList = new Array<Produit>();
        }

    }

    public addProduit(produit : Produit){
        this._produitList.push(produit);
    }


    get produitList(): Array<Produit> {
        return this._produitList;
    }

    set produitList(value: Array<Produit>) {
        this._produitList = value;
    }

    public static init(srcFichier :string) :Catalogue {
        let produit1 = new Produit("KratosArme","La grande et majestueuse arme de Kratos",5,srcFichier+"kratos.jpg");
        let produit2 = new Produit("KratosArme22222","22222La grande et majestueuse arme de Kratos",5,srcFichier+"kratos.jpg");
        let produit3 = new Produit("KratosArme3333","333333La grande et majestueuse arme de Kratos",5,srcFichier+"kratos.jpg");

        let catalogue = new Catalogue();
        catalogue.addProduit(produit1);
        catalogue.addProduit(produit2);
        catalogue.addProduit(produit3);

        return catalogue;
    }
}