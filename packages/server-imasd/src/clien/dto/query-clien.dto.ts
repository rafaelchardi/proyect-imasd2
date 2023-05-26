import {  ApiProperty } from '@nestjs/swagger';
import { IsOptional  } from 'class-validator';
import { PaginationQuery } from '../../classes/pagination-query.class';

export class QueryClienDto  extends PaginationQuery {
    @ApiProperty({required:false})
    @IsOptional()
    
    name?: string;
   
}
