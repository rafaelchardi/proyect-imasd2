import { Injectable } from '@nestjs/common';
import { CreateClienDto } from './dto/create-clien.dto';
import { UpdateClienDto } from './dto/update-clien.dto';
import { delay } from '../shared/utils';
import { Clien } from './clien.class';

@Injectable()
export class ClienService {
  create(createClienDto: CreateClienDto):Promise<Clien>  {
    return Promise.resolve({
      id : 13,
      name: 'cliente creado',
        }
   );
 }

findAll():Promise<Clien[]>{
   return Promise.resolve([{
      id : 1,
      name: 'rafael',
        },
        {
          id : 2,
          name: 'pepe',
        }]
  );
}
findOne(id: number):Promise<Clien> {
    return Promise.resolve({
      id : 1,
      name: 'rafael',
        }
 );

  }

  update(id: number, updateClienDto: UpdateClienDto):Promise<Clien> {
    return Promise.resolve(updateClienDto);
  }

  remove(id: number) {
    return `This action removes a #${id} clien`;
  }
}
