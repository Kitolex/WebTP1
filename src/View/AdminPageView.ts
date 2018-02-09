import {AdminPageController} from "../Controllers/AdminPageController";
import {Main} from "../index";
import {ConnexionController} from "../Controllers/ConnexionController";
import {Catalogue} from "../Models/Catalogue";

export class AdminPageView{

    private controller : AdminPageController;
    private catalogue : Catalogue;


    constructor(catalogue: Catalogue) {
        this.catalogue = catalogue;
    }

    public init(page :number){
        let affichageFinalCatalogue :string ="";

        let sizeCatalogue = this.catalogue.produitList.length;
        let indiceDebutCatalogue =(page-1)*10;
        let indiceFinCatalogue =Math.min(sizeCatalogue,10*page);


        for(let i :number =indiceDebutCatalogue ;i<indiceFinCatalogue;i++){
            affichageFinalCatalogue +=
                '<div class="container">'+
                '<div class="row" style="background-color:lavender;">'+
                '<div class="col-xs-9" >'+
                '<img src="'+this.catalogue.getProduit(i).srcImage+'" class="img-responsive">'+
                '</div>'+
                '<div class="col">'+
                '<div class="well" class="float-right">'+
                '<h5>'+this.catalogue.getProduit(i).nom+'</h5>'+
                '<h6 class="descri arme">'+this.catalogue.getProduit(i).description.slice(0,this.catalogue.MAX_CHAR_DESCRIPTION)+'...</h6>'+
                '<h5>'+this.catalogue.getProduit(i).prix+' $</h5> ' +
                '<button id="update'+this.catalogue.getProduit(i).nom+'">Modifier</button>'+
                '<button id="delete'+this.catalogue.getProduit(i).nom+'">Supprimer</button>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>';

        }


        affichageFinalCatalogue += '<div class="text-center">'+
            '<div class="btn-group">'+
            '<button type="button" class="btn btn-dark" id="DebutButton"><<</button>'+
            '<button type="button" class="btn btn-dark" id="PrecedentButton"><</button>';

        for(let i :number =2 ;i>0;i--){
            if(page>i){
                affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="-'+i+'Page">'+(page - i)+'</button>';
            }
        }
        affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="pageActuel">'+page+'</button>';
        for(let i :number =1 ;i<3;i++){
            if(sizeCatalogue>page*10+(10*(i-1))){
                affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="+'+i+'Page">'+(page + i)+'</button>';
            }
        }
        affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="SuivantButton">></button>';
        affichageFinalCatalogue += '<button type="button" class="btn btn-dark" id="FinButton">>></button>';

        affichageFinalCatalogue += '</div></div>';



        document.getElementById(Main.ID_MAIN_DIV).innerHTML = affichageFinalCatalogue;

        for(let i :number =indiceDebutCatalogue ;i<indiceFinCatalogue;i++){
            document.getElementById("update"+this.catalogue.getProduit(i).nom).addEventListener("click", (e:Event) =>this.controller.modifierProduit(this.catalogue.getProduit(i)));
            document.getElementById("delete"+this.catalogue.getProduit(i).nom).addEventListener("click", (e:Event) =>this.controller.supprimerProduit(this.catalogue.getProduit(i),page));
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


    public setController(controller : AdminPageController,main : Main) {
        this.controller=controller;
        controller.setMain(main);
    }
}