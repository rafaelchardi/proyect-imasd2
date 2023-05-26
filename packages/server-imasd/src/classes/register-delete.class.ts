import { ApiProperty } from "@nestjs/swagger";

export class RegisterDelete {
    @ApiProperty() 
    id: string;
    @ApiProperty() 
    description: string;
    @ApiProperty() 
    affected: number 
  };