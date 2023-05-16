import { User, UserEjemplo } from "../entities/user.entity";

export class UserData {


    findOne({ email }):User {
        return UserEjemplo
      
    }
    findById(id='0'):User {
        return UserEjemplo
      
    }


}