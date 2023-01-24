import * as mongoose from 'mongoose';

export const TeamMemberSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  team_id: {
    type: [String],
    // default: '',
  },
  created_date: {
    type: String,
    default: Date.now(),
  },
});
