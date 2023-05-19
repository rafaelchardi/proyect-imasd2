import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { AuthService } from '../auth/auth.service';

@Module({
  controllers: [MenuController],
  providers: [MenuService,AuthService],
  imports: []
})
export class MenuModule {}
