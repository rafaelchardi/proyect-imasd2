import { Controller, Get, UseGuards } from '@nestjs/common';
import { MenuService } from './menu.service';
import { AuthGuard } from '../auth/guards/auth.guard';

@Controller('menu')
@UseGuards( AuthGuard )
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  @Get()
  getMenu() {
    return this.menuService.getMenu();
  }
  
}
