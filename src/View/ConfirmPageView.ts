
import {Main} from "../index";
import {ConfirmPageController} from "../Controllers/ConfirmPageController";


export class ConfirmPageView{
    private controller : ConfirmPageController;
    private reussite : boolean;

    constructor(reussite : boolean) {
        this.reussite=reussite;
    }

    public init(){
        if(this.reussite){
            document.getElementById(Main.ID_MAIN_DIV).innerHTML='<p>reussite '+ this.getIdTransaction() +'</p>';
        }else{
            document.getElementById(Main.ID_MAIN_DIV).innerHTML='<p>pas réussite</p>';
        }
    }

    public setController(controller : ConfirmPageController, main :Main){
        this.controller=controller;
        controller.setMain(main);
    }

    private getIdTransaction():string{

        let res : string="";

        for(let i =0 ;i<5;i++){
            res+=String.fromCharCode(65  + this.getRandomNumber(26))+"/";
        }
        for(let i =0 ;i<10;i++){
            res+=this.getRandomNumber(9)+"/";
        }

        return res;
    }

    private getRandomNumber(max :number): number{
        return Math.floor(Math.random()*max);
    }
}