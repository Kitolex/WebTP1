import {Catalogue} from "../Models/Catalogue";
import {CatalogueController} from "../Controllers/CatalogueController";
import {Main} from "../index";

export class CatalogueView{

    private catalogue : Catalogue;
    private controller : CatalogueController;



    constructor(catalogue: Catalogue) {
        this.catalogue = catalogue;
    }

    public init(page :number){

        console.log(page);

        let affichageProduitsFinal :string ="";

        let sizeCatalogue = this.catalogue.produitList.length;
        let indiceDebutCatalogue =(page-1)*10;
        let indiceFinCatalogue =Math.min(sizeCatalogue,10*page);


        for(let i :number =indiceDebutCatalogue ;i<indiceFinCatalogue;i++){
            affichageProduitsFinal += '<img src="'+ this.catalogue.getProduit(i).srcImage+'"> '+
                '<p id="nom'+this.catalogue.getProduit(i).nom+'">'+this.catalogue.getProduit(i).nom +'</p> '+
                '<p>'+this.catalogue.getProduit(i).description.slice(0,this.catalogue.MAX_CHAR_DESCRIPTION)+'...</p>'+
                '<button id="panier'+this.catalogue.getProduit(i).nom+'">Try it</button><br>';
        }

        affichageProduitsFinal += '<button id="DebutButton"><<</button>';
        affichageProduitsFinal += '<button id="PrecedentButton"><</button>';


        for(let i :number =2 ;i>0;i--){
            if(page>i){
                affichageProduitsFinal += '<button id="-'+i+'Page">'+(page - i)+'</button>';
            }
        }
        affichageProduitsFinal += '<button id="pageActuel">'+page+'</button>';
        for(let i :number =1 ;i<3;i++){
            if(sizeCatalogue>page*10+(10*(i-1))){
                affichageProduitsFinal += '<button id="+'+i+'Page">'+(page + i)+'</button>';
            }
        }
        affichageProduitsFinal += '<button id="SuivantButton">></button>';
        affichageProduitsFinal += '<button id="FinButton">>></button>';





        document.getElementById(Main.ID_MAIN_DIV).innerHTML = affichageProduitsFinal;

        for(let i :number =indiceDebutCatalogue ;i<indiceFinCatalogue;i++){
            document.getElementById("panier"+this.catalogue.getProduit(i).nom).addEventListener("click", (e:Event) =>this.controller.buttonAddPanier(this.catalogue.getProduit(i)));
            document.getElementById("nom"+this.catalogue.getProduit(i).nom).addEventListener("click", (e:Event) =>this.controller.buttonDescriptionDetaille(this.catalogue.getProduit(i)));
        }

        if(page==1){
            document.getElementById("DebutButton").setAttribute("disabled","true");
            document.getElementById("PrecedentButton").setAttribute("disabled","true");
        }else{
            document.getElementById("DebutButton").addEventListener("click", (e:Event) =>this.init(1));
            document.getElementById("PrecedentButton").addEventListener("click", (e:Event) =>this.init(page-1));
        }

        if(sizeCatalogue<page*10){
            document.getElementById("SuivantButton").setAttribute("disabled","true");
            document.getElementById("FinButton").setAttribute("disabled","true");
        }else{
            document.getElementById("SuivantButton").addEventListener("click", (e:Event) =>this.init(page+1));

            document.getElementById("FinButton").addEventListener("click", (e:Event) =>this.init((10+sizeCatalogue-(sizeCatalogue%10))/10));
        }

        for(let i :number =2 ;i>0;i--){
            if(page>i){
                document.getElementById("-"+i+"Page").addEventListener("click", (e:Event) =>this.init(page-i));
            }
        }

        for(let i :number =1 ;i<3;i++){
            if(sizeCatalogue>page*10+(10*(i-1))){
                document.getElementById("+"+i+"Page").addEventListener("click", (e:Event) =>this.init(page+i));
            }
        }

        document.getElementById("pageActuel").setAttribute("disabled","true");
    }


    public setController(controller : CatalogueController,main : Main) {
        this.controller=controller;
        controller.setMain(main);
    }
}