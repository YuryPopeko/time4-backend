import * as mongoose from 'mongoose';

export const DaySchema = new mongoose.Schema({
  usefull: { type: Number, required: true },
  wasted: { type: Number, required: true },
  date: { type: String, required: true }
});

DaySchema.index({ date: 1 }, { unique: true })