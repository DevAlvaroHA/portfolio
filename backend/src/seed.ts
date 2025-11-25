import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProfileService } from './profile/profile.service';
import { ProjectsService } from './projects/projects.service';
import { ExperienceService } from './experience/experience.service';
import { EducationService } from './education/education.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const profileService = app.get(ProfileService);
  const projectsService = app.get(ProjectsService);
  const experienceService = app.get(ExperienceService);
  const educationService = app.get(EducationService);

  try {
    // 1. Create profile
    const profiles = await profileService.findAll();
    
    if (profiles.length === 0) {
      await profileService.create({
        fullName: 'Álvaro Hermosilla Alameda',
        title: 'Full-Stack Web Developer | Sistemas & Redes | DevOps & Cloud',
        bio: 'Me apasiona conectar el desarrollo de software con la infraestructura que lo hace posible. Combino desarrollo Full-Stack Web (React, Node.js, MySQL) con administración de sistemas y buenas prácticas DevOps (Linux, Docker), creando soluciones que funcionan, escalan y se mantienen seguras. Creo en la tecnología como motor de eficiencia y oportunidad: desde aplicaciones web que optimizan procesos hasta entornos cloud robustos y protegidos frente a amenazas.',
        location: 'España',
        email: 'alvaro.hermosilla.alameda@gmail.com',
        phone: undefined,
        linkedinUrl: 'https://es.linkedin.com/in/%C3%A1lvaro-hermosilla-alameda-587526339',
        githubUrl: 'https://github.com/DevAlvaroHA',
        skills: [
          'JavaScript', 'TypeScript', 'Python', 'React', 'Redux', 'Next.js',
          'Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MySQL', 'MongoDB',
          'Docker', 'Linux', 'Nginx', 'Apache', 'Git', 'GitHub',
          'Windows Server', 'Firewalls', 'VPN', 'Kali Linux', 'Ethical Hacking'
        ],
        languages: ['Español (Nativo)', 'Inglés'],
        isActive: true,
      });
    }

    // 2. Create experience
    const experiences = await experienceService.findAll();
    
    if (experiences.length === 0) {
      await experienceService.create({
        company: 'Futura Tickets',
        position: 'Desarrollador Web',
        description: 'Desarrollo de una plataforma web para compra y venta de entradas basada en tecnología blockchain.',
        responsibilities: [
          'Desarrollo de plataforma web para compra y venta de entradas',
          'Implementación de transacciones seguras con tecnología blockchain',
          'Implementación de funcionalidades de gestión de usuarios',
          'Participación en entorno de trabajo ágil',
          'Colaboración remota con el equipo técnico'
        ],
        technologies: ['Blockchain', 'Web Development', 'JavaScript', 'React', 'Node.js'],
        startDate: new Date('2024-09-01'),
        endDate: new Date('2024-12-01'),
        current: false,
        location: 'Teletrabajo',
        companyUrl: undefined,
        employmentType: 'Teletrabajo',
        order: 1,
      });
    }

    // 3. Create education
    const education = await educationService.findAll();
    
    if (education.length === 0) {
      await educationService.create({
        institution: 'University/Institution Name',
        degree: 'Degree Name',
        fieldOfStudy: 'Field of Study',
        description: 'Description of your education.',
        startDate: new Date('2019-09-01'),
        endDate: new Date('2023-06-30'),
        current: false,
        activities: ['Activity 1', 'Activity 2', 'Activity 3'],
        order: 1,
      });
    }

    // 4. Create projects
    const projects = await projectsService.findAll();
    
    if (projects.length > 0) {
      for (const project of projects) {
        await projectsService.remove(project.id);
      }
    }
    
    // Proyecto 1: Portfolio Profesional
    await projectsService.create({
      title: 'Portfolio Profesional',
      description: 'Portfolio profesional desarrollado con Next.js y NestJS. Aplicación que muestra información profesional, proyectos, experiencia y formación académica. Los datos se gestionan desde la base de datos.',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'NestJS', 'PostgreSQL', 'TypeORM', 'Tailwind CSS', 'shadcn/ui', 'Docker'],
      githubUrl: 'https://github.com/DevAlvaroHA/portfolio',
      liveUrl: 'https://aha-portfolio.vercel.app/',
      features: [
        'Diseño responsive optimizado para todos los dispositivos',
        'API REST con documentación Swagger',
        'Gestión de datos con PostgreSQL y TypeORM',
        'Panel de administración para editar contenido',
        'Deployment en Vercel (frontend) y Render (backend)'
      ],
      featured: true,
      category: 'Full Stack',
      order: 1,
    });

    // Proyecto 2: Perfil GitHub (DevAlvaroHA)
    await projectsService.create({
      title: 'DevAlvaroHA - Perfil Profesional',
      description: 'Perfil profesional de GitHub que presenta mis habilidades como Full-Stack Developer con especialización en Sistemas, Redes, DevOps, Cloud y Ciberseguridad.',
      technologies: ['JavaScript', 'Python', 'React', 'Node.js', 'PostgreSQL', 'MySQL', 'Docker', 'Linux', 'Windows Server', 'Git'],
      githubUrl: 'https://github.com/DevAlvaroHA/DevAlvaroHA',
      features: [
        'Presentación completa de tecnologías y habilidades',
        'Stack tecnológico: Frontend (React, Redux, Next.js), Backend (Node.js, Express, NestJS)',
        'DevOps & Infraestructura: Docker, Linux, Nginx, Apache',
        'Bases de datos: PostgreSQL, MySQL, MongoDB',
        'Sistemas, Redes & Seguridad: Windows Server, Firewalls, VPN, Kali Linux'
      ],
      featured: false,
      category: 'Other',
      order: 2,
    });

    // Proyecto 3: NotasMugiwara
    await projectsService.create({
      title: 'NotasMugiwara',
      description: 'Aplicación web Full Stack de gestión de notas construida con React, Vite y backend integrado. Permite agregar, visualizar y organizar notas de manera interactiva con selección de temas de color.',
      technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'Docker', 'Backend'],
      githubUrl: 'https://github.com/DevAlvaroHA/NotasMugiwara',
      features: [
        'Agregar y visualizar notas personalizadas',
        'Selector de colores para temas de notas',
        'Interfaz responsiva adaptada a móviles y escritorio',
        'Gestión de estado con React Hooks (useState, useEffect)',
        'Dockerización completa con Docker Compose'
      ],
      featured: false,
      category: 'Full Stack',
      order: 3,
    });

  } catch (error) {
    console.error('Error in seed:', error.message);
  } finally {
    await app.close();
  }
}

bootstrap();