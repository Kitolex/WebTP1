"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produit_1 = require("./Models/Produit");
var Catalogue_1 = require("./Models/Catalogue");
var AccueilController_1 = require("./Controllers/AccueilController");
var SRC_FICHIER = "../res/imageProduit/";
var produit1 = new Produit_1.Produit("KratosArme", "La grande et majestueuse arme de Kratos", 5, SRC_FICHIER + "kratos.jpg");
var produit2 = new Produit_1.Produit("KratosArme22222", "22222La grande et majestueuse arme de Kratos", 5, SRC_FICHIER + "kratos.jpg");
var produit3 = new Produit_1.Produit("KratosArme3333", "333333La grande et majestueuse arme de Kratos", 5, SRC_FICHIER + "kratos.jpg");
var catalogue = new Catalogue_1.Catalogue();
catalogue.addProduit(produit1);
catalogue.addProduit(produit2);
catalogue.addProduit(produit3);
var controller = new AccueilController_1.AccueilController(catalogue);
controller.init();
