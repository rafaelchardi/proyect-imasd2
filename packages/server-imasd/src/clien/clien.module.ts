import { Module } from '@nestjs/common';
import { ClienService } from './clien.service';
import { ClienController } from './clien.controller';
import { AuthService } from '../auth/auth.service';

@Module({
  controllers: [ClienController],
  providers: [ClienService,AuthService]
})
export class ClienModule {}
