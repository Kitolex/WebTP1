
import {Catalogue} from "./Models/Catalogue";
import {AccueilController} from "./Controllers/AccueilController";

const SRC_FICHIER = "../res/imageProduit/";



Catalogue.init(SRC_FICHIER);

let catalogue = new Catalogue();


let controller = new AccueilController(catalogue);

controller.init();