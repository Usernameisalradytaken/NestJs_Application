import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TeamSchema } from './team.schema';
import { Model, FilterQuery } from 'mongoose';
import { Team } from './team.interface';

@Injectable()
export class TeamService {
  constructor(@InjectModel('Team') private teamModel: Model<Team>) {}

  async findAll() {
    return await this.teamModel.find();
  }
  async findOne(id: String) {
    return await this.teamModel.findOne({ _id : id});
  }
  async find(filterQuery: FilterQuery<Team>) {
    return await this.teamModel.findOne(filterQuery);
  }
  async create(team: Team) {
    const newTeam = new this.teamModel(team);
    return await newTeam.save();
  }
  async findByIdAndUpdate(id: String, updateTeam: Partial<Team>) {
    return this.teamModel.findByIdAndUpdate(id, updateTeam);
  }
}
