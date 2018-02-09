
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



window.onload = () => {
    console.log("ONLOAD");
    let main = new Main();
    main.init();
};

export class Main{
    static readonly SRC_FICHIER = "../res/imageProduit/";
    static readonly ID_MAIN_DIV="main";

    public catalogue : Catalogue;
    public panier : Panier;
    public user : User;
    public listUser : Array<User>;

    public init(){
        this.catalogue = Catalogue.init();
        this.panier=new Panier();

        this.listUser = new Array<User>();
        this.listUser.push(new User("admin","admin"));

        document.getElementById("panier").addEventListener("click",(e:Event) => this.showPanier());
        document.getElementById("connexion").addEventListener("click",(e:Event) => this.showConnexion());
        document.getElementById("accueil").addEventListener("click",(e:Event) => this.showCatalogue());
        this.showCatalogue();
    }


    public showCatalogue(){
        let catalogueView = new CatalogueView(this.catalogue);
        catalogueView.setController(new CatalogueController(),this);
        catalogueView.init(1);
    }


    public showDescription(produit : Produit){
        let descriptionView = new DescriptionProduitView(produit);
        descriptionView.setController(new DescriptionProduitController(),this);
        descriptionView.init();
    }

    public showPanier(){
        if(this.panier.produitList.size==0){
            alert("Panier Vide");
        }else{
            let panierView = new PanierView(this.panier);
            panierView.setController(new PanierController(),this);
            panierView.init();
        }

    }

    public showConnexion(){
        let connexionView = new ConnexionView();
        connexionView.setController(new ConnexionController(),this);
        connexionView.init();
    }


    public showAdminPage(page? :number) {
        let adminPageView = new AdminPageView(this.catalogue);
        adminPageView.setController(new AdminPageController(),this);
        adminPageView.init(page || 1);
    }

    public showProduitUpdate(produit : Produit) {
        let produitUpdtateView = new ProduitUpdtateView(produit);
        produitUpdtateView.setController(new ProduitUpdateController(),this);
        produitUpdtateView.init();
    }

    public showConfirmPage() {
        let confirmPageView = new ConfirmPageView(this.getRandomBoolean());
        confirmPageView.setController(new ConfirmPageController(),this);
        confirmPageView.init();
    }

    private getRandomBoolean() : boolean{
        return (Math.random()*2)>1;
    }
}


