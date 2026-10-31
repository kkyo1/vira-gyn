import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags, ApiConsumes } from '@nestjs/swagger';
import { WasteService } from './waste.service';

@ApiTags('Waste')
@Controller('waste')
export class WasteController {
  constructor(private readonly wasteService: WasteService) {}

  @Post('analyze')
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary: 'Identificar resíduo por imagem utilizando Gemma 4',
  })
  async analyze(@UploadedFile() file: any) {
    if (!file) {
      throw new BadRequestException('Nenhuma imagem foi enviada.');
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.mimetype)) {
      throw new BadRequestException('Formato de imagem não suportado.');
    }

    return this.wasteService.analyzeAndSave(file.buffer);
  }
}