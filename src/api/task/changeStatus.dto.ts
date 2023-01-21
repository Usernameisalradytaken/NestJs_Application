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
import { STATUS } from './StatusEnum';


export class changeStatusDto {
  @IsString()
  @IsNotEmpty()
  id: String;

  @IsNotEmpty()
  @IsEnum(STATUS)
  status: String;
}
