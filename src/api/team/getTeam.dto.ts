import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEmail,
  IsEnum,
} from 'class-validator';

export class GetTeamDto {
  @IsString()
  @IsNotEmpty()
  id: String;
}
