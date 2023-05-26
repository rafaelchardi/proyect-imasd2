
import { ApiProperty } from '@nestjs/swagger'; 
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Clien{
  @ApiProperty() 
  @PrimaryGeneratedColumn()
  @IsNumberString()
  id?: number;
 
  @ApiProperty()
   @Column()
   @IsString()
   @IsNotEmpty()
  name?: string;

  @Column({ default: true })
  isActive?: boolean;
}
