import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEmail,
} from 'class-validator';

export class GetAllTaskDto {
  @IsString()
  @IsNotEmpty()
  id: String;
}
