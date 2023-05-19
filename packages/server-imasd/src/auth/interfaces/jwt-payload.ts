import { User } from "packages/library-imasd/src/lib/interfaces/user.interface";


export interface JwtPayload {
  
    iat?: number;
    exp?: number;
    user:User;

}

