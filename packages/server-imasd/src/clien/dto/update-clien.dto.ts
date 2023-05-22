import { PartialType } from '@nestjs/mapped-types';
import { CreateClienDto } from './create-clien.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClienDto  {
    @ApiProperty()
    name?: string;
}
