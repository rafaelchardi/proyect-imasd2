import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
//import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { ClienModule } from './clien/clien.module';
import { MenuModule } from './menu/menu.module';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clien } from './clien/clien.class';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SEED || '123456',
      signOptions: { expiresIn: '8h' },
    }),
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [Clien],
      synchronize: true,
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
