import {Main} from "../index";
import {CreateProduitController} from "../Controllers/CreateProduitController";

/**
 * Class qui permet de gérer la vue pour la création d'un produit
 */
export class CreateProduitView{

    /**
     * Controlleur de la vue
     */
    private controller : CreateProduitController;

    /**
     * Fonction appellé par main qui permet d'afficher la création du produit
     */
    public init(){

        //-----------------Génération HTML---------------

        // variable pour afficher le formulaire pour créer le produit

        let affichageCreateProduitFinal =
            '<div class="container">'+
                '<div class="row"  style="background-color:lavender;">'+
                    '<div class="col-xs-9" >'+
                        '<p id="imageSRC"></p>'+
                    '</div>'+
                    '<div class="col">'+
                        '<div class="well" class="float-right">'+
                            '<div class="text">'+
                                '<h5>Titre de l\'arme :</h5>' +
                                '<input class="form-control fc1" rows="1" id="titre" >'+
                                '<h5>Description de l\'arme :</h5>' +
                                '<textarea class="form-control fc2" id="description" rows="4" cols="50"></textarea>'+
                                '<h5>Prix de l\'arme :</h5>' +
                                '<input class="form-control fc4" rows="1" id="prix">'+
                                '<h5>Valeur de la taxe :</h5>' +
                                '<input class="form-control fc5" rows="1" id="taxe" value="30">'+
                                '<button class="btn btn-primary btn-sm" id="createProduit">Créer le produit</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>';

        document.getElementById(Main.ID_MAIN_DIV).innerHTML = affichageCreateProduitFinal;// on applique html à la main div

        //-------------événement--------//

        //évennement sur le boutton créer le produit qui lance la fonction createProduit du controlleur
        document.getElementById("createProduit").addEventListener("click",(e:Event)=> this.controller.createProduit(
            (<HTMLInputElement>document.getElementById("titre")).value,//titre du produit
            (<HTMLInputElement>document.getElementById("description")).value,//description du produit
            (<HTMLInputElement>document.getElementById("prix")).value,//prix du produit
            (<HTMLInputElement>document.getElementById("taxe")).value,//taxe du produit
        ))
    }

    setController(controller: CreateProduitController, main: Main) {
        this.controller=controller;
        this.controller.setMain(main);
    }

}