import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all projects' })
  @ApiResponse({ status: 200, description: 'List of projects' })
  @ApiQuery({ name: 'category', required: false })
  findAll(@Query('category') category?: string) {
    if (category) {
      return this.projectsService.findByCategory(category);
    }
    return this.projectsService.findAll();
  }

  @Get('featured')
  @ApiOperation({ summary: 'Get featured projects' })
  @ApiResponse({ status: 200, description: 'Featured projects' })
  findFeatured() {
    return this.projectsService.findFeatured();
  }
}
