import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CollectionPointsService } from './collection-points.service';

@ApiTags('Collection Points')
@Controller('collection-points')
export class CollectionPointsController {
  constructor(private readonly pointsService: CollectionPointsService) {}

  @Get()
  @ApiOperation({ summary: 'Listar pontos de descarte em Goiânia' })
  @ApiQuery({ name: 'category', required: false, type: String })
  findAll(@Query('category') category?: string) {
    return this.pointsService.findAll(category);
  }
}