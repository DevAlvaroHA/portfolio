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
      console.log('🌱 Iniciando seed...');

      // Crear perfil
      const profiles = await this.profileService.findAll();
      if (profiles.length === 0) {
        await this.profileService.create({
          fullName: 'Álvaro Hermosilla Alameda',
          title: 'Técnico Superior ASIR & DAW | Full-Stack Web Developer | Sistemas & Redes | Ciberseguridad: Ethical Hacking & Forense Digital | UX | Python Automation | DevOps (Docker, Linux) | Cloud & Virtualización | Inglés B2',
          bio: 'Me apasiona conectar el desarrollo de software con la infraestructura que lo hace posible. Combino Full-Stack Web (React, Node.js, MySQL) con Sistemas & Redes, automatización con Python y buenas prácticas DevOps (Linux, Docker), creando soluciones que funcionan, escalan y se mantienen seguras.\n\nCreo en la tecnología como motor de eficiencia y oportunidad: desde aplicaciones web que optimizan procesos hasta entornos Cloud robustos y protegidos frente a amenazas. La ciberseguridad (Ethical Hacking y análisis forense digital) forma parte de mi enfoque para garantizar que lo que se construye, se protege.\n\nSoy una persona curiosa, analítica y orientada a resultados. Disfruto aprendiendo nuevas herramientas, resolviendo problemas complejos y trabajando en equipo para convertir ideas en soluciones tecnológicas reales que aporten valor al negocio y mejoren la experiencia del usuario.\n\nMi objetivo es seguir creciendo profesionalmente en proyectos desafiantes, donde pueda aportar en desarrollo, sistemas y seguridad, impulsando soluciones creativas, sostenibles y centradas en la calidad.',
          location: 'España',
          email: 'alvaro.hermosilla.alameda@gmail.com',
          phone: undefined,
          linkedinUrl: 'https://www.linkedin.com/in/álvaro-hermosilla-alameda-587526339',
          githubUrl: 'https://github.com/DevAlvaroHA',
          skills: [
            'JavaScript', 'Python', 'HTML5', 'CSS3', 'APIs REST', 'UX',
            'React', 'Node.js', 'MySQL',
            'Linux', 'Docker', 'Virtualización', 'CI/CD',
            'Administración de Sistemas', 'Windows Server', 'Troubleshooting', 'Monitoring',
            'Ethical Hacking', 'Análisis Forense Digital', 'Firewalls',
            'Git', 'Scrum', 'Soporte Técnico', 'TypeScript'
          ],
          languages: ['Español (Nativo)', 'Inglés (B2)'],
          isActive: true,
        });
      }

      // Crear experiencia
      const experiences = await this.experienceService.findAll();
      if (experiences.length === 0) {
        await this.experienceService.create({
          company: 'Futura Tickets',
          position: 'Frontend Engineer | User Experience Architect',
          description: 'Contrato de prácticas en remoto desarrollando interfaces de usuario y optimizando la experiencia de usuario.',
          responsibilities: [
            'Desarrollo de interfaces con tecnologías frontend modernas',
            'Diseño y arquitectura de experiencia de usuario',
            'Colaboración con equipos remotos',
            'Implementación de mejores prácticas UX'
          ],
          technologies: ['Frontend', 'UX', 'React'],
          startDate: new Date('2025-03-01'),
          endDate: new Date('2025-05-31'),
          current: false,
          location: 'En remoto',
          companyUrl: undefined,
          employmentType: 'Contrato de prácticas',
          order: 1,
        });
      }

      // Crear educación
      const education = await this.educationService.findAll();
      if (education.length === 0) {
        await this.educationService.create({
          institution: 'IES Valle Inclán',
          degree: 'Ciclo Formativo de Grado Superior',
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

        await this.educationService.create({
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

        await this.educationService.create({
          institution: 'IES Ignacio Ellacuría',
          degree: 'Bachillerato de Ciencias Sociales',
          fieldOfStudy: 'Ciencias sociales',
          description: 'Formación en ciencias sociales con enfoque en trabajo en equipo y liderazgo.',
          startDate: new Date('2021-09-01'),
          endDate: new Date('2023-06-30'),
          current: false,
          activities: ['Formación', 'Trabajo en equipo', 'Liderazgo'],
          order: 3,
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
        title: 'Portfolio Profesional',
        description: 'Portfolio personal desarrollado con Next.js y NestJS, mostrando proyectos, experiencia y formación académica con diseño minimalista.',
        technologies: ['Next.js', 'React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Docker'],
        githubUrl: 'https://github.com/DevAlvaroHA/Portfolio',
        features: ['Diseño responsive', 'API REST', 'Base de datos PostgreSQL', 'Docker deployment'],
        featured: true,
        category: 'Full Stack',
        order: 1,
      });

      await this.projectsService.create({
        title: 'E-Commerce Platform',
        description: 'Plataforma completa de comercio electrónico con gestión de productos, carrito de compras, pagos integrados y panel de administración.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux'],
        githubUrl: 'https://github.com/DevAlvaroHA',
        liveUrl: 'https://example.com',
        features: ['Pasarela de pago', 'Gestión de inventario', 'Sistema de usuarios', 'Dashboard admin'],
        featured: true,
        category: 'Full Stack',
        order: 2,
      });

      await this.projectsService.create({
        title: 'Dashboard Analytics',
        description: 'Panel de análisis interactivo con gráficos dinámicos, visualización de datos en tiempo real y diseño responsive.',
        technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS', 'Vite'],
        githubUrl: 'https://github.com/DevAlvaroHA',
        liveUrl: 'https://example.com',
        features: ['Gráficos interactivos', 'Tema oscuro/claro', 'Responsive design', 'Animaciones'],
        featured: false,
        category: 'Frontend',
        order: 3,
      });

      await this.projectsService.create({
        title: 'Task Manager App',
        description: 'Aplicación de gestión de tareas con drag & drop, filtros avanzados y diseño moderno con animaciones fluidas.',
        technologies: ['Vue.js', 'TypeScript', 'Pinia', 'Tailwind CSS'],
        githubUrl: 'https://github.com/DevAlvaroHA',
        features: ['Drag and Drop', 'Filtros múltiples', 'LocalStorage', 'PWA'],
        featured: false,
        category: 'Frontend',
        order: 4,
      });

      await this.projectsService.create({
        title: 'RESTful API - Blog',
        description: 'API REST completa para un sistema de blog con autenticación JWT, roles de usuario, comentarios y sistema de likes.',
        technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'JWT', 'Swagger'],
        githubUrl: 'https://github.com/DevAlvaroHA',
        features: ['Autenticación JWT', 'CRUD completo', 'Validación de datos', 'Documentación Swagger'],
        featured: false,
        category: 'Backend',
        order: 5,
      });

      await this.projectsService.create({
        title: 'Microservices Architecture',
        description: 'Arquitectura de microservicios con API Gateway, servicios independientes y comunicación entre servicios mediante RabbitMQ.',
        technologies: ['Node.js', 'Express', 'Docker', 'RabbitMQ', 'MongoDB', 'Redis'],
        githubUrl: 'https://github.com/DevAlvaroHA',
        features: ['API Gateway', 'Service discovery', 'Message queue', 'Load balancing'],
        featured: false,
        category: 'Backend',
        order: 6,
      });

      await this.projectsService.create({
        title: 'Vulnerability Scanner',
        description: 'Herramienta de escaneo de vulnerabilidades web automatizada que detecta XSS, SQL Injection, CSRF y otras vulnerabilidades comunes.',
        technologies: ['Python', 'Selenium', 'BeautifulSoup', 'SQLMap', 'Burp Suite'],
        githubUrl: 'https://github.com/DevAlvaroHA',
        features: ['Escaneo automático', 'Reportes detallados', 'OWASP Top 10', 'CLI interface'],
        featured: true,
        category: 'Cybersecurity',
        order: 7,
      });

      await this.projectsService.create({
        title: 'Network Security Monitor',
        description: 'Sistema de monitoreo de seguridad de red con detección de intrusiones, análisis de tráfico y alertas en tiempo real.',
        technologies: ['Python', 'Scapy', 'Wireshark', 'Linux', 'Suricata'],
        githubUrl: 'https://github.com/DevAlvaroHA',
        features: ['IDS/IPS', 'Análisis de paquetes', 'Alertas automáticas', 'Dashboard web'],
        featured: false,
        category: 'Cybersecurity',
        order: 8,
      });

      await this.projectsService.create({
        title: 'Password Audit Tool',
        description: 'Herramienta de auditoría de contraseñas que evalúa fortaleza, detecta patrones comunes y genera reportes de seguridad.',
        technologies: ['Python', 'Hashcat', 'John the Ripper', 'Regex', 'SQLite'],
        githubUrl: 'https://github.com/DevAlvaroHA',
        features: ['Análisis de fuerza', 'Diccionarios personalizados', 'Reportes PDF', 'Hash cracking'],
        featured: false,
        category: 'Cybersecurity',
        order: 9,
      });

      return {
        success: true,
        message: '✨ Seed completado! Base de datos poblada con datos de Álvaro.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error ejecutando seed',
        error: error.message,
      };
    }
  }
}
