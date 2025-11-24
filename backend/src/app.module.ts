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
        const nodeEnv = configService.get('NODE_ENV');
        
        console.log('🔍 DATABASE_URL exists:', !!databaseUrl);
        console.log('🔍 NODE_ENV:', nodeEnv);
        
        // En producción, SIEMPRE usar DATABASE_URL
        if (nodeEnv === 'production' && databaseUrl) {
          console.log('✅ Using DATABASE_URL for production');
          return {
            type: 'postgres' as const,
            url: databaseUrl,
            entities: [Profile, Project, Experience, Education, ContactMessage],
            synchronize: configService.get<boolean>('DATABASE_SYNC', false),
            ssl: { rejectUnauthorized: false },
            logging: false,
          };
        }
        
        // Desarrollo local: usar variables individuales
        console.log('📍 Using individual DB variables for development');
        return {
          type: 'postgres' as const,
          host: configService.get('DATABASE_HOST', 'localhost'),
          port: configService.get<number>('DATABASE_PORT', 5433),
          username: configService.get('DATABASE_USER', 'postgres'),
          password: configService.get('DATABASE_PASSWORD', 'postgres'),
          database: configService.get('DATABASE_NAME', 'portfolio'),
          entities: [Profile, Project, Experience, Education, ContactMessage],
          synchronize: configService.get<boolean>('DATABASE_SYNC', true),
          logging: true,
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