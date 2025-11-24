import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile = this.profileRepository.create(createProfileDto);
    return await this.profileRepository.save(profile);
  }

  async findAll(): Promise<Profile[]> {
    return await this.profileRepository.find({
      where: { isActive: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Profile> {
    const profile = await this.profileRepository.findOne({ where: { id } });
    if (!profile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    return profile;
  }

  async findActive(): Promise<Profile> {
    const profile = await this.profileRepository.findOne({
      where: { isActive: true },
      order: { updatedAt: 'DESC' },
    });
    if (!profile) {
      throw new NotFoundException('No active profile found');
    }
    return profile;
  }

  async update(id: number, updateProfileDto: UpdateProfileDto): Promise<Profile> {
    const profile = await this.findOne(id);
    Object.assign(profile, updateProfileDto);
    return await this.profileRepository.save(profile);
  }

  async remove(id: number): Promise<void> {
    const profile = await this.findOne(id);
    await this.profileRepository.remove(profile);
  }
}
