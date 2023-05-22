import { Roles } from "../enum";


export interface User {
  id?:      number;
  email?:    string;
  name?:     string;
  isActive?: boolean;
  password?:     string;
  roles?:    Roles[];
}


export const UserDataEjem:User =  {
  id:      1,
  email:    "email",
  name:    "name",
  isActive: true,
  password:  "passs",
  roles:[Roles.ADMIN,Roles.USER]
}   