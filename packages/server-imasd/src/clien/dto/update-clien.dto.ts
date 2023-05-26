import {  ApiProperty } from '@nestjs/swagger';

import { Column } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateClienDto  {
    @ApiProperty()
    @Column()
    @IsString()
    @IsNotEmpty()
     name?: string;
 
     @Column({ default: false })
     isActive?: boolean;  
}
