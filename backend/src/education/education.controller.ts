import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EducationService } from './education.service';

@ApiTags('education')
@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener formación académica' })
  @ApiResponse({ status: 200, description: 'Formación de Álvaro Hermosilla' })
  findAll() {
    return this.educationService.findAll();
  }
}
