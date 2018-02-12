
import {Catalogue} from "./Models/Catalogue";
import {CatalogueView} from "./View/CatalogueView";
import {Panier} from "./Models/Panier";
import {CatalogueController} from "./Controllers/CatalogueController";
import {DescriptionProduitView} from "./View/DescriptionProduitView";
import {Produit} from "./Models/Produit";
import {DescriptionProduitController} from "./Controllers/DescriptionProduitController";
import {PanierView} from "./View/PanierView";
import {PanierController} from "./Controllers/PanierController";
import {ConnexionView} from "./View/ConnexionView";
import {ConnexionController} from "./Controllers/ConnexionController";
import {User} from "./Models/User";
import {AdminPageController} from "./Controllers/AdminPageController";
import {AdminPageView} from "./View/AdminPageView";
import {ProduitUpdtateView} from "./View/ProduitUpdateView";
import {ProduitUpdateController} from "./Controllers/ProduitUpdateController";
import {ConfirmPageView} from "./View/ConfirmPageView";
import {ConfirmPageController} from "./Controllers/ConfirmPageController";
import {CreateProduitView} from "./View/CreateProduitView";
import {CreateProduitController} from "./Controllers/CreateProduitController";


/**
 * Appeler au lancement permet d'instancier la fonction main
 */
window.onload = () => {
    console.log("ONLOAD");
    let main = new Main();
    main.init();
};

/**
 * Cette classe est la classe principal du programme c'est celle qui contient les données importance au site et les fonctions pour afficher le contenu
 */
export class Main{

    /**
     * constante qui permet de récupérer l'emplacement des images de produit du site
     * @type {string}
     */
    static readonly SRC_FICHIER :string= "../res/imageProduit/";

    /**
     * constante qui permet de récupérer le nom de la div principal pour placer le contenu du site
     * @type {string}
     */
    static readonly ID_MAIN_DIV :string ="main";

    /**
     * constante qui permet de récupérer le nom de la div qui contient le nombre d'élement au panier
     * @type {string}
     */
    static readonly ID_PANIER_NUMBER_DIV :string ="numberProduitPanier";

    /**
     * constante qui permet de récupérer le prix de livraison du site
     * @type {number}
     */
    static readonly COUT_LIVRAISON :number =5;

    /**
     * catalogue complet du site
     */
    public catalogue : Catalogue;

    /**
     * Panier de l'utilisateur
     */
    public panier : Panier;

    /**
     * Utilisateur connecter
     * null si personne de connecter
     */
    public user : User;

    /**
     * list des users qui peuvent se connecter au site
     */
    public listUser : Array<User>;


    /**
     * Méthode qui permet d'initialiser les variable de la class ainsi que les événements de la barre de navigation
     */
    public init(){
        this.catalogue = Catalogue.init(); //on init le catalogue avec des produits pré-créer
        this.panier=new Panier(); // on initialise le catalogue

        this.listUser = new Array<User>();//on initialise la liste d'utilisateur
        this.listUser.push(new User("admin","admin"));//on créer l'utilisateur qui peut se connecter (Dans ce cas il n'y en as qu'un, mais au moins la liste est prête si besoin de modification pour prochaine TP


        document.getElementById("panier").addEventListener("click",(e:Event) => this.showPanier());//on créer l'événement du bouton panier
        document.getElementById("connexion").addEventListener("click",(e:Event) => this.buttonConnexion());//on créer l'évenement du bouton connexion
        document.getElementById("accueil").addEventListener("click",(e:Event) => this.showAccueil());//on créer l'évenement du bouton accueil

        this.showCatalogue();//on affiche le catalogue qui sert de page d'accueil du site
    }

    /**
     * Méthode qui permet d'afficher le catalogue
     */
    public showCatalogue(){
        let catalogueView = new CatalogueView(this.catalogue);//on initialise la vue du catalogue
        catalogueView.setController(new CatalogueController(),this);//on set le controller de la vue
        catalogueView.init(1);//on affiche le contenu de la page
    }


    /**
     * Méthode qui permet d'afficher la description détaillé du produit
     * @param {Produit} produit
     *  produit que l'on veut voir sa description détaillé
     */
    public showDescription(produit : Produit){
        let descriptionView = new DescriptionProduitView(produit);//on initialise la vue de la description de produit
        descriptionView.setController(new DescriptionProduitController(),this);//on set le controller de la vue
        descriptionView.init();//on affiche le contenu de la page
    }

    /**
     * Méthode qui permet d'afficher le panier si il n'est pas vide
     */
    public showPanier(){
        if(this.panier.produitList.size==0){//on teste si le panier est vide pour savoir si on l'affiche ou non
            alert("Panier Vide");//si vide on prévient l'utilisateur
        }else{//sinon on affiche le panier
            let panierView = new PanierView(this.panier); //on initialise la vue du panier
            panierView.setController(new PanierController(),this);//on set le controller de la vue
            panierView.init();//on affiche le contenu de la page
        }

    }

    /**
     * Méthode qui permet d'afficher la page pour pouvoir se connecter
     */
    public showConnexion(){
        let connexionView = new ConnexionView();//on initialise la vue pour se connecter
        connexionView.setController(new ConnexionController(),this);//on set le controller de la vue
        connexionView.init();//on affiche le contenu de la page
    }

    /**
     * Méthode qui permet d'afficher la page de gestion du catalogue d'un admin
     * @param {number} page
     *  page du catalogue à afficher
     */
    public showAdminPage(page? :number) {
        let adminPageView = new AdminPageView(this.catalogue);//on initialise la vue pour les admins
        adminPageView.setController(new AdminPageController(),this);//on set le controller de la vue
        adminPageView.init(page || 1);//on affiche le contenu de la page
    }

    /**
     * Méthode qui permet de modifier un produit
     * @param {Produit} produit
     *  produit à modifier
     */
    public showProduitUpdate(produit : Produit) {
        let produitUpdtateView = new ProduitUpdtateView(produit);//on initialise la vue pour la modification de produit
        produitUpdtateView.setController(new ProduitUpdateController(),this);//on set le controller de la vue
        produitUpdtateView.init();//on affiche le contenu de la page
    }

    /**
     * Méthode qui permet d'avoir la confirmation si l'achat à réussi ou non
     */
    public showConfirmPage() {
        let confirmPageView = new ConfirmPageView(this.getRandomBoolean(),this.panier);//on initialise la vue avec un boolean pour la confirmation (réussi/échec)
        confirmPageView.setController(new ConfirmPageController(),this);//on set le controller de la vue
        confirmPageView.init();//on affiche le contenu de la page
    }

    /**
     * Méthode qui permet d'avoir l'écran de création de produit
     */
    public showCreateProduit() {
        let createProduitView = new CreateProduitView();//on initialise la vue
        createProduitView.setController(new CreateProduitController(),this);//on set le controller de la vue
        createProduitView.init();//on affiche le contenu de la page
    }

    /**
     * Méthode qui permet d'avoir un boolean aléatoirement
     * @returns {boolean}
     */
    private getRandomBoolean() : boolean{
        return (Math.random()*2)>1;
    }

    /**
     * Permet de gérer la connexion et déconnexion de l'utilisateur
     */
    private buttonConnexion() {
        if(this.user==null){        //si user est null alors personne n'est connecter
            this.showConnexion();   //donc on affiche la connexion
        }else{
            if(confirm("Etes vous sur de vouloir vous déconnecter ?")){//on demande si la personne veut se déconnecter
                this.user=null; //on repasse user à null pour dire que plus personne est connecter
                document.getElementById("connexion").innerHTML="Connexion";//on récrit connexion à la palce du nom de la personne
                document.getElementById("panier").style.visibility = "visible";//on raffiche le bouton du panier
                this.showCatalogue();
            }
        }
    }

    /**
     * Méthode qui permet de gérer le boutton accueil du site selon si un utilisateur est connecter
     */
    private showAccueil() {
        if(this.user==null){ // on teste si aucune utilisateur n'est connecter
            this.showCatalogue();//on montre le catalogue de base
        }else{
            this.showAdminPage(1);//sinon on affiche la page de gestion de produit pour l'admin
        }
    }


    public actualisePanierNumber(){
        document.getElementById(Main.ID_PANIER_NUMBER_DIV).innerText=this.panier.produitList.size+'';
    }


}


