import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienDto } from './dto/create-clien.dto';
import { UpdateClienDto } from './dto/update-clien.dto';
import { Clien } from './clien.class';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Pagination } from '../paginate/pagination';

@Injectable()
export class ClienService {
  constructor(
    @InjectRepository(Clien)
    private clienRepository: Repository<Clien>
  ) {}

  create(createClienDto: CreateClienDto): Promise<Clien> {
    return this.clienRepository.save(createClienDto);
  }

  async findAll(query): Promise<Pagination<Clien>> {

    const take = query.limit || 10
    const skip = (query.page * query.limit) || 0
    const name = query.name || ''

    const [results, total] = await this.clienRepository.findAndCount(
        {
            where: { name: Like('%' + name + '%') }, order: { name: "DESC" },
            take: take,
            skip: skip
        }
    );
   /*  const page_total= Math.ceil(total / skip); */
    return new Pagination<Clien>({
      results,
      total,
    },take,Number(query.page) );

}
  async findOne(id: number): Promise<Clien> {
    return await  this.clienRepository.findOneBy({ id }).then(x=>{
      if (x)  return Promise.resolve(x);
      else  throw new  NotFoundException();
    });
  }

  async update(id: number, updateClienDto: UpdateClienDto): Promise<any> {
    /* return this.clienRepository.update(id,{name:updateClienDto.name}); */
    return await this.clienRepository.update(id,{name:updateClienDto.name}).then((x) => {
      if (x.affected == 0) {
        throw new  NotFoundException();
      } 
      else
        return {
          id,
          description: 'cliente modificado',
          affected: x.affected,
        };
    });

  }

  async remove(id: number): Promise<any> {
    return await this.clienRepository.delete(id).then((x) => {
      if (x.affected == 0) {
        throw new  NotFoundException();
      } 
      else
        return {
          id,
          description: 'cliente eliminado',
          affected: x.affected,
        };
    });
  }
}
