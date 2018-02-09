
import {ConnexionController} from "../Controllers/ConnexionController";
import {Main} from "../index";
import {CatalogueController} from "../Controllers/CatalogueController";

export class ConnexionView{

    private controller : ConnexionController;


    constructor() {

    }

    public init(){
        let affichageFinalCatalogue : string = "";

            affichageFinalCatalogue+=
                '<input id ="idUser" type="text" placeholder="Identifiant"><br>' +
                '<input id="mdpUser" type="password" placeholder="Mot de passe"><br>' +
                '<button id="connexionUser" type="button" class="btn btn-dark" >Connexion</button>';

            document.getElementById(Main.ID_MAIN_DIV).innerHTML = affichageFinalCatalogue;

            document.getElementById("connexionUser").addEventListener("click",(e:Event)=>this.controller.connexion(
                (<HTMLInputElement>document.getElementById("idUser")).value
                ,(<HTMLInputElement>document.getElementById("mdpUser")).value
            ));


    }

    public setController(controller : ConnexionController,main : Main) {
        this.controller=controller;
        controller.setMain(main);
    }
}