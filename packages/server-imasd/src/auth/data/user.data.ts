
import { User, UserDataEjem } from "packages/library-imasd/src/lib/interfaces/user.interface"

export class UserData {


    findOne({ email }):User {
        return UserDataEjem;
      
    }
    findById(id='0'):User {
        return UserDataEjem
      
    }


}