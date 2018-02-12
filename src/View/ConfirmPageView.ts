
import {Main} from "../index";
import {ConfirmPageController} from "../Controllers/ConfirmPageController";
import {Panier} from "../Models/Panier";

/**
 * Class qui permet de gérer la vue de la confirmation d'achat du panier
 */
export class ConfirmPageView{
    /**
     * Controlleur de la vue
     */
    private controller : ConfirmPageController;

    private panier :Panier;

    /**
     * boolean pour savoir si la transaction a réussi ou non
     */
    private reussite : boolean;

    /**
     * Constructeur de la classe
     * @param {boolean} reussite
     *  booléan pour savoir si la transaction est réussite ou non
     */
    constructor(reussite : boolean,panier :Panier) {
        this.reussite=reussite;
        this.panier=panier;
    }

    /**
     * Fonction appellé par main qui permet d'afficher la confirmation d'achat
     */
    public init(){


        //-----------------Génération HTML---------------

        // variable pour afficher  la confirmation d'achat
        let affichageConfirmationFinal : string = "";

        if(this.reussite){//si achat réussi
            affichageConfirmationFinal+=
                '<div class="container">'+
                    '<div class="row"  style="background-color:lavender;">'+
                        '<div class="well" class="float-left">'+
                            '<div class="col-xs-2">'+
                                '<h6 class="Transaction"> ID Transaction : <br> <span id="ID-Trans">'+ this.getIdTransaction() +'</span></h6>'+
                                '<p class="Date1"> Date et heure de la transaction : <br> <span id="ID-Trans">'+this.getDate()+'</span></p>'+
                            '</div>'+
                            '<table class="tabl-centre">'+
                                '<tr>'+
                                    '<th>Nom produit</th>' +
                                    '<th>Nombre</th>' +
                                    '<th>Prix total du produit</th>' +
                                '</tr>' ;
            this.panier.produitList.forEach(function (value, key, map) {
                affichageConfirmationFinal+=

                    '<tr>' +
                        '<td>'+key.nom+'</td>' +
                        '<td>'+value+'</td>' +
                        '<td>'+(key.prix*value)+'</td>' +
                    '</tr>';
            })

            affichageConfirmationFinal+=
                '<table class="taxe-panier-petit tabl-centre">'+
                '<tr>'+
                '<th class="th-taxe">Hors taxe</th>'+
                '<td class="td-taxe-vide">:</td>'+
                '<td class="td-taxe" id="prixTotalHT">'+this.panier.getPrixTotalHT()+'</td>'+ //affichage du prix Hors Taxe
                '</tr>'+
                '<tr>'+
                '<th class="th-taxe">Taxe</th>'+
                '<td class="td-taxe-vide">:</td>'+
                '<td class="td-taxe" id="ajoutTaxe">'+(this.panier.getPrixTotalTTC()-this.panier.getPrixTotalHT())+'</td>'+ //affichage des Taxes
                '</tr>'+
                '<tr>'+
                '<th class="th-taxe">Livraison</th>'+
                '<td class="td-taxe-vide">:</td>'+
                '<td class="td-taxe" id="livraison">'+Main.COUT_LIVRAISON+'</td>'+ //affichage du cout de livraison
                '</tr>'+
                '<tr>'+
                '<th class="th-taxe">Prix final</th>'+
                '<td class="td-taxe-vide">:</td>'+
                '<td class="td-taxe" id="prixTotalTTC">'+(this.panier.getPrixTotalTTC()+Main.COUT_LIVRAISON)+'</td>'+ //affichage du côut total
                '</tr>'+
                '</table>';
        }else{
            affichageConfirmationFinal=
                '<div class="container">'+
                    '<div class="row"  style="background-color:lavender;">'+
                        '<div class="well" class="float-left">'+
                            '<div class="col-xs-2">'+
                                '<p> Le payement a été refusé pour cause de <span class="raison-pas-payement">pane technique suite au renfersement de café de la part du stagiaire</span></p>'+
                                '<p>Vous pouvez retourner à la poutique</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';
        }


        document.getElementById(Main.ID_MAIN_DIV).innerHTML=affichageConfirmationFinal
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

    private getDate() : string{
        let date : Date = new Date();
        return date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+"  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    }
}