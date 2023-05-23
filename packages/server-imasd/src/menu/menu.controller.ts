import { Controller, Get, Headers, Param, Query, Response, Res, UseGuards } from '@nestjs/common';
import { MenuService } from './menu.service';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('menu')
@UseGuards( AuthGuard )
@ApiBearerAuth('defaultBearerAuth')
@ApiTags('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  @Get()
  getMenu() {
    return this.menuService.getMenu();
  }
  
}
