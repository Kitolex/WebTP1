import {User} from "../Models/User";
import {Controller} from "./Controller";

/**
 * Cette classe est controlleur de la vue ConnexionView
 */
export class ConnexionController extends Controller{

    /**
     * Cette méthode permet de pouvoir se connecter et de vérifier si l'identifiant et mot de passe et correct
     * @param {string} id
     *  identifiant de connexion
     * @param {string} mdp
     *  mot de passe de connexion
     */
    connexion(id: string, mdp: string) {
        let user : User = new User(id,mdp); // création de l'utilisateur
        if(user.connexion(super.getMain().listUser)){//on teste si l'utilisateur peut se connecter pa rapport à la liste des utilsateurs possibles
            this.getMain().user=user;                                               //si oui on met l'utilsateur en utilsateur courant
            document.getElementById("connexion").innerHTML=id+'/Déconnexion';            //on modifie le texte du boutton de connexion par "'id'/Déconnexion"
            document.getElementById("panier").style.visibility = "hidden";               //on supprime le bouton panier de l'affichage(car c'est un admin)
            this.getMain().panier.clear();
            this.getMain().actualisePanierNumber();
            this.getMain().showAdminPage();
        }else{//sinon on indique à l'utilisateur que les informations de connexion sont incorrect
            alert("les informations de connexion sont incorrect");
        }
    }
}