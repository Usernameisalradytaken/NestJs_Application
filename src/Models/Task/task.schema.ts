import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: false,
  },
  task_name: {
    type: String,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
  },
  due_date: {
    type: String,
    required: true,
  },
  assignee: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'InActive',
  },
  created_date: {
    type: String,
    default: Date.now(),
  },
});
