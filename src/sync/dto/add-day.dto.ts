import { IsInt, IsString, IsNotEmpty, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

const SECONDS_IN_DAY = 60 * 60 * 24;

export class AddDayDto {
  @IsInt()
  @Min(0)
  @Max(SECONDS_IN_DAY)
  @ApiProperty()
  readonly usefull: number;

  @IsInt()
  @Min(0)
  @Max(SECONDS_IN_DAY)
  @ApiProperty()
  readonly wasted: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly date: string;
}
