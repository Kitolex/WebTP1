"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Catalogue_1 = require("./Models/Catalogue");
var AccueilController_1 = require("./Controllers/AccueilController");
var SRC_FICHIER = "../res/imageProduit/";
var catalogue = Catalogue_1.Catalogue.init(SRC_FICHIER);
var controller = new AccueilController_1.AccueilController(catalogue);
controller.init();
