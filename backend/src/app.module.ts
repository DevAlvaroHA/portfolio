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
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
        
        // En producción, SIEMPRE usar DATABASE_URL
        if (nodeEnv === 'production' && databaseUrl) {
          
          // Parse DATABASE_URL para extraer componentes
          const url = new URL(databaseUrl);
          
          return {
            type: 'postgres' as const,
            host: url.hostname,
            port: parseInt(url.port) || 5432,
            username: url.username,
            password: url.password,
            database: url.pathname.slice(1), // Remove leading /
            entities: [Profile, Project, Experience, Education, ContactMessage],
            synchronize: configService.get<boolean>('DATABASE_SYNC', false),
            ssl: {
              rejectUnauthorized: false,
            },
            logging: false,
          };
        }
        
        // Desarrollo local: usar variables individuales
        return {
          type: 'postgres' as const,
          host: configService.get<string>('DATABASE_HOST', 'localhost'),
          port: configService.get<number>('DATABASE_PORT', 5433),
          username: configService.get<string>('DATABASE_USER', 'postgres'),
          password: configService.get<string>('DATABASE_PASSWORD', 'postgres'),
          database: configService.get<string>('DATABASE_NAME', 'portfolio'),
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}