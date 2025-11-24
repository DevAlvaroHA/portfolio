import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProfileService } from './profile.service';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('active')
  @ApiOperation({ summary: 'Obtener perfil activo' })
  @ApiResponse({ status: 200, description: 'Perfil de Álvaro Hermosilla' })
  findActive() {
    return this.profileService.findActive();
  }
}
