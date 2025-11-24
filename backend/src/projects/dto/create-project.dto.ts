import { IsString, IsArray, IsUrl, IsOptional, IsBoolean, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ description: 'Título del proyecto' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Descripción detallada del proyecto' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Tecnologías utilizadas', example: ['Next.js', 'TypeScript', 'PostgreSQL'] })
  @IsArray()
  @IsString({ each: true })
  technologies: string[];

  @ApiPropertyOptional({ description: 'URL del proyecto en vivo' })
  @IsOptional()
  @IsUrl()
  liveUrl?: string;

  @ApiPropertyOptional({ description: 'URL del repositorio de GitHub' })
  @IsOptional()
  @IsUrl()
  githubUrl?: string;

  @ApiPropertyOptional({ description: 'URL de la imagen del proyecto' })
  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @ApiPropertyOptional({ description: 'Características principales', example: ['Autenticación JWT', 'API REST', 'Panel Admin'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  features?: string[];

  @ApiPropertyOptional({ description: 'Proyecto destacado', default: false })
  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @ApiPropertyOptional({ description: 'Fecha de inicio', example: '2024-01-15' })
  @IsOptional()
  @IsDateString()
  startDate?: Date;

  @ApiPropertyOptional({ description: 'Fecha de finalización', example: '2024-06-20' })
  @IsOptional()
  @IsDateString()
  endDate?: Date;

  @ApiPropertyOptional({ description: 'Categoría del proyecto', example: 'Web Development' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ description: 'Orden de visualización', default: 0 })
  @IsOptional()
  @IsNumber()
  order?: number;
}
