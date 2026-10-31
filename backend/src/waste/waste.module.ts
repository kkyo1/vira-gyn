import { Module } from '@nestjs/common';
import { WasteController } from './waste.controller';
import { WasteService } from './waste.service';
import { GemmaModule } from '../gemma/gemma.module'; 
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    GemmaModule, 
  ],
  controllers: [WasteController],
  providers: [
    WasteService,
  ],
})
export class WasteModule {}