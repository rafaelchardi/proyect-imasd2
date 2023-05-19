import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
//import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { ClienModule } from './clien/clien.module';
import { MenuModule } from './menu/menu.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SEED || '123456',
      signOptions: { expiresIn: '6h' },
    }),
    AuthModule,
    ClienModule,
    MenuModule,
    ConfigModule.forRoot() 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
