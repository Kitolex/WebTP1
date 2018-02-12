import {Main} from "../index";

/**
 * Cette classe étend tous les controlleurs et contient les méthodes et variables qu'ont besoin les controlleurs
 */
export class Controller{

    /**
     * La classe main afin d'accéder aux variables importantes du site
     */
    private main : Main;

    /**
     * Setter de l'attribut main
     * @param {Main} main
     */
    public setMain(main :Main){
        this.main=main;
    }

    /**
     * Getter de l'attribut main
     * @returns {Main}
     */
    public getMain() : Main{
        return this.main;
    }
}