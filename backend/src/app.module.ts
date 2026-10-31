import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { WasteModule } from './waste/waste.module';
import { CollectionPointsModule } from './collection-points/collection-points.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { GemmaModule } from './gemma/gemma.module';

@Module({
  imports: [PrismaModule, GemmaModule, WasteModule, CollectionPointsModule, DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
