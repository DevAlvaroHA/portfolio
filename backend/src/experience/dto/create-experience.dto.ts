import { IsString, IsArray, IsUrl, IsOptional, IsBoolean, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateExperienceDto {
  @ApiProperty({ description: 'Nombre de la empresa' })
  @IsString()
  company: string;

  @ApiProperty({ description: 'Puesto de trabajo' })
  @IsString()
  position: string;

  @ApiProperty({ description: 'Descripción del rol' })
  @IsString()
  description: string;

  @ApiPropertyOptional({ description: 'Responsabilidades principales' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  responsibilities?: string[];

  @ApiPropertyOptional({ description: 'Tecnologías utilizadas', example: ['React', 'Node.js', 'AWS'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  technologies?: string[];

  @ApiProperty({ description: 'Fecha de inicio', example: '2023-01-15' })
  @IsDateString()
  startDate: Date;

  @ApiPropertyOptional({ description: 'Fecha de finalización', example: '2024-06-20' })
  @IsOptional()
  @IsDateString()
  endDate?: Date;

  @ApiPropertyOptional({ description: 'Trabajo actual', default: false })
  @IsOptional()
  @IsBoolean()
  current?: boolean;

  @ApiPropertyOptional({ description: 'Ubicación', example: 'Madrid, España' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ description: 'URL de la empresa' })
  @IsOptional()
  @IsUrl()
  companyUrl?: string;

  @ApiPropertyOptional({ description: 'Tipo de empleo', example: 'Full-time' })
  @IsOptional()
  @IsString()
  employmentType?: string;

  @ApiPropertyOptional({ description: 'Orden de visualización', default: 0 })
  @IsOptional()
  @IsNumber()
  order?: number;
}
