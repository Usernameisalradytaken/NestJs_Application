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

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  team_name: String;
  
  @IsArray()
  team_members: [String];
}
