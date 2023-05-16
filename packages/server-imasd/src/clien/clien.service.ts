import { Injectable } from '@nestjs/common';
import { CreateClienDto } from './dto/create-clien.dto';
import { UpdateClienDto } from './dto/update-clien.dto';

@Injectable()
export class ClienService {
  create(createClienDto: CreateClienDto) {
    return 'This action adds a new clien';
  }

  findAll() {
    return `This action returns all clien`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clien`;
  }

  update(id: number, updateClienDto: UpdateClienDto) {
    return `This action updates a #${id} clien`;
  }

  remove(id: number) {
    return `This action removes a #${id} clien`;
  }
}
