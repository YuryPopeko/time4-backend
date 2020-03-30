import { Document } from 'mongoose';

export interface ISync extends Document {
  readonly usefull: number;
  readonly wasted: number;
  readonly date: string;
}