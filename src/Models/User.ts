/**
 * Cette classe est le modèle d'un utilisateur
 */
export class User{

    /**
     * identifiant de l'utilsateur
     */
    private id : string;
    /**
     * mot de passe de l'utilisateur
     */
    private mdp : string;

    /**
     * Constructeur de la classe
     * @param {string} id
     *  identifiant de l'utilisateur
     * @param {string} mdp
     *  mot de passe de l'utilisateur
     */
    constructor(id: string, mdp: string) {
        this.id = id;
        this.mdp = mdp;
    }


    /**
     * Cette méthode permet de savoir si un utilisateur peut se connecter
     * @param {Array<User>} listUser
     *  liste des utilisateurs qui peuvent se connecter
     * @returns {boolean}
     *  retour vrai si il peut se connecter sinon faux
     */
    public connexion(listUser :Array<User>) : boolean{

        for(let user  of listUser){ //on teste pour chaque user si il peut se connecter ou non
            if(this.id==user.id && this.id==user.id){
                return true;//on renvoie vrai si oui
            }
        }

        return false;//sion on renvoie faux si aucun utilisateur de la liste ne correspond
    }
}