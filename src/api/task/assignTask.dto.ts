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


export class AssignTaskDto {
  @IsString()
  @IsNotEmpty()
  id: String;
  @IsString()
  @IsNotEmpty()
  assignee: String;
}
