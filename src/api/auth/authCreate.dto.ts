import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEmail,
  MinLength
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: String;
  @IsNotEmpty()
  @IsEmail()
  email: String;
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  password: String;
}
