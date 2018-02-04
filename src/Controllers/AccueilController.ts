import {Catalogue} from "../Models/Catalogue";
import {Produit} from "../Models/Produit";

export class AccueilController{

    private _catalogue : Catalogue;
    private  readonly ID_CATALOGUE_HTML : string = "main";
    private  readonly  MAX_CHAR_DESCRIPTION : number = 30;

    constructor(catalogue : Catalogue) {
        this._catalogue=catalogue;

    }


    get catalogue(): Catalogue {
        return this._catalogue;
    }

    set catalogue(value: Catalogue) {
        this._catalogue = value;
    }



    public init(){
        let affichageProduitsFinal :string ="";
        for(let produit of this._catalogue.produitList){
            affichageProduitsFinal += '<img src="'+ produit.srcImage+'"> '+
                                        '<p>'+produit.nom +'</p> '+
                                        '<p>'+produit.description.slice(0,this.MAX_CHAR_DESCRIPTION)+'...</p>'+
                                        '<button id="panier'+produit.nom+'">Try it</button><br>';

        }

        document.getElementById(this.ID_CATALOGUE_HTML).innerHTML += affichageProduitsFinal;

        for(let produit of this._catalogue.produitList){
            document.getElementById("panier"+produit.nom).addEventListener("click", function () {
                console.log(produit.nom);
            });
        }
    }
}