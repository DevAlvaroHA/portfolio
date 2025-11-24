import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ExperienceService } from './experience.service';

@ApiTags('experience')
@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener experiencia laboral' })
  @ApiResponse({ status: 200, description: 'Experiencia de Álvaro Hermosilla' })
  findAll() {
    return this.experienceService.findAll();
  }
}
