"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Catalogue_1 = require("./Models/Catalogue");
var AccueilController_1 = require("./Controllers/AccueilController");
var SRC_FICHIER = "../res/imageProduit/";
Catalogue_1.Catalogue.init(SRC_FICHIER);
var catalogue = new Catalogue_1.Catalogue();
var controller = new AccueilController_1.AccueilController(catalogue);
controller.init();
