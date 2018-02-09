export class Produit {

    public nom : string;
    public description : string;
    public prix : number;
    public srcImage : string;
    public taxe : number;


    constructor(nom: string, description: string, prix: number,srcImage : string,taxe :number) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.srcImage = srcImage;
        this.taxe=taxe;
    }






}