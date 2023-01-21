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
  IsEmpty
} from 'class-validator';
import { STATUS } from './StatusEnum';
export class CreateTaskDto {
  @IsString()
  description: String;

  @IsString()
  @IsNotEmpty()
  task_name: String;

  @IsString()
  @IsNotEmpty()
  created_by: String;

  @IsString()
  @IsNotEmpty()
  due_date: String;

  @IsString()
  @IsNotEmpty()
  assignee: String;
  
  @IsEmpty()
  status: String;
  
  @IsEmpty()
  created_date: String;
}
