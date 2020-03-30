import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SyncSchema } from './schemas/sync.schema';

import { SyncController } from './sync.controller';
import { SyncService } from './sync.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Sync', schema: SyncSchema }])],
  controllers: [SyncController],
  providers: [SyncService]
})
export class SyncModule { }
