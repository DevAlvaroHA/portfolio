import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProfileService } from './profile/profile.service';
import { ProjectsService } from './projects/projects.service';
import { ExperienceService } from './experience/experience.service';
import { EducationService } from './education/education.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly profileService: ProfileService,
    private readonly projectsService: ProjectsService,
    private readonly experienceService: ExperienceService,
    private readonly educationService: EducationService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('seed')
  async runSeed() {
    try {
      // Crear perfil
      const profiles = await this.profileService.findAll();
      if (profiles.length === 0) {
        await this.profileService.create({
          fullName: 'Portfolio Owner',
          title: 'Full-Stack Developer | Software Engineer',
          bio: 'Passionate developer with experience in modern web technologies.',
          location: 'World',
          email: 'contact@example.com',
          phone: undefined,
          linkedinUrl: 'https://www.linkedin.com/in/your-profile',
          githubUrl: 'https://github.com/your-username',
          skills: [
            'JavaScript', 'TypeScript', 'React', 'Node.js',
            'PostgreSQL', 'Docker', 'Git'
          ],
          languages: ['English (Native)'],
          isActive: true,
        });
      }

      // Crear experiencia
      const experiences = await this.experienceService.findAll();
      if (experiences.length === 0) {
        await this.experienceService.create({
          company: 'Tech Company',
          position: 'Software Developer',
          description: 'Developing modern web applications.',
          responsibilities: [
            'Full-stack development',
            'Team collaboration',
            'Code reviews'
          ],
          technologies: ['React', 'Node.js', 'PostgreSQL'],
          startDate: new Date('2023-01-01'),
          endDate: new Date('2024-12-31'),
          current: false,
          location: 'Remote',
          companyUrl: undefined,
          employmentType: 'Full-time',
          order: 1,
        });
      }

      // Crear educación
      const education = await this.educationService.findAll();
      if (education.length === 0) {
        await this.educationService.create({
          institution: 'University Name',
          degree: 'Bachelor of Science',
          fieldOfStudy: 'Computer Science',
          description: 'Computer Science and Software Engineering.',
          startDate: new Date('2019-09-01'),
          endDate: new Date('2023-06-30'),
          current: false,
          activities: [
            'Software Development',
            'Algorithms',
            'Data Structures'
          ],
          order: 1,
        });
      }

      // Crear proyectos
      const projects = await this.projectsService.findAll();
      if (projects.length > 0) {
        for (const project of projects) {
          await this.projectsService.remove(project.id);
        }
      }

      await this.projectsService.create({
        title: 'Portfolio Website',
        description: 'Modern portfolio built with Next.js and NestJS.',
        technologies: ['Next.js', 'React', 'TypeScript', 'NestJS', 'PostgreSQL'],
        githubUrl: 'https://github.com/your-username/portfolio',
        features: ['Responsive design', 'REST API', 'Database integration'],
        featured: true,
        category: 'Full Stack',
        order: 1,
      });

      return {
        success: true,
        message: 'Seed completed successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error executing seed',
        error: error.message,
      };
    }
  }
}
