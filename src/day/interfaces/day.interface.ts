import { Document } from 'mongoose';

export interface IDay extends Document {
  readonly usefull: number;
  readonly wasted: number;
  readonly date: string;
}