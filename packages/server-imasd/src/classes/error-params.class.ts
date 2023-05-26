import { ApiProperty } from '@nestjs/swagger';
export class ErrorParams {
  @ApiProperty()
  statusCode?: number;
  @ApiProperty()
  message?: [];
  @ApiProperty()
  error?: string;
}
export class NotFound {
  @ApiProperty()
  statusCode?: number;
  @ApiProperty()
  message?: string;
}
export class Unauthorized {
  @ApiProperty()
  statusCode?: number;
  @ApiProperty()
  message?: string;
  @ApiProperty()
  error: string;
}
