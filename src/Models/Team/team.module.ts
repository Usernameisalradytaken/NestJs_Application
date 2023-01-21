import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSchema } from './team.schema';
import { TeamService } from './team.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Team', schema: TeamSchema }])],
  exports: [TeamService],
  providers: [TeamService],
})
export class TeamModule {}
