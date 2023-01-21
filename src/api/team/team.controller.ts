import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateTeamDto } from './createTeam.dto';
import { TeamService } from 'src/Models/Team/team.service';
import { GetTeamDto } from './getTeam.dto';
import { AddTeamMemberDto } from './addTeamMember.dto';
import { TeamMemberService } from 'src/Models/TeamMember/teamMember.service';
import { MongooseError } from 'mongoose';

@Controller('team')
export class TeamController {
  constructor(
    private teamService: TeamService,
    private teamMemberService: TeamMemberService,
  ) {}

  @Post('/createTeam')
  async addTeam(@Body() createTeamDto: CreateTeamDto) {
    console.log(createTeamDto);
    let data;
    try{
      data = await this.teamService.create(createTeamDto);
    }catch(error){
        if(error.message.indexOf("11000") != -1)
          return { message : "Team name already Taken" }
    }
    console.log(data);
    return data;
  }

  @Get('/getTeam')
  async getTeam(@Body() getTeamDto: GetTeamDto) {
    console.log(getTeamDto);
    const teamData = await this.teamService.findOne(getTeamDto.id);

    
    let teamMembers = []

    for(let i =0; i <  teamData.team_members.length; i++){
      const teamMember = await this.teamMemberService.findOne(teamData.team_members[0])
      delete teamMember.password
      teamMembers.push(teamMember)
    }

    return {
      team_members : teamMembers,
      team_name : teamData.team_name,
      id : teamData.id
    };
  }

  

  @Post('/addTeamMember')
  async addTeamMember(@Body() addTeamMemberDto: AddTeamMemberDto) {
    console.log(addTeamMemberDto);
    const teamData = await this.teamService.findOne(addTeamMemberDto.id);
    if (teamData.team_members.indexOf(addTeamMemberDto.teamMemberID) != -1)
      return { message : "Team Member already added"}

    teamData.team_members.push(addTeamMemberDto.teamMemberID);

    console.log(teamData);
    
    const data = await this.teamService.findByIdAndUpdate(
      teamData.id,
      { team_members : teamData.team_members },
    );

    console.log(data);
    
    return teamData;
  }
}
