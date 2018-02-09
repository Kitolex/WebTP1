export class User{
    private id : string;
    private mdp : string;


    constructor(id: string, mdp: string) {
        this.id = id;
        this.mdp = mdp;
    }


    public connexion(listUser :Array<User>) : boolean{

        for(let user  of listUser){
            if(this.id==user.id && this.id==user.id){
                return true;
            }
        }

        return false;
    }
}