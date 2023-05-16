import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
//import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { ClienModule } from './clien/clien.module';


@Module({
  imports: [
    ConfigModule.forRoot(),

//    MongooseModule.forRoot( process.env.MONGO_URI ),

    AuthModule,

ClienModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
