import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClienService } from './clien.service';
import { CreateClienDto } from './dto/create-clien.dto';
import { UpdateClienDto } from './dto/update-clien.dto';
import { AuthGuard } from '../auth/guards/auth.guard';

@Controller('clien')
@UseGuards( AuthGuard )
export class ClienController {
  constructor(private readonly clienService: ClienService) {}

  @Post()
  create(@Body() createClienDto: CreateClienDto) {
    return this.clienService.create(createClienDto);
  }

  @Get()

  findAll() {
    return this.clienService.findAll();
  }

  @Get(':id')

  findOne(@Param('id') id: string) {
    return this.clienService.findOne(+id);
  }

  @Patch(':id')

  update(@Param('id') id: string, @Body() updateClienDto: UpdateClienDto) {
    return this.clienService.update(+id, updateClienDto);
  }

  @Delete(':id')

  remove(@Param('id') id: string) {
    return this.clienService.remove(+id);
  }
}
