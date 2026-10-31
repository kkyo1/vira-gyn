import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GemmaService } from '../gemma/gemma.service';

@Injectable()
export class WasteService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gemma: GemmaService,
  ) {}

  async analyzeAndSave(imageBuffer: Buffer) {
    const aiResult = await this.gemma.analyzeImage(imageBuffer);

    // Salva no PostgreSQL via Prisma
    const saved = await this.prisma.wasteAnalysis.create({
      data: {
        category: aiResult.category,
        material: aiResult.material,
        recyclable: aiResult.recyclable,
        destination: aiResult.destination,
        preparation: aiResult.preparation as any,
        environmentalTip: aiResult.environmentalTip,
        confidence: 0.95,
      },
    });

    return saved;
  }
}