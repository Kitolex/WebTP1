
import {Main} from "../index";
import {ConfirmPageController} from "../Controllers/ConfirmPageController";

/**
 * Class qui permet de gérer la vue de la confirmation d'achat du panier
 */
export class ConfirmPageView{
    /**
     * Controlleur de la vue
     */
    private controller : ConfirmPageController;

    /**
     * boolean pour savoir si la transaction a réussi ou non
     */
    private reussite : boolean;

    /**
     * Constructeur de la classe
     * @param {boolean} reussite
     *  booléan pour savoir si la transaction est réussite ou non
     */
    constructor(reussite : boolean) {
        this.reussite=reussite;
    }

    /**
     * Fonction appellé par main qui permet d'afficher la confirmation d'achat
     */
    public init(){

        //-----------------Génération HTML---------------

        // variable pour afficher  la confirmation d'achat
        let affichageConfirmationFinal : string = "";

        if(this.reussite){//si achat réussi
            document.getElementById(Main.ID_MAIN_DIV).innerHTML='<p>reussite '+ this.getIdTransaction() +'</p>';
        }else{
            document.getElementById(Main.ID_MAIN_DIV).innerHTML='<p>pas réussite</p>';
        }
    }

    public setController(controller : ConfirmPageController, main :Main){
        this.controller=controller;
        controller.setMain(main);
    }

    /**
     * Permet de générer un id de transaction de format : LETTRE*5+CHIFFRE*10
     * @returns {string}
     */
    private getIdTransaction():string{

        let res : string="";

        for(let i =0 ;i<5;i++){//place les 5 lettres
            res+=String.fromCharCode(65  + this.getRandomNumber(26)); // on effectue un random avec 26 en max pour les lettres de l'alphabet
        }
        for(let i =0 ;i<10;i++){//place les 10 chiffres
            res+=this.getRandomNumber(9); // on effectue un random avec 9 au max
        }

        return res;
    }

    /**
     * Permet de générer un nombre aléatoire
     * @param {number} max
     *  Max à générer
     * @returns {number}
     *  nombre générer
     */
    private getRandomNumber(max :number): number{
        return Math.floor(Math.random()*max);
    }
}