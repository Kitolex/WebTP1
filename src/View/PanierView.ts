import {Main} from "../index";
import {PanierController} from "../Controllers/PanierController";
import {Panier} from "../Models/Panier";
import {Produit} from "../Models/Produit";

/**
 * Class qui permet de gérer la vue de l'affichage du panier, du coût et taxes
 */
export class PanierView{


    /**
     * Controller de la vue
     */
    private controller : PanierController;
    /**
     * Panier à afficher
     */
    private panier : Panier;

    /**
     * Constructeur de la classe
     * @param {Panier} panier
     *  panier à utiliser pour la vue
     */
    constructor(panier : Panier) {
        this.panier=panier;
    }

    /**
     * Fonction appellé par main qui permet d'afficher le panier
     */
    public init(){




        //-----------------Génération HTML---------------

        //variable pour afficher le panier
        let affichagePanierFinal :string ="";

        affichagePanierFinal +=
            '<div class="container">'+
            '<div class="row"  style="background-color:lavender;">';
        //affichage de chaque produit dans le panier
        this.panier.produitList.forEach(function (value, key, map) {
            affichagePanierFinal +=
                        '<table id="Liste panier">'+
                            '<tr>'+
                                '<th id="th-tabl-img">Image produit</th>'+
                                '<th>Nom produit</th>'+
                                '<th>Prix Unité</th>'+
                                '<th>Nombre</th>'+
                            '</tr>'+
                            '<tr>'+
                                '<td id="tabl-img"><img class="img-tableau" src="'+ key.srcImage+'"></td>'+
                                '<td><p id="nom'+key.nom+'" >'+key.nom +'</p></td>'+
                                '<td><p>'+key.description.slice(0,30)+'...</p></td>'+
                                '<td>'+
                                    '<div class="btn-group btn-group-nombre">'+
                                        '<input type="text" class="form-control usr-panier" id="nombre'+key.nom+'" value="'+value +'">'+
                                    '</div>'+
                                    '<div class="btn-group">'+
                                        '<button type="button" class="btn btn-dark button-panier" id="enlever'+key.nom+'">-</button>'+
                                        '<button type="button" class="btn btn-dark bouton-panier-nombrebutton-panier2" id="ajouter'+key.nom+'">+</button>'+
                                    '</div>'+
                                '</td>'+
                            '</tr>'+
                        '</table>'

            });

        affichagePanierFinal+=
                        '<table class="taxe-panier-petit">'+
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

        affichagePanierFinal+=
                            '<div class="container">'+
                                '<button id="acheter" type="button" class="btn btn-primary btn-sm">Acheter le panier</button>'+ //bouton pour acheter le panier
                            '</div>';

        affichagePanierFinal +='</div></div>';


        document.getElementById(Main.ID_MAIN_DIV).innerHTML=affichagePanierFinal;//applique html à la main div


        //-------------événement--------//

        //Pour chaque produit on applique des évenements pour gérer leur nombre
        this.panier.produitList.forEach((value, key, map) => {

            //nombre de produit qu'on peut modifier à la main ce qui lance la fonction changeNumberProduit
            document.getElementById("nombre"+key.nom).addEventListener("input",(e:Event)=>this.changeNumberProduit(key,//produit
                Number.parseInt((<HTMLInputElement>document.getElementById("nombre"+key.nom)).value)//nombre de produit
            ));

            //boutton qui permet de décrémenter le nombre de produit en lançant la fonction removeNumberProduit
            document.getElementById("enlever"+key.nom).addEventListener("click",(e:Event)=>this.removeNumberProduit(key));

            //boutton qui permet d'incrémenter le nombre de produit en lançant la fonction addNumberProduit
            document.getElementById("ajouter"+key.nom).addEventListener("click",(e:Event) => this.addNumberProduit(key));
        });

        //boutton acheter qui lance la fonction acheter du controller
        document.getElementById("acheter").addEventListener("click",(e:Event) => this.controller.acheter());



    }




    public setController(controller : PanierController, main :Main){
        this.controller=controller;
        controller.setMain(main);
    }

    /**
     * Méthode qui permet de changer le nombre de produit dans le panier (et visuellement)
     * @param {Produit} produit
     *  produit où son nombre à changer
     * @param {number} number
     *  nouveaux nombre du produit présent dans le panier
     */
    private changeNumberProduit(produit : Produit,number : number){
        if(number>0 && number<=999){// on peut uniquement mettre un nombre positif
            this.controller.changeNumberProduit(produit,number);//fonction pour changer le nombre de produit
            this.initPrix();//réinitialle les prix par rapport aux modification précédente
        }else if (number==0){ //si 0 on propose de l'enlever
            if(confirm("Cet action entrainera la supression de ce produit de votre panier.\nEn êtes vous sûr?")){
                this.controller.deleteProduit(produit);
                if(this.panier.produitList.size==0){
                    this.controller.retouraccueil();
                }else{
                    this.init();
                }

            }
        }else{//en cas de chiffre négatif ou supérieur à 999 on remet à 1
            alert("Chiffre entre 1 et 999");
            (<HTMLInputElement>document.getElementById("nombre"+produit.nom)).value=1+"";
        }

    }

    /**
     * Méthode qui permet d'ajoute un au nombre du produit
     * @param {Produit} key
     *  produti à incrémenter en nombre
     */
    private addNumberProduit(key: Produit) {
        let input : HTMLInputElement= (<HTMLInputElement> document.getElementById("nombre"+key.nom)); //on récupère l'input du nombre de produit
        if(Number.parseInt(input.value)<999){//on met un maximun de 999 produit identique
            input.value=(Number.parseInt(input.value)+1)+"";//on incrémente le nombre visuellement
            this.controller.addProduit(key);
            this.initPrix();//réinitialle les prix par rapport aux modification précédente
        }else{
            alert("Vous en avez peut être déja assez non ?") //message qui s'affiche si on dépasse la limite
        }

    }

    /**
     * Méthode qui permet de décrémenter le nombre du produit
     * @param {Produit} key
     *  produti à incrémenter en nombre
     */
    private removeNumberProduit(key: Produit) {
        let input : HTMLInputElement= (<HTMLInputElement> document.getElementById("nombre"+key.nom));//on récupère l'input du nombre de produit
        if(Number.parseInt(input.value)> 1){//tant que le nombre d'occurende du produit est supérieur à 1
            input.value=(Number.parseInt(input.value)-1)+""; //on décrémente le nombre visuellement
            this.controller.deleteProduits(key);
        }else{//si on atteint 0 on propose de suprimmer le produit si non on laisse à 1
            if(confirm("Cet action entrainera la supression de ce produit de votre panier.\nEn êtes vous sûr?")){
                this.controller.deleteProduit(key);
                if(this.panier.produitList.size==0){
                    this.controller.retouraccueil();
                }else {
                    this.init();
                }
            }
        }
        if(this.panier.produitList.size!=0) {
            this.initPrix();//réinitialle les prix par rapport aux modification précédente
        }
    }

    /**
     * Méthode qui permet de gérer la réinitialisation du prix à chaque modification du panier
     */
    private initPrix(){
        (<HTMLParagraphElement>document.getElementById("prixTotalHT")).textContent=this.panier.getPrixTotalHT()+''; //on recalcule le prix HT
        (<HTMLParagraphElement>document.getElementById("ajoutTaxe")).textContent=(this.panier.getPrixTotalTTC()-this.panier.getPrixTotalHT())+'';//on recalcule le cout des taxes
        (<HTMLParagraphElement>document.getElementById("prixTotalTTC")).textContent=''+(this.panier.getPrixTotalTTC()+Main.COUT_LIVRAISON);//on recalcule le prix total avec la livraison
    }
}