import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TeamMemberSchema } from './teamMember.schema';
import { Model, FilterQuery } from 'mongoose';
import { TeamMember } from './teamMember.interface';

@Injectable()
export class TeamMemberService {
  constructor(
    @InjectModel('TeamMember') private teamMemberModel: Model<TeamMember>,
  ) {}

  async create(TeamMember: Partial<TeamMember>) {
    const newTeamMember = new this.teamMemberModel(TeamMember);
    return await newTeamMember.save();
  }
  async findAll() {
    return await this.teamMemberModel.find();
  }
  async findByEmailId(email: String) {
    return await this.teamMemberModel.findOne({
      where: {
        email: email,
      },
    });
  }
  async findOne(id: String) {
    return await this.teamMemberModel.findOne({ _id: id });
  }
  async find(filterQuery: FilterQuery<TeamMember>) {
    return await this.teamMemberModel.find(filterQuery);
  }
  async findOneAndUpdate(
    filterQuery: FilterQuery<TeamMember>,
    updateTeamMember: Partial<TeamMember>,
  ) {
    return this.teamMemberModel.findByIdAndUpdate(
      filterQuery,
      updateTeamMember,
      { returnDocument: 'after' },
    );
  }
}
