import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getSummary() {
    const totalAnalyzed = await this.prisma.wasteAnalysis.count();
    const recyclableCount = await this.prisma.wasteAnalysis.count({
      where: { recyclable: true },
    });
    const nonRecyclableCount = totalAnalyzed - recyclableCount;

    const allAnalyses = await this.prisma.wasteAnalysis.findMany({
      select: { category: true },
    });

    const categoriesBreakdown = allAnalyses.reduce(
      (acc: Record<string, number>, curr: { category: string }) => {
        acc[curr.category] = (acc[curr.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return {
      totalAnalyzed,
      recyclableCount,
      nonRecyclableCount,
      categoriesBreakdown,
    };
  }
}