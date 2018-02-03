import {Produit} from "./Produit";

export class Panier{

    private _produitList : Map<Produit,number> ;


    constructor() {
        this._produitList = new Map<Produit, number>();
    }




    public addProduits(produit : Produit,nombre? :number){
        if(this._produitList.has(produit)){
            this._produitList.set(produit, this._produitList.get(produit)+ nombre);
        }else{
            this._produitList.set(produit,1);
        }
    }

    public addProduit(produit : Produit){
        this.addProduits(produit,1);
    }

    public deleteProduits(produit : Produit,nombre :number){
        if(this._produitList.has(produit)){
            if(this._produitList.get(produit)<=nombre){
                this._produitList.delete(produit);
            }else{
                this._produitList.set(produit, this._produitList.get(produit)-nombre);
            }
        }else{
            throw new Error("Article inexistant dans le panier");
        }
    }

    public deleteProduit(produit : Produit){
        this.deleteProduits(produit,this._produitList.get(produit));
    }


    get produitList(): Map<Produit, number> {
        return this._produitList;
    }

    public supprimerPanier(){
        this._produitList.clear();
    }
}