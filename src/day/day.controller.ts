import { Controller, Post, Body, ValidationPipe, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DayService } from './day.service';
import { AddDayDto } from './dto/add-day.dto';
import { IDay } from './interfaces/day.interface';

@ApiTags('day')
@Controller('day')
export class DayController {
  constructor(private readonly dayService: DayService) { }

  @Post('/add')
  async addDay(@Body(ValidationPipe) day: AddDayDto): Promise<IDay> {
    return this.dayService.add(day)
  }

  @Get('/history')
  async getHistory(): Promise<IDay[]> {
    return this.dayService.findAll()
  }
}
