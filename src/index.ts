
import {Catalogue} from "./Models/Catalogue";
import {CatalogueView} from "./View/CatalogueView";
import {Panier} from "./Models/Panier";
import {CatalogueController} from "./Controllers/CatalogueController";
import {DescriptionProduitView} from "./View/DescriptionProduitView";
import {Produit} from "./Models/Produit";
import {DescriptionProduitController} from "./Controllers/DescriptionProduitController";



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

    public init(){
        this.catalogue = Catalogue.init();
        this.panier=new Panier();
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


}


