import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { Task } from './task.interface';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async create(task: Task) {
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }
  async findAll() {
    return await this.taskModel.find();
  }
  async findOne(id: string) {
    return await this.taskModel.findOne({ _id : id});
  }
  async find(filterQuery: FilterQuery<Task>) {
    return await this.taskModel.find(filterQuery);
  }
  async findByIdAndUpdate(id: String, updateTask: Partial<Task>) {
    return this.taskModel.findByIdAndUpdate(id, updateTask, { returnDocument :"after" });
  }
}
