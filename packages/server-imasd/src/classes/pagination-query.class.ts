import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, Min } from "class-validator";

export class PaginationQuery  {
    
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    @Min(1)
    limit?:string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    @Min(0)
    page?: string;
}
