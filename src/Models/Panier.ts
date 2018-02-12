import {Produit} from "./Produit";

/**
 * Cette classe est le modèle d'un panier
 */
export class Panier{

    /**
     * Map des produit contenu dans le panier avec le produit et son nombre d'occurence
     */
    private _produitList : Map<Produit,number> ;


    /**
     * Constructeur de la classe Panier
     */
    constructor() {
        this._produitList = new Map<Produit, number>();
    }


    /**
     * Fonction pour ajouter plusieurs fois le même produit dans le panier
     * @param {Produit} produit
     *  produit à ajouter au panier
     * @param {number} nombre
     *  nombre d'occurence du produit ajouter
     */
    public addProduits(produit : Produit,nombre :number){
        if(this._produitList.has(produit)){//on regarde si le produit est déja dans le panier
            this._produitList.set(produit, this._produitList.get(produit)+ nombre);//si oui on additionne juste le nombre d'occurence actuel du produit avec le nouveau nombre
        }else{//sinon on ajouter un nouveau produit en mettant la variable nombre comme nombre d'occurence
            this._produitList.set(produit,nombre);
        }

    }

    /**
     * Fonction pour ajouter un seul produit dans le panier
     * @param {Produit} produit
     *  produit à ajouter
     */
    public addProduit(produit : Produit){
        this.addProduits(produit,1);//on utilise la fonction addProduits() en mettant 1 comme argument pour le nombre
    }

    /**
     * Fonction pour supprimer plusieurs fois le même produit dans le panier
     * @param {Produit} produit
     *  produit à supprimer au panier
     * @param {number} nombre
     *  nombre d'occurence du produit supprimer
     */
    public deleteProduits(produit : Produit,nombre :number){
        if(this._produitList.has(produit)){//on regarde si le produit est déja dans le panier
            if(this._produitList.get(produit)<=nombre){//on regarde si le nombre actuel d'occurence du produit est inférieur à la valeur que l'on souhaite supprimer
                this._produitList.delete(produit); //si oui on peut directement supprimer le produit
            }else{
                this._produitList.set(produit, this._produitList.get(produit)-nombre); //sinon on soustrait les 2 valeurs
            }
        }else{//sinon on retourne une erreur
            throw new Error("Article inexistant dans le panier");
        }
    }

    /**
     * Fonction pour supprimer toute les occurences d'un produit dans le panier
     * @param {Produit} produit
     *  produit à supprimer
     */
    public deleteProduit(produit : Produit){
        this.deleteProduits(produit,this._produitList.get(produit)); //on utilise la méthode deleteProduit() en mettant en argument le nombre d'occurence du produit pour le nombre
    }

    /**
     * Getter de la liste du panier
     * @returns {Map<Produit, number>}
     *  map du panier
     */
    get produitList(): Map<Produit, number> {
        return this._produitList;
    }

    /**
     * Méthode qui permet de récupérer le prix Hors-Taxe du panier
     * @returns {number}
     *  prix hors-taxe du panier
     */
    public getPrixTotalHT() :number {
        let prix : number =0;

        this.produitList.forEach(function (value, key, map) {//on ajoute pour chaque produit son prix * son nombre d'occurence au total
            prix+=value*key.prix;
        })

        return prix;//on retourne le total
    }

    /**
     * Méthode qui permet de récupérer le prix Toute-Taxe-Comprise du panier
     * @returns {number}
     */
    public getPrixTotalTTC() :number {
        let prix : number =0;

        this.produitList.forEach(function (value, key, map) {//on ajoute ,au total, pour chaque produit son prix * son nombre d'occurence en ajoutant la taxe
            prix+=value*(key.prix*(1+key.taxe/100));
        })

        return prix;
    }

    /**
     * Cette méthode permet de vider le panier
     */
    public clear(){
        this.produitList.clear();//on vide le panier
    }

    /**
     *  Cette méthode permet de mettre un nombre bien préçis d'occurence pour un produit
     * @param {Produit} produit
     * @param {number} number
     */
    public setNumberProduit(produit: Produit, number: number) {
        if(this.produitList.has(produit)){//on vérifie qu'il est bien dans la liste avant d'effectuer l'opération
            this.produitList.set(produit,number);
        }
    }
}