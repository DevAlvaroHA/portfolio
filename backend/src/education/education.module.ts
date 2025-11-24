import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { Education } from './entities/education.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Education])],
  controllers: [EducationController],
  providers: [EducationService],
  exports: [EducationService],
})
export class EducationModule {}
