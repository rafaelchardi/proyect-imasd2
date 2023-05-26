import { ApiProperty } from '@nestjs/swagger';
export class ErrorParams {
    @ApiProperty() 
    statusCode?: number;
    @ApiProperty() 
    message?: [];
    @ApiProperty() 
    error?: string;
  };