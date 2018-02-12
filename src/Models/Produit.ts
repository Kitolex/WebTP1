/**
 * Cette classe est le modèle d'un produit
 */
export class Produit {

    /**
     * nom d'un produit
     */
    public nom : string;
    /**
     * description d'un produit
     */
    public description : string;
    /**
     * prix d'un produit
     */
    public prix : number;
    /**
     * srcImage d'un produit
     */
    public srcImage : string;
    /**
     * taxe d'un produit
     */
    public taxe : number;

    /**
     *  Constructeur de la classe Produit
     * @param {string} nom
     *  nom d'un produit
     * @param {string} description
     *  description d'un produit
     * @param {number} prix
     *  prix d'un produit
     * @param {string} srcImage
     *  srcImage d'un produit
     * @param {number} taxe
     *  taxe d'un produit
     */
    constructor(nom: string, description: string, prix: number,srcImage : string,taxe :number) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.srcImage = srcImage;
        this.taxe=taxe;
    }






}