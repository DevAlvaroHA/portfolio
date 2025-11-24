import { IsString, IsEmail, IsUrl, IsOptional, IsArray, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProfileDto {
  @ApiProperty({ description: 'Nombre completo' })
  @IsString()
  fullName: string;

  @ApiProperty({ description: 'Título profesional', example: 'Full-Stack Developer' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Biografía breve' })
  @IsString()
  bio: string;

  @ApiPropertyOptional({ description: 'Ubicación', example: 'Madrid, España' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ description: 'Email de contacto' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Teléfono' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ description: 'Sitio web personal' })
  @IsOptional()
  @IsUrl()
  website?: string;

  @ApiPropertyOptional({ description: 'URL del avatar/foto' })
  @IsOptional()
  @IsUrl()
  avatarUrl?: string;

  @ApiPropertyOptional({ description: 'URL del CV en PDF' })
  @IsOptional()
  @IsUrl()
  resumeUrl?: string;

  @ApiPropertyOptional({ description: 'URL de LinkedIn' })
  @IsOptional()
  @IsUrl()
  linkedinUrl?: string;

  @ApiPropertyOptional({ description: 'URL de GitHub' })
  @IsOptional()
  @IsUrl()
  githubUrl?: string;

  @ApiPropertyOptional({ description: 'URL de Twitter' })
  @IsOptional()
  @IsUrl()
  twitterUrl?: string;

  @ApiPropertyOptional({ description: 'Lista de habilidades técnicas', example: ['TypeScript', 'React', 'NestJS'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  skills?: string[];

  @ApiPropertyOptional({ description: 'Idiomas', example: ['Español (Nativo)', 'Inglés (Avanzado)'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  languages?: string[];

  @ApiPropertyOptional({ description: 'Perfil activo', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
