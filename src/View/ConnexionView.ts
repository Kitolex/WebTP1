
import {ConnexionController} from "../Controllers/ConnexionController";
import {Main} from "../index";
import {CatalogueController} from "../Controllers/CatalogueController";

/**
 * Class qui permet de gérer la vue pour la connexion
 */
export class ConnexionView{

    /**
     * Controller de la vue
     */
    private controller : ConnexionController;

    /**
     * Fonction appellé par main qui permet d'afficher le formulaire de connexion
     */
    public init(){

        //-----------------Génération HTML---------------

        // variable pour afficher  le formulaire de connexion
        let affichageFormulaireConnexionFinal : string = "";

        affichageFormulaireConnexionFinal+=
            '<div class="container">' +
                '<div class="row"  style="background-color:lavender;">' +
                    '<div class="well" class="float-center">' +
                        '<form>' +
                            '<div class="form-group">' +
                                '<h7>Nom d\'utilisateur :</h7>' +
                                '<input id ="idUser" type="text" placeholder="Identifiant" class="form-control">' +
                            '</div>' +
                            '<div class="form-group">' +
                                '<h7>Mot de passe :</h7>' +
                                '<input id="mdpUser" type="password" placeholder="Mot de passe" class="form-control">' +
                            '</div>' +
                        '</form>' +
                        '<button id="connexionUser" type="button" class="btn btn-primary btn-sm" >Connexion</button>' +
                    '</div>' +
                '</div>' +
            '</div>' ;
        document.getElementById(Main.ID_MAIN_DIV).innerHTML = affichageFormulaireConnexionFinal;// on applique html à la main div


        //-------------événement--------//


        //évenement du boutton de Connexion qui lance la fonction la connexion du controller
        document.getElementById("connexionUser").addEventListener("click",(e:Event)=>this.controller.connexion(
            (<HTMLInputElement>document.getElementById("idUser")).value //identifiant
            ,(<HTMLInputElement>document.getElementById("mdpUser")).value// mot de passe
        ));


    }

    public setController(controller : ConnexionController,main : Main) {
        this.controller=controller;
        controller.setMain(main);
    }
}