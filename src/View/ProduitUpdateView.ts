import {Produit} from "../Models/Produit";
import {ProduitUpdateController} from "../Controllers/ProduitUpdateController";
import {Main} from "../index";

/**
 * Class qui permet de gérer la vue d'une modification de produit par un admin
 */
export class ProduitUpdtateView {

    /**
     * Produit à modifier
     */
    private produit :Produit;
    /**
     * Controller de la vue
     */
    private controller : ProduitUpdateController;

    /**
     * Constructeur de la classe ProduitUpdtateView
     * @param {Produit} produit
     *  le produit à modifier
     */
    constructor(produit: Produit) {
        this.produit = produit;
    }

    /**
     * Méthode qui permet de set up le controller pour la vue
     * @param {ProduitUpdateController} controller
     *  controller pour la vue
     * @param {Main} main
     *  la classe main est à rajouter dans la classe main afin de permettre au controller de modifier les infos principaux
     */
    setController(controller: ProduitUpdateController, main: Main) {
        this.controller=controller;
        this.controller.setMain(main);
    }

    /**
     * Fonction appellé par main qui permet d'afficher le produit à modifier et les différents éléments
     */
    init() {


        //-----------------Génération HTML---------------

        //affichage du produit à modifier
        let affichageProduitUpdateFinal =
            '<div class="container">'+
                '<div class="row"  style="background-color:lavender;">'+
                    '<div class="col-xs-9" >'+
                        '<img src="'+this.produit.srcImage+'" class="img-responsive img-decri-deta">'+
                    '</div>'+
                    '<div class="col">'+
                        '<div class="well" class="float-right">'+
                            '<div class="text">'+
                                '<h5>Titre de l\'arme :</h5>' +
                                '<input class="form-control fc1" rows="1" id="titre" value="'+this.produit.nom +'">'+
                                '<h5>Description de l\'arme :</h5>' +
                                '<textarea class="form-control fc2" rows="3" id="description" rows="4" cols="50">'+this.produit.description+'</textarea>'+
                                '<h5>Prix de l\'arme :</h5>' +
                                '<input class="form-control fc3" rows="1" id="prix" value="'+this.produit.prix +'">'+
                                '<button  id="modifier" type="button" class="btn btn-primary btn-sm">Modifer</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="text-center">'+
                '<div class="btn-group">'+
                    '<button id="retourCatalogue" type="button" class="btn btn-dark">Retour au catalogue</button>'+
                '</div>'+
            '</div>';


        document.getElementById(Main.ID_MAIN_DIV).innerHTML = affichageProduitUpdateFinal;//applique html à la main div


        //-------------événement--------//


        //évenement pour le boutton "modifier" qui appelle la fonction du controller qui modifie le produit
        document.getElementById("modifier").addEventListener("click", (e:Event) =>this.controller.updateProduit(
            (<HTMLInputElement>document.getElementById("titre")).value //titre du produit
            ,(<HTMLInputElement>document.getElementById("description")).value//description du produit
            ,(<HTMLInputElement>document.getElementById("prix")).value,//prix du produit
            this.produit
        ));

        //évenement pour le bouton "Retour au catalogue" qui appelle la fonction du controller qui renvoie à la page d'accueil
        document.getElementById("retourCatalogue").addEventListener("click", (e:Event) =>this.controller.retourAccueil());
    }
}