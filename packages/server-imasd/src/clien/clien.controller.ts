import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClienService } from './clien.service';

import { AuthGuard } from '../auth/guards/auth.guard';
import { ApiBearerAuth, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Clien } from './clien.class';
import { CreateClienDto } from './dto/create-clien.dto';
import { UpdateClienDto } from './dto/update-clien.dto';
import { idNotFound } from '../auth/interfaces/idNotFound.class';


@Controller('clien')
@UseGuards( AuthGuard )
@ApiBearerAuth('defaultBearerAuth')
@ApiTags('clien')
export class ClienController {
  constructor(private readonly clienService: ClienService) {}


  @Get()
  @ApiOkResponse({description: 'Array de clientes',type: [Clien]})
  @ApiNotFoundResponse({description: 'No se ha encontrado ningun cliente',type: [Clien]})
  findAll() :Promise<Clien[]> {
      return this.clienService.findAll();  
 }


 @ApiOkResponse({description: 'Cliente encontrado',type: Clien})
 @ApiNotFoundResponse({description: 'No se ha encontrado el cliente',type: idNotFound})
  @Get(':id') 
   findOne(@Param('id') id: string) :Promise<Clien> {
    return this.clienService.findOne(+id);
  }


  @Post()
  @ApiCreatedResponse({ description: 'cliente creado',type: Clien})
  create(@Body() createClienDto: CreateClienDto) :Promise<Clien> {
    return this.clienService.create(createClienDto);
  }


  @Patch(':id')
  @ApiOkResponse({description: 'cliente actualizado',type: Clien})
  @ApiNotFoundResponse({description: 'No se ha encontrado el cliente',type: idNotFound})
  update(@Param('id') id: string, @Body() updateClienDto: UpdateClienDto) :Promise<Clien> {
    return this.clienService.update(+id, updateClienDto);
  }

  @Delete(':id')
  @ApiNotFoundResponse({description: 'No se ha encontrado el cliente',type: idNotFound})
  @ApiOkResponse({description: 'cliente eliminado'})
  remove(@Param('id') id: string) {
    return this.clienService.remove(+id);
  }
}
