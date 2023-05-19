import { Clien } from 'packages/library-imasd/src/lib/interfaces/client.interface';
import { Injectable } from '@nestjs/common';
import { CreateClienDto } from './dto/create-clien.dto';
import { UpdateClienDto } from './dto/update-clien.dto';
import { delay } from '../shared/utils';

@Injectable()
export class ClienService {
  create(createClienDto: CreateClienDto) {
    return 'This action adds a new clien';
  }

findAll():Clien[] {
   return[{
      id : 1,
      name: 'rafael',
        },
        {
          id : 2,
          name: 'pepe',
        }];
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
