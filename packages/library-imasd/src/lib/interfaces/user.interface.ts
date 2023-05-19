

export interface User {
  id?:      number;
  email?:    string;
  name?:     string;
  isActive?: boolean;
  password?:     string;
  roles?:    string[];
}


export const UserDataEjem =  {
  id:      1,
  email:    "email",
  name:    "name",
  isActive: true,
  password:  "passs",
  roles:    ['ADMIN','CLIEN','USER']
}