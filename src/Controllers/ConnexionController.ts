import {Main} from "../index";
import {User} from "../Models/User";

export class ConnexionController{

    private main : Main;



    public setMain(main :Main){
        this.main=main;
    }

    connexion(id: string, mdp: string) {
        let user : User = new User(id,mdp);
        if(user.connexion(this.main.listUser)){
            this.main.user=user;
            document.getElementById("connexion").innerHTML=id;
            this.main.showAdminPage();
        }else{
            alert("pas bon");
        }
    }
}