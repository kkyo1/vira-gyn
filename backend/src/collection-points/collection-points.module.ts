import { Module } from '@nestjs/common';
import { CollectionPointsController } from './collection-points.controller';
import { CollectionPointsService } from './collection-points.service';
import { PrismaModule } from '../prisma/prisma.module';
import { GemmaModule } from '../gemma/gemma.module';
@Module({
  imports: [
    PrismaModule,
    GemmaModule,
  ],
  controllers: [CollectionPointsController],
  providers: [CollectionPointsService],
})
export class CollectionPointsModule {}