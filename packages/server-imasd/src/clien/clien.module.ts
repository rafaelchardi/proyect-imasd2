import { Module } from '@nestjs/common';
import { ClienService } from './clien.service';
import { ClienController } from './clien.controller';
import { AuthService } from '../auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clien } from './clien.class';

@Module({
  controllers: [ClienController],
  imports: [TypeOrmModule.forFeature([Clien])],
  providers: [ClienService,AuthService]
})
export class ClienModule {}
