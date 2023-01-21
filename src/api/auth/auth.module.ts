import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthController } from './auth.controller';
import { TeamModule } from 'src/Models/Team/team.module';
import { TeamService } from 'src/Models/Team/team.service';

@Module({
  imports: [TeamModule],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
