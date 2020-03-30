import * as mongoose from 'mongoose';

export const SyncSchema = new mongoose.Schema({
  usefull: { type: Number, required: true },
  wasted: { type: Number, required: true },
  date: { type: String, required: true }
});

SyncSchema.index({ date: 1 }, { unique: true })