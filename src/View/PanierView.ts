import {Main} from "../index";
import {PanierController} from "../Controllers/PanierController";
import {Panier} from "../Models/Panier";
import {Produit} from "../Models/Produit";


export class PanierView{



    private controller : PanierController;
    private panier : Panier;

    constructor(panier : Panier) {
        this.panier=panier;
    }


    public init(){


        let affichageProduitsFinal :string ="";



        this.panier.produitList.forEach(function (value, key, map) {
            affichageProduitsFinal += '<img src="'+ key.srcImage+'"> '+
                '<p id="nom'+key.nom+'" >'+key.nom +'</p> '+
                '<p>'+key.description.slice(0,30)+'...</p>'+
                '<button id="enlever'+key.nom+'">-</button><br>'+
                '<input id="nombre'+key.nom+'" value="'+value +'"><br>'+
                '<button id="ajouter'+key.nom+'">+</button><br>';
        });

        affichageProduitsFinal+='<p>'+this.panier.getPrixTotalHT()+'</p>';
        affichageProduitsFinal+='<p>'+(this.panier.getPrixTotalTTC()-this.panier.getPrixTotalHT())+'</p>';
        affichageProduitsFinal+='<p>cout de livraison</p>';
        affichageProduitsFinal+='<p>'+this.panier.getPrixTotalTTC()+'</p>';

        affichageProduitsFinal+='<button id="acheter">Acheter</button>';


        document.getElementById(Main.ID_MAIN_DIV).innerHTML=affichageProduitsFinal;


        this.panier.produitList.forEach((value, key, map) => {
            document.getElementById("nombre"+key.nom).addEventListener("input",(e:Event)=>this.controller.changeNumberProduit(key,
                Number.parseInt((<HTMLInputElement>document.getElementById("nombre"+key.nom)).value)
            ));

            document.getElementById("enlever"+key.nom).addEventListener("click",(e:Event)=>this.removeNumberProduit(key));

            document.getElementById("ajouter"+key.nom).addEventListener("click",(e:Event) => this.addNumberProduit(key));
        });

        document.getElementById("acheter").addEventListener("click",(e:Event) => this.controller.acheter());

    }




    public setController(controller : PanierController, main :Main){
        this.controller=controller;
        controller.setMain(main);
    }

    private addNumberProduit(key: Produit) {
        let input : HTMLInputElement= (<HTMLInputElement> document.getElementById("nombre"+key.nom));
        if(Number.parseInt(input.value)<999){
            input.value=(Number.parseInt(input.value)+1)+"";
            this.panier.addProduit(key);
        }else{
            alert("Vous en avez peut être déja assez non ?")
        }

    }

    private removeNumberProduit(key: Produit) {
        let input : HTMLInputElement= (<HTMLInputElement> document.getElementById("nombre"+key.nom));
        if(Number.parseInt(input.value)> 1){
            input.value=(Number.parseInt(input.value)-1)+"";
            this.panier.deleteProduits(key,1);
        }else{
            if(confirm("Cet action entrainera la supression de ce produit de votre panier.\nEn êtes vous sûr?")){
                this.panier.deleteProduit(key);
                this.init();
            }else{

            }
        }

    }
}