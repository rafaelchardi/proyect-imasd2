
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienDto {
    @ApiProperty()
    name?: string;

}
