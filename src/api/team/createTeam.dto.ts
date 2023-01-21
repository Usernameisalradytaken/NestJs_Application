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
  team_name: string;
  
  @IsArray()
  team_members: [string];
}
