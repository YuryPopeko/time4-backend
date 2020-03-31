import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { SyncService } from './sync.service';
import { AddDayDto } from './dto/add-day.dto';
import { ApiTags } from '@nestjs/swagger';
import { ISync } from './interfaces/sync.interface';

@ApiTags('sync')
@Controller('sync')
export class SyncController {
  constructor(private readonly syncService: SyncService) { }

  @Post()
  async add(@Body(ValidationPipe) day: AddDayDto): Promise<ISync> {
    return this.syncService.add(day)
  }
}
