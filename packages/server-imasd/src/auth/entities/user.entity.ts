

export class User {

    id?: string;


    email?: string;


    name?: string;


    password?: string;


    isActive?: boolean;


    roles?: string[];

}

export const UserEjemplo = {

    id:'1',
    email: 'rafa@gmail.com',
    name: 'rafael',
    password: '1111',
    isActive:true,
    roles: ['ADMIN','USER','CLIENT']

}

