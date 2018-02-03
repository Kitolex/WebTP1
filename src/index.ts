import {Produit} from "./Models/Produit";
import {Panier} from "./Models/Panier";


let eza = new Produit("444","4",5);
let panier = new Panier();

panier.addProduit(eza);
panier.addProduits(eza,3);
console.log(panier.produitList);




