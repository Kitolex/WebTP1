import {Produit} from "./Produit";
import {Main} from "../index";

export class Catalogue{

    private _produitList : Array<Produit> ;
    private MAX_AFFICHE_PRODUIT : number;
    public readonly MAX_CHAR_DESCRIPTION :number = 30;


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

    public getProduit(indice : number) :Produit{
        return this._produitList[indice];
    }

    set produitList(value: Array<Produit>) {
        this._produitList = value;
    }

    public static init() :Catalogue {

        let catalogue = new Catalogue();
        for(let i :number =0;i<45;i++){
            let produit = new Produit("KratosArme"+i,
                "Ceci est une superbe description d'arme tres détaillée qui décrit toute l'arme de fond en comble. Donc ceci est l'arme de kratos qui a servis a tué les dieux Grec, Nordique, Egyptien, Maya, Européen, etc."+i,
                10,Main.SRC_FICHIER+"kratos.jpg",30);
            catalogue.addProduit(produit);
        }

        return catalogue;
    }

    deleteProduit(produit: Produit) {
        this.produitList=this.produitList.filter(item => item.nom!=produit.nom);
    }
}