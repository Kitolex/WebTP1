import {Main} from "../index";
import {User} from "../Models/User";
import {Controller} from "./Controller";

export class ConnexionController extends Controller{


    connexion(id: string, mdp: string) {
        let user : User = new User(id,mdp);
        if(user.connexion(super.getMain().listUser)){
            this.getMain().user=user;
            document.getElementById("connexion").innerHTML=id;
            document.getElementById("panier").style.visibility = "hidden";
            this.getMain().showAdminPage();
        }else{
            alert("pas bon");
        }
    }
}