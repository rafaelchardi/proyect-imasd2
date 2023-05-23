import { HttpException, Inject, Injectable, NotFoundException, Res ,Response } from '@nestjs/common';
import { extractTokenFromHeader } from '../shared/utils';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../auth/interfaces/jwt-payload';
import { REQUEST } from '@nestjs/core';
import { User } from 'packages/library-imasd/src/lib/interfaces/user.interface';
import { Menu } from 'packages/library-imasd/src/lib/interfaces/menu.interface';
import { Roles } from 'packages/library-imasd/src/lib/enum';
@Injectable()
export class MenuService {
  constructor( @Inject(REQUEST) private request,private jwtService:JwtService ){

  }
    async getMenu() {
      const token =extractTokenFromHeader(this.request);
    try {
       const payload = await this.jwtService.verifyAsync<JwtPayload>(
        token, { secret: process.env.JWT_SEED }
       );
      return this.getMenuByUsse(payload.user);
     } catch (error) {
      throw new NotFoundException('Acceso menu', { cause: new Error(), description: 'no se ha encontrado el menu' })
     }
   }   

 private getMenuByUsse(user:User):Menu[]{
      
      return [{
          id:1,
          label: 'sales',
          icon: 'pi pi-fw pi-plus',
          items:[
            {
              id:11,
              label: 'customers',
              icon: 'pi pi-fw pi-plus',
              path:'sales/clien',
              roles:[Roles.ADMIN,Roles.CLIENT]
           },
          {
           id:22,
           label: 'delivery',
           icon: 'pi pi-fw pi-plus',
           path:'shopping/delivery',
           roles:[Roles.ADMIN,Roles.CLIENT]
          },
          {
           id:23,
           label: 'invoice',
           icon: 'pi pi-fw pi-plus',
           path:'shopping/invoice',
           roles:[Roles.ADMIN,Roles.CONTA]
          }]
        },
        {
          id:2,
          label: 'shopping',
          icon: 'pi pi-fw pi-file',
          items:[
            {
              id:21,
              label: 'customers',
              icon: 'pi pi-fw pi-plus',
              path:'shopping/providers'
              ,
              roles:[Roles.ADMIN,Roles.PROVE]
           },  
          {
           id:22,
           label: 'delivery',
           icon: 'pi pi-fw pi-plus',
           path:'shopping/delivery',
           roles:[Roles.ADMIN,Roles.PROVE]
          },
          {
           id:23,
           label: 'invoice',
           icon: 'pi pi-fw pi-plus',
           path:'shopping/invoice',
           roles:[Roles.ADMIN,Roles.CONTA]
          }]
        }
      ] 
      
  }
}
