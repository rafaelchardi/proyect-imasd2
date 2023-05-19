import { HttpException, Inject, Injectable } from '@nestjs/common';
import { extractTokenFromHeader } from '../shared/utils';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../auth/interfaces/jwt-payload';
import { REQUEST } from '@nestjs/core';
import { User } from 'packages/library-imasd/src/lib/interfaces/user.interface';
import { Menu } from 'packages/library-imasd/src/lib/interfaces/menu.interface';
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
      throw new HttpException('Cliente no encontrado',404);
     }
   }   

 private getMenuByUsse(user:User):Menu[]{
      return [{
          id:1,
          label: 'sales',
          icon: 'pi pi-fw pi-file',
          items:[
            {
              id:11,
              label: 'customers',
              icon: 'pi pi-fw pi-plus',
              path:'/clien'
           }]
        },
        {
          id:2,
          label: 'shopping',
          icon: 'pi pi-fw pi-file',
        }
      ] 
      
  }
}
