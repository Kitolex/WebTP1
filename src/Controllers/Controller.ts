import {Main} from "../index";

export class Controller{

    private main : Main;

    public setMain(main :Main){
        this.main=main;
    }

    public getMain() : Main{
        return this.main;
    }
}