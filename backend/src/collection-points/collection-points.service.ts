import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CollectionPointsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(category?: string) {
    if (category) {
      return this.prisma.collectionPoint.findMany({
        where: {
          acceptedCategories: {
            has: category,
          },
        },
      });
    }
    return this.prisma.collectionPoint.findMany();
  }
}