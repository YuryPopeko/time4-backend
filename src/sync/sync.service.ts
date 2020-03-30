import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ISync } from './interfaces/sync.interface';
import { Model } from 'mongoose';
import { AddDayDto } from './dto/add-day.dto';

@Injectable()
export class SyncService {
  constructor(@InjectModel('Sync') private readonly syncModel: Model<ISync>) { }

  async add(day: AddDayDto): Promise<ISync> {
    const addedDay = new this.syncModel(day);

    return await addedDay.save()
  }
}
