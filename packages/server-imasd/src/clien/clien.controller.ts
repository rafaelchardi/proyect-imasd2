import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
  Put,
  Query
  
} from '@nestjs/common';
import { ClienService } from './clien.service';

import { AuthGuard } from '../auth/guards/auth.guard';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Clien } from './clien.class';
import { CreateClienDto } from './dto/create-clien.dto';
import { UpdateClienDto } from './dto/update-clien.dto';
import { idNotFound } from '../auth/interfaces/idNotFound.class';
import { ResponseHtmlCustoms } from 'packages/library-imasd/src/lib/enum';
import { UpdateResult } from 'typeorm';
import { RegisterDelete } from '../classes/register-delete.class';
import { ErrorParams } from '../classes/error-params.class';
import { Pagination } from '../paginate/pagination';
import { QueryClienDto } from './dto/query-clien.dto';

@Controller('clien')
@UseGuards(AuthGuard)
@ApiBearerAuth('defaultBearerAuth')
@ApiTags('clien')
export class ClienController {
  constructor(private readonly clienService: ClienService) {}

  @ApiOkResponse({ description: 'Array de clientes', type: [Clien] })
  @ApiNotFoundResponse({
    description: 'No se ha encontrado ningun cliente',
    type: [Clien],
  })
  @Get()
  
  findAll(@Query() queryParams: QueryClienDto): Promise<Pagination<Clien>>{
    
    return this.clienService.findAll({
      name: queryParams['name'] ? queryParams.name : '',
      limit: queryParams['limit'] ? queryParams.limit : 10,
      page: queryParams['page'] ? queryParams.page : 0,
    });

  }

  /* findAll(@Request() request): Promise<Pagination<Clien>>{
    return this.clienService.findAll({
      name: request.query['name'] ? request.query.name : '',
      limit: request.query['limit'] ? request.query.limit : 10,
      page: request.query['page'] ? request.query.page : 0,
    });

  }
  */
  
  @ApiOkResponse({ description: 'Cliente encontrado', type: Clien })
  @ApiNotFoundResponse({
    description: 'No se ha encontrado el cliente',
    type: idNotFound,
  })

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Clien> {
    return this.clienService.findOne(+id);
  }

  @Post()
  @ApiBadRequestResponse({ description: 'error de parametros', type: ErrorParams })
  @ApiCreatedResponse({ description: 'cliente creado', type: Clien })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createClienDto: CreateClienDto): Promise<Clien> {
    return this.clienService.create(createClienDto);
  }


  
  @Put(':id')
  @HttpCode(ResponseHtmlCustoms.UPDATEOK)
  @ApiBadRequestResponse({ description: 'error de parametros', type: ErrorParams })
  @ApiResponse({ 
    status:ResponseHtmlCustoms.UPDATEOK,
     description: "Modificacion cliente",
     type: RegisterDelete,
                  })
  @ApiNotFoundResponse({
    description: 'No se ha encontrado el cliente',
    type: idNotFound,
  })

  update(
    @Param('id') id: string,
    @Body() updateClienDto: UpdateClienDto
  ): Promise<UpdateResult> {
    return this.clienService.update(+id, updateClienDto);
  }

  @Delete(':id')
  @HttpCode(ResponseHtmlCustoms.DELETEOK)
  @ApiNotFoundResponse({
    description: 'No se ha encontrado el cliente',
  })
  @ApiResponse({ 
    status:ResponseHtmlCustoms.DELETEOK,
     description: "Borrado cliente",
     type: RegisterDelete,
                  })
   async remove(@Param('id') id: string) {
    return this.clienService.remove(+id)
  }
}
