import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class AnalyzeWasteDto {
  @ApiPropertyOptional({ description: 'Observações opcionais sobre o resíduo' })
  @IsOptional()
  @IsString()
  notes?: string;
}