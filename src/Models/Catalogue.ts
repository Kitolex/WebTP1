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
        let produit1 = new Produit("KratosArme1","La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit2 = new Produit("KratosArme2","22222La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit3 = new Produit("KratosArme3","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit4 = new Produit("KratosArme4","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit5 = new Produit("KratosArme5","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit6 = new Produit("KratosArme6","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit7 = new Produit("KratosArme7","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit8 = new Produit("KratosArme8","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit9 = new Produit("KratosArme9","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit10 = new Produit("KratosArme10","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit11 = new Produit("KratosArme11","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit12 = new Produit("KratosArme12","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit13 = new Produit("KratosArme13","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit14 = new Produit("KratosArme14","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit15 = new Produit("KratosArme15","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit16 = new Produit("KratosArme16","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit17 = new Produit("KratosArme17","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit18 = new Produit("KratosArme18","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit19 = new Produit("KratosArme19","La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit20 = new Produit("KratosArme20","22222La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit21 = new Produit("KratosArme21","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit22 = new Produit("KratosArme22","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit23 = new Produit("KratosArme23","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit24 = new Produit("KratosArme24","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit25 = new Produit("KratosArme25","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit26 = new Produit("KratosArme26","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit27 = new Produit("KratosArme27","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit28 = new Produit("KratosArme28","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit29 = new Produit("KratosArme29","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit30 = new Produit("KratosArme30","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit31 = new Produit("KratosArme31","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit32 = new Produit("KratosArme32","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit33 = new Produit("KratosArme33","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit34 = new Produit("KratosArme34","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit35 = new Produit("KratosArme35","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");
        let produit36 = new Produit("KratosArme36","333333La grande et majestueuse arme de Kratos",5,Main.SRC_FICHIER+"kratos.jpg");


        let catalogue = new Catalogue();
        catalogue.addProduit(produit1);
        catalogue.addProduit(produit2);
        catalogue.addProduit(produit3);
        catalogue.addProduit(produit4);
        catalogue.addProduit(produit5);
        catalogue.addProduit(produit6);
        catalogue.addProduit(produit7);
        catalogue.addProduit(produit8);
        catalogue.addProduit(produit9);
        catalogue.addProduit(produit10);
        catalogue.addProduit(produit11);
        catalogue.addProduit(produit12);
        catalogue.addProduit(produit13);
        catalogue.addProduit(produit14);
        catalogue.addProduit(produit15);
        catalogue.addProduit(produit16);
        catalogue.addProduit(produit17);
        catalogue.addProduit(produit18);
        catalogue.addProduit(produit19);
        catalogue.addProduit(produit20);
        catalogue.addProduit(produit21);
        catalogue.addProduit(produit22);
        catalogue.addProduit(produit22);
        catalogue.addProduit(produit23);
        catalogue.addProduit(produit24);
        catalogue.addProduit(produit25);
        catalogue.addProduit(produit26);
        catalogue.addProduit(produit27);
        catalogue.addProduit(produit28);
        catalogue.addProduit(produit29);
        catalogue.addProduit(produit30);
        catalogue.addProduit(produit31);
        catalogue.addProduit(produit32);
        catalogue.addProduit(produit33);
        catalogue.addProduit(produit34);
        catalogue.addProduit(produit35);
        catalogue.addProduit(produit36);
        return catalogue;
    }
}