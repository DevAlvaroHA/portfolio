import { IsString, IsEmail, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateContactMessageDto {
  @ApiProperty({ description: 'Nombre de la persona' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Email de contacto' })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({ description: 'Asunto del mensaje' })
  @IsOptional()
  @IsString()
  subject?: string;

  @ApiProperty({ description: 'Mensaje' })
  @IsString()
  message: string;

  @ApiPropertyOptional({ description: 'Teléfono' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ description: 'Empresa' })
  @IsOptional()
  @IsString()
  company?: string;
}
