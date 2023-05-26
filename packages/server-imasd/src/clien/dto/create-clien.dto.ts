
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CreateClienDto {
   @ApiProperty()
   @Column()
   @IsString()
   @IsNotEmpty()
    name?: string;

    @Column({ default: false })
    isActive?: boolean;
}
