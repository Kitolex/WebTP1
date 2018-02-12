import {Produit} from "./Produit";
import {Main} from "../index";

/**
 * Cette classe est le modèle d'un catalogue
 */
export class Catalogue{

    /**
     * liste des produits du catalogue
     */
    private _produitList : Array<Produit> ;
    /**
     * nombre de caractère maximun pour la description de l'objet en mode aperçu
     */
    public readonly MAX_CHAR_DESCRIPTION :number = 40;


    /**
     * Constructeur de la classe Catalogue
     */
    constructor() {
            this._produitList = new Array<Produit>();//on instancie la liste
    }

    /**
     * Cette méthode permet d'ajouter un produit au catalogue
     * @param {Produit} produit
     *  produit à ajouter
     */
    public addProduit(produit : Produit){
        this._produitList.push(produit); //on ajoute le produit
    }

    /**
     * Getter de la liste de produit du catalogue
     * @returns {Array<Produit>}
     *  liste de produit du catalogue
     */
    get produitList(): Array<Produit> {
        return this._produitList;
    }

    /**
     * Cette méthode permet de récupérer un produit à un indice précis
     * @param {number} indice
     *  indice du produit à récupérer dans la liste
     * @returns {Produit}
     *  porduit récupérer
     */
    public getProduit(indice : number) :Produit{
        return this._produitList[indice];
    }

    /**
     * Setter de la liste de produit du catalogue
     * @param {Array<Produit>} value
     */
    set produitList(value: Array<Produit>) {
        this._produitList = value;
    }

    /**
     * Cette méthode static permet de générer un catalogue de test
     * @returns {Catalogue}
     *  un catalogue
     */
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

    /**
     * Cette méthode permet de supprimer un produit du catalogue
     * @param {Produit} produit
     */
    deleteProduit(produit: Produit) {
        this.produitList=this.produitList.filter(item => item.nom!=produit.nom);//on supprime le produit
    }
}