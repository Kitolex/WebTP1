import {Catalogue} from "../Models/Catalogue";
import {CatalogueController} from "../Controllers/CatalogueController";
import {Main} from "../index";
import {User} from "../Models/User";
import {Produit} from "../Models/Produit";

/**
 * Class qui permet de gérer la vue de l'affichage du catalogue et coût
 */
export class CatalogueView{

    /**
     * catalogue à afficher
     */
    private catalogue : Catalogue;
    /**
     * controller de la vue
     */
    private controller : CatalogueController;


    /**
     *  Constructeur de la classe
     * @param {Catalogue} catalogue
     *  catalogue à afficher
     */
    constructor(catalogue: Catalogue) {
        this.catalogue = catalogue;
    }

    /**
     * Fonction appellé par main qui permet d'afficher le catalogue
     * @param {number} page
     */
    public init(page :number){


        //-----------------Génération HTML---------------

        //variable pour afficher le catalogue
        let affichageCatalogueFinal :string ="";

        let sizeCatalogue = this.catalogue.produitList.length;//taille du catalogue
        let indiceDebutCatalogue =(page-1)*10;//indice de début de la liste du catalogue
        let indiceFinCatalogue =Math.min(sizeCatalogue,10*page);//indice de fin de la liste du catalogue


        //affichage de chaque produit du catalogue
        for(let i :number =indiceDebutCatalogue ;i<indiceFinCatalogue;i++){
            affichageCatalogueFinal +=
                '<div class="container">'+
                    '<div class="row" style="background-color:lavender;">'+
                        '<div class="col-xs-9" >'+
                            '<img src="'+this.catalogue.getProduit(i).srcImage+'" class="img-responsive">'+
                        '</div>'+
                        '<div class="col">'+
                            '<div class="well" class="float-right">'+
                                '<h5>'+this.catalogue.getProduit(i).nom+'</h5>'+
                                '<h6 class="descri arme">'+this.catalogue.getProduit(i).description.slice(0,this.catalogue.MAX_CHAR_DESCRIPTION)+'...</h6>'+
                                '<button id ="description'+this.catalogue.getProduit(i).nom+'" type="button" class="btn btn-link"> En savoir plus</button>'+
                                '<h5>'+this.catalogue.getProduit(i).prix+' $</h5> ' ;
                                if(this.controller.existProduitPanier(this.catalogue.getProduit(i))){
                                    affichageCatalogueFinal+= this.controller.setNbPanier(this.catalogue.getProduit(i));

                                }else{
                                    affichageCatalogueFinal+='<button id="panier'+this.catalogue.getProduit(i).nom+'" type="button" class="btn btn-primary btn-sm">Ajouter au Panier</button>';
                                }

            affichageCatalogueFinal += '<h5 id="panierNombre'+this.catalogue.getProduit(i).nom+'"></h5> ' +
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';

        }

        //--Boutton catalgue--


        affichageCatalogueFinal += '<div class="text-center">'+
                                        '<div class="btn-group">'+
                                            '<button type="button" class="btn btn-dark" id="DebutButton"><<</button>'+   // boutton pour revenir au début
                                            '<button type="button" class="btn btn-dark" id="PrecedentButton"><</button>';// boutton pour aller à la page précédente

        //on met si besoin le boutton pour aller sur les 2 pages précédentes
        for(let i :number =2 ;i>0;i--){
            if(page>i){
                affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="-'+i+'Page">'+(page - i)+'</button>';
            }
        }

        //boutton pour la page actuel (inutilisable)
        affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="pageActuel">'+page+'</button>';

        //boutton si possibilité pour aller sur les 2 pages suivantes
        for(let i :number =1 ;i<3;i++){
            if(sizeCatalogue>page*10+(10*(i-1))){
                affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="+'+i+'Page">'+(page + i)+'</button>';
            }
        }

        //boutton pour aller sur la page suivantes
        affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="SuivantButton">></button>';
        //boutton pour aller sur la dernière page
        affichageCatalogueFinal += '<button type="button" class="btn btn-dark" id="FinButton">>></button>';

        affichageCatalogueFinal += '</div></div>';//fermer les div des bouttons



        document.getElementById(Main.ID_MAIN_DIV).innerHTML = affichageCatalogueFinal; // on applique le html

        //pour chaque porduit on met un evenement pour l'ajouter au panier et voir la description
        for(let i :number =indiceDebutCatalogue ;i<indiceFinCatalogue;i++){
            document.getElementById("panier"+this.catalogue.getProduit(i).nom).addEventListener("click", (e:Event) => this.controller.buttonAddPanier(this.catalogue.getProduit(i), (<HTMLParagraphElement>document.getElementById("panier" + this.catalogue.getProduit(i).nom))));
            document.getElementById("description"+this.catalogue.getProduit(i).nom).addEventListener("click", (e:Event) =>this.controller.buttonDescriptionDetaille(this.catalogue.getProduit(i)));
            document.getElementById("panierNombre"+this.catalogue.getProduit(i).nom).setAttribute("visible","false");// on désactive le boutton de la page actuel
        }


        //si page 1 on disable le bouton du début et précédent
        if(page==1){
            document.getElementById("DebutButton").setAttribute("disabled","true");
            document.getElementById("PrecedentButton").setAttribute("disabled","true");
        }else{//sinon on leur met l'évenement de relancer la fonction init en changeant de page
            document.getElementById("DebutButton").addEventListener("click", (e:Event) =>this.init(1));
            document.getElementById("PrecedentButton").addEventListener("click", (e:Event) =>this.init(page-1));
        }

        //si on est a la dernière page on disable le boutton suivant et fin
        if(sizeCatalogue<page*10){
            document.getElementById("SuivantButton").setAttribute("disabled","true");
            document.getElementById("FinButton").setAttribute("disabled","true");
        }else{//sinon on leur met l'évenement de relancer la fonction init en changeant de page
            document.getElementById("SuivantButton").addEventListener("click", (e:Event) =>this.init(page+1));

            document.getElementById("FinButton").addEventListener("click", (e:Event) =>this.init((10+sizeCatalogue-(sizeCatalogue%10))/10));
        }

        //on met l'évenement si possibilité pour atteindre les 2 page précédentes en relançant init
        for(let i :number =2 ;i>0;i--){
            if(page>i){
                document.getElementById("-"+i+"Page").addEventListener("click", (e:Event) =>this.init(page-i));
            }
        }
        //on met l'évenement si possibilité pour atteindre les 2 page suivantes en relançant init
        for(let i :number =1 ;i<3;i++){
            if(sizeCatalogue>page*10+(10*(i-1))){
                document.getElementById("+"+i+"Page").addEventListener("click", (e:Event) =>this.init(page+i));
            }
        }

        document.getElementById("pageActuel").setAttribute("disabled","true");// on désactive le boutton de la page actuel

    }


    public setController(controller : CatalogueController,main : Main) {
        this.controller=controller;
        controller.setMain(main);
    }

}