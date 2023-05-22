
import { ApiProperty } from '@nestjs/swagger'; 

export class Clien{
  @ApiProperty() 
  id?: number;
 
  @ApiProperty() 
  name?: string;

}
