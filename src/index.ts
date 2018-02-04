
import {Catalogue} from "./Models/Catalogue";
import {AccueilController} from "./Controllers/AccueilController";

const SRC_FICHIER = "../res/imageProduit/";





let catalogue = Catalogue.init(SRC_FICHIER);


let controller = new AccueilController(catalogue);

controller.init();