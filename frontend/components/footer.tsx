import Link from 'next/link';
import { Code2, Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-purple-950 via-purple-900 to-black border-t border-purple-500/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Sección de marca y descripción */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Code2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </h3>
                <p className="text-sm text-purple-300">Desarrollador Full-Stack</p>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-md leading-relaxed">
              Apasionado por crear soluciones web innovadoras y escalables. 
              Especializado en desarrollo full-stack con tecnologías modernas.
            </p>
            
            {/* Info de contacto */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-purple-300">
                <Mail className="h-4 w-4 text-purple-400" />
                <span>contacto@portfolio.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-purple-300">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>España</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-purple-300">
                <Calendar className="h-4 w-4 text-purple-400" />
                <span>Disponible para proyectos</span>
              </div>
            </div>
          </div>

          {/* Navegación rápida */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-purple-300 flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Navegación
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-purple-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-purple-600 rounded-full group-hover:bg-purple-400 transition-colors duration-200"></div>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-purple-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-purple-600 rounded-full group-hover:bg-purple-400 transition-colors duration-200"></div>
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-purple-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-purple-600 rounded-full group-hover:bg-purple-400 transition-colors duration-200"></div>
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-purple-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-purple-600 rounded-full group-hover:bg-purple-400 transition-colors duration-200"></div>
                  Experiencia
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-purple-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-purple-600 rounded-full group-hover:bg-purple-400 transition-colors duration-200"></div>
                  Educación
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-purple-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-purple-600 rounded-full group-hover:bg-purple-400 transition-colors duration-200"></div>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-purple-300 flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Conéctate
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <Linkedin className="h-4 w-4 text-purple-400" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href={process.env.NEXT_PUBLIC_GITHUB_URL || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <Github className="h-4 w-4 text-purple-400" />
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-purple-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group">
                  <Mail className="h-4 w-4 text-purple-400" />
                  Email
                </Link>
              </li>
            </ul>
            
            {/* CTA para descarga de CV */}
            <div className="pt-4">
              <a 
                href="/cv.pdf" 
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-purple-900 shadow-lg shadow-purple-500/50 transition-all duration-200"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </a>
            </div>
          </div>
        </div>

        {/* Sección inferior */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-purple-300 text-sm">
              <span>© {currentYear} Portfolio.</span>
              <span>Todos los derechos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-purple-300 hover:text-purple-400 text-sm transition-colors duration-200">
                Privacidad
              </Link>
              <div className="w-px h-4 bg-purple-600"></div>
              <Link href="/terms" className="text-purple-300 hover:text-purple-400 text-sm transition-colors duration-200">
                Términos
              </Link>
              <div className="w-px h-4 bg-purple-600"></div>
              <Link href="/contact" className="text-purple-300 hover:text-purple-400 text-sm transition-colors duration-200">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
}
