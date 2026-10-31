import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { PrismaModule } from '../prisma/prisma.module';
import { GemmaModule } from '../gemma/gemma.module';


@Module({
  imports: [
      PrismaModule,
      GemmaModule,
    ],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}
