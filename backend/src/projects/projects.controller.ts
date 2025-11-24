import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los proyectos' })
  @ApiResponse({ status: 200, description: 'Proyectos de Álvaro Hermosilla' })
  @ApiQuery({ name: 'category', required: false })
  findAll(@Query('category') category?: string) {
    if (category) {
      return this.projectsService.findByCategory(category);
    }
    return this.projectsService.findAll();
  }

  @Get('featured')
  @ApiOperation({ summary: 'Obtener proyectos destacados' })
  @ApiResponse({ status: 200, description: 'Proyectos destacados' })
  findFeatured() {
    return this.projectsService.findFeatured();
  }
}
