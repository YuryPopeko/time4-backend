import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DaySchema } from './schemas/day.schema';

import { DayController } from './day.controller';
import { DayService } from './day.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Day', schema: DaySchema }])],
  controllers: [DayController],
  providers: [DayService]
})
export class DayModule { }
