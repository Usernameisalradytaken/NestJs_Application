import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
  team_name: {
    type : String,
    // unique: true,
    // lowercase: true
    required: true
  },
  team_members: [String],
});
