import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IDay } from './interfaces/day.interface';
import { AddDayDto } from './dto/add-day.dto';

@Injectable()
export class DayService {
  constructor(
    @InjectModel('Day')
    private readonly dayModel: Model<IDay>) { }

  async add(day: AddDayDto): Promise<IDay> {
    const addedDay = new this.dayModel(day);

    return await addedDay.save()
  }

  async findAll(): Promise<IDay[]> {
    return this.dayModel.find().exec()
  }
}
