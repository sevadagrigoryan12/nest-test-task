import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray, IsNumber } from 'class-validator';

export class CreateGameRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  publisher: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  tags: string[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  releaseDate: string;
}
