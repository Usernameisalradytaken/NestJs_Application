import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEmail,
  MinLength,
  IsStrongPassword
} from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: String;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  // @IsStrongPassword()
  password: String;
}
