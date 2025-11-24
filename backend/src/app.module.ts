import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// ENTITIES
import { Profile } from './profile/entities/profile.entity';
import { Project } from './projects/entities/project.entity';
import { Experience } from './experience/entities/experience.entity';
import { Education } from './education/entities/education.entity';
import { ContactMessage } from './contact/entities/contact-message.entity';

// MODULES
import { ProfileModule } from './profile/profile.module';
import { ProjectsModule } from './projects/projects.module';
import { ExperienceModule } from './experience/experience.module';
import { EducationModule } from './education/education.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseUrl = configService.get('DATABASE_URL');
        
        // Si existe DATABASE_URL completa, úsala
        if (databaseUrl && databaseUrl.startsWith('postgresql://')) {
          return {
            type: 'postgres',
            url: databaseUrl,
            entities: [Profile, Project, Experience, Education, ContactMessage],
            synchronize: configService.get<boolean>('DATABASE_SYNC', true),
            ssl: configService.get('NODE_ENV') === 'production' ? { rejectUnauthorized: false } : false,
          };
        }
        
        // Sino, usa variables individuales (local development)
        return {
          type: 'postgres',
          host: configService.get('DATABASE_HOST', 'localhost'),
          port: configService.get<number>('DATABASE_PORT', 5433),
          username: configService.get('DATABASE_USER', 'postgres'),
          password: configService.get('DATABASE_PASSWORD', 'postgres'),
          database: configService.get('DATABASE_NAME', 'portfolio'),
          entities: [Profile, Project, Experience, Education, ContactMessage],
          synchronize: configService.get<boolean>('DATABASE_SYNC', true),
        };
      },
    }),
    ProfileModule,
    ProjectsModule,
    ExperienceModule,
    EducationModule,
    ContactModule,
  ],
})
export class AppModule {}