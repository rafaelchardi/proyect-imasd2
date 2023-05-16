import { PartialType } from '@nestjs/mapped-types';
import { CreateClienDto } from './create-clien.dto';

export class UpdateClienDto extends PartialType(CreateClienDto) {}
