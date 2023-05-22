
import { ApiProperty } from '@nestjs/swagger'; 
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Clien{
  @ApiProperty() 
  @PrimaryGeneratedColumn()
  id?: number;
 
  @ApiProperty() 
  @Column()
  name?: string;

  @Column({ default: true })
  isActive?: boolean;
}
