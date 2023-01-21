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


export class AddTeamMemberDto {
  @IsString()
  @IsNotEmpty()
  id: String;
  @IsString()
  @IsNotEmpty()
  teamMemberID: String;
}
