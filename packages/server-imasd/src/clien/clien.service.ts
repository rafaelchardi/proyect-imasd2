import { Injectable } from '@nestjs/common';
import { CreateClienDto } from './dto/create-clien.dto';
import { UpdateClienDto } from './dto/update-clien.dto';
import { Clien } from './clien.class';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClienService {

  constructor(
    @InjectRepository(Clien)
    private clienRepository: Repository<Clien>,
  ) {}

  create(createClienDto: CreateClienDto):Promise<Clien>  {
    return Promise.resolve({
      id : 13,
      name: 'cliente creado',
        }
   );
 }

findAll():Promise<Clien[]>{
  return this.clienRepository.find();
}
findOne(id: number):Promise<Clien> {
  return this.clienRepository.findOneBy({ id });
}
 update(id: number, updateClienDto: UpdateClienDto):Promise<Clien> {
   return Promise.resolve(updateClienDto);
 }

  async remove(id: number): Promise<void> {
    await this.clienRepository.delete(id);
  }
}
