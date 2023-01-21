import { Controller, Post, Get, Body} from '@nestjs/common';
import { CreateTaskDto } from './taskCreate.dto';
import { TaskService } from 'src/Models/Task/task.service';
import { AssignTaskDto } from './assignTask.dto';
import { GetAllTaskDto } from './getTask.dto';
import { changeStatusDto } from './changeStatus.dto';

@Controller('task')

export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post('/create')
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    const createData = createTaskDto;
    const data = await this.taskService.create(createTaskDto);
    return data;
  }

  @Post('/assign')
  async assignTask(@Body() assignTaskDto: AssignTaskDto) {
    console.log(assignTaskDto);
    const { id, ...updateQuery } = assignTaskDto;
    const data = await this.taskService.findByIdAndUpdate(id, updateQuery);
    return data;
  }

  @Get('/getTaskByAssignee')
  async getAllTask(@Body() getAllTaskDto: GetAllTaskDto) {
    console.log(getAllTaskDto);
    const data = await this.taskService.find({ assignee: getAllTaskDto.id });
    return data;
  }

  @Post('/changeStatus')
  async changeStatus(@Body() changeStatusDto: changeStatusDto) {
    console.log(changeStatusDto);
    const { id, ...updateQuery } = changeStatusDto;
    const data = await this.taskService.findByIdAndUpdate(id, updateQuery);
    return data;
  }
}
