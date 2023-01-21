import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamMemberSchema } from './teamMember.schema';
import { TeamMemberService } from './teamMember.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'TeamMember', schema: TeamMemberSchema }])],
  exports: [TeamMemberService],
  providers: [TeamMemberService],
})
export class TeamMemberModule {}
