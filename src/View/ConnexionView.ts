
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
            '<input id ="idUser" type="text" placeholder="Identifiant"><br>' +
            '<input id="mdpUser" type="password" placeholder="Mot de passe"><br>' +
            '<button id="connexionUser" type="button" class="btn btn-dark" >Connexion</button>';

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