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
        title: 'Full-Stack Web Developer | Systems & Networks | DevOps & Cloud',
        bio: 'I am passionate about connecting software development with the infrastructure that makes it possible. I combine Full-Stack Web development (React, Node.js, MySQL) with system administration and DevOps best practices (Linux, Docker), creating solutions that work, scale, and remain secure. I believe in technology as a driver of efficiency and opportunity: from web applications that optimize processes to robust cloud environments protected against threats.',
        location: 'Spain',
        email: 'alvaro.hermosilla.alameda@gmail.com',
        phone: undefined,
        linkedinUrl: 'https://es.linkedin.com/in/%C3%A1lvaro-hermosilla-alameda-587526339',
        githubUrl: 'https://github.com/DevAlvaroHA',
        skills: [
          'JavaScript', 'Python', 'HTML5', 'CSS3', 'APIs REST', 'UX',
          'React', 'Node.js', 'MySQL', 'Linux', 'Docker', 'Virtualización',
          'CI/CD', 'Administración de Sistemas', 'Windows Server', 'Troubleshooting', 'Monitoring', 'Ethical Hacking',
          'Análisis Forense Digital', 'Firewalls', 'Git', 'Scrum', 'Soporte Técnico', 'TypeScript'
        ],
        languages: ['Spanish (Native)', 'English'],
        isActive: true,
      });
    }

    // 2. Create experience
    const experiences = await experienceService.findAll();
    
    if (experiences.length === 0) {
      await experienceService.create({
        company: 'Futura Tickets',
        position: 'Frontend Engineer | User Experience Architect',
        description: 'Desarrollo de una página web para compra y venta de entradas utilizando tecnología blockchain.',
        responsibilities: [
          'Desarrollo de una página web para compra y venta de entradas utilizando tecnología blockchain',
          'Implementación de funciones de transacción segura y gestión de usuarios',
          'Colaboración remota en un entorno de trabajo ágil'
        ],
        technologies: ['Blockchain', 'Web Development', 'JavaScript', 'React', 'Node.js'],
        startDate: new Date('2025-03-01'),
        endDate: new Date('2025-05-01'),
        current: false,
        location: 'En remoto',
        companyUrl: undefined,
        employmentType: 'Contrato de prácticas',
        order: 1,
      });
    }

    // 3. Create education
    const education = await educationService.findAll();
    
    if (education.length === 0) {
      await educationService.create({
        institution: 'IES Valle Inclán',
        degree: 'Técnico Superior en Administración de Sistemas Informáticos en Red',
        fieldOfStudy: 'Administración de sistemas informáticos en red',
        description: 'Formación técnica especializada en administración de sistemas, redes y infraestructura IT.',
        startDate: new Date('2025-09-01'),
        endDate: new Date('2027-06-30'),
        current: false,
        activities: [
          'Gestión de redes',
          'Aplicaciones de gestión de redes',
          'Seguridad de redes',
          'Administración de sistemas',
          'Administración de sistemas Linux',
          'Sistema de gestión de bases de datos (SGBD)',
          'Administración de base de datos de Oracle',
          'Sistemas operativos',
          'Administración de sistemas operativos'
        ],
        order: 1,
      });

      await educationService.create({
        institution: 'IES Isidra de Guzmán',
        degree: 'Técnico Superior en Desarrollo de Aplicaciones Web',
        fieldOfStudy: 'Programación informática, aplicaciones específicas',
        description: 'Formación técnica en desarrollo de aplicaciones web y programación.',
        startDate: new Date('2023-09-01'),
        endDate: new Date('2025-06-30'),
        current: false,
        activities: [
          'Sistema de gestión de bases de datos (SGBD)',
          'Administración de base de datos de Oracle',
          'Diseño web',
          'Servicios web',
          'Aplicaciones web',
          'Web 2.0',
          'Administración de páginas web',
          'Gestión de proyectos web',
          'Diseño de bases de datos'
        ],
        order: 2,
      });

      await educationService.create({
        institution: 'IES Ignacio Ellacuría',
        degree: 'Bachillerato de Ciencias Sociales',
        fieldOfStudy: 'Ciencias sociales',
        description: 'Formación en ciencias sociales con enfoque en trabajo en equipo y liderazgo.',
        startDate: new Date('2021-09-01'),
        endDate: new Date('2023-06-30'),
        current: false,
        activities: [
          'Formación',
          'Trabajo en equipo',
          'Liderazgo'
        ],
        order: 3,
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
      title: 'Professional Portfolio',
      description: 'Professional portfolio developed with Next.js and NestJS. Application that displays professional information, projects, experience and academic background. Data is managed from the database.',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'NestJS', 'PostgreSQL', 'TypeORM', 'Tailwind CSS', 'shadcn/ui', 'Docker'],
      githubUrl: 'https://github.com/DevAlvaroHA/portfolio',
      liveUrl: 'https://aha-portfolio.vercel.app/',
      features: [
        'Responsive design optimized for all devices',
        'REST API with Swagger documentation',
        'Data management with PostgreSQL and TypeORM',
        'Admin panel to edit content',
        'Deployment on Vercel (frontend) and Render (backend)'
      ],
      featured: true,
      category: 'Full Stack',
      order: 1,
    });

    // Proyecto 2: Perfil GitHub (DevAlvaroHA)
    await projectsService.create({
      title: 'DevAlvaroHA - Professional Profile',
      description: 'GitHub professional profile showcasing my skills as a Full-Stack Developer with specialization in Systems, Networks, DevOps, Cloud and Cybersecurity.',
      technologies: ['JavaScript', 'Python', 'React', 'Node.js', 'PostgreSQL', 'MySQL', 'Docker', 'Linux', 'Windows Server', 'Git'],
      githubUrl: 'https://github.com/DevAlvaroHA/DevAlvaroHA',
      features: [
        'Complete presentation of technologies and skills',
        'Tech stack: Frontend (React, Redux, Next.js), Backend (Node.js, Express, NestJS)',
        'DevOps & Infrastructure: Docker, Linux, Nginx, Apache',
        'Databases: PostgreSQL, MySQL, MongoDB',
        'Systems, Networks & Security: Windows Server, Firewalls, VPN, Kali Linux'
      ],
      featured: false,
      category: 'Other',
      order: 2,
    });

    // Proyecto 3: NotasMugiwara
    await projectsService.create({
      title: 'NotasMugiwara',
      description: 'Full Stack notes management web application built with React, Vite and integrated backend. Allows adding, viewing and organizing notes interactively with color theme selection.',
      technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'Docker', 'Backend'],
      githubUrl: 'https://github.com/DevAlvaroHA/NotasMugiwara',
      features: [
        'Add and view personalized notes',
        'Color selector for note themes',
        'Responsive interface adapted to mobile and desktop',
        'State management with React Hooks (useState, useEffect)',
        'Complete Dockerization with Docker Compose'
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