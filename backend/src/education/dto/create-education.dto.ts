import { IsString, IsArray, IsUrl, IsOptional, IsBoolean, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEducationDto {
  @ApiProperty({ description: 'Nombre de la institución' })
  @IsString()
  institution: string;

  @ApiProperty({ description: 'Título o grado', example: 'Grado en Ingeniería Informática' })
  @IsString()
  degree: string;

  @ApiPropertyOptional({ description: 'Campo de estudio', example: 'Computer Science' })
  @IsOptional()
  @IsString()
  fieldOfStudy?: string;

  @ApiPropertyOptional({ description: 'Descripción de la formación' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Fecha de inicio', example: '2018-09-01' })
  @IsDateString()
  startDate: Date;

  @ApiPropertyOptional({ description: 'Fecha de finalización', example: '2022-06-30' })
  @IsOptional()
  @IsDateString()
  endDate?: Date;

  @ApiPropertyOptional({ description: 'Formación actual', default: false })
  @IsOptional()
  @IsBoolean()
  current?: boolean;

  @ApiPropertyOptional({ description: 'Nota o calificación', example: '8.5/10' })
  @IsOptional()
  @IsString()
  grade?: string;

  @ApiPropertyOptional({ description: 'Ubicación', example: 'Madrid, España' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ description: 'URL de la institución' })
  @IsOptional()
  @IsUrl()
  institutionUrl?: string;

  @ApiPropertyOptional({ description: 'Actividades y sociedades' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  activities?: string[];

  @ApiPropertyOptional({ description: 'Orden de visualización', default: 0 })
  @IsOptional()
  @IsNumber()
  order?: number;
}
