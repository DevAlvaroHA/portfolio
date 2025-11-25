'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Project } from '@/shared/interface';
import { getAllProjects } from '@/shared/portfolio-services';
import LoadingSpinner from '@/components/loading-spinner';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Backend', 'Full Stack', 'Cybersecurity'];

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch (error) {
        // Error fetching projects - silent fail
      }
    }

    // Mostrar loading por mínimo 800ms
    Promise.all([
      fetchProjects(),
      new Promise(resolve => setTimeout(resolve, 800))
    ]).then(() => setLoading(false));
  }, []);

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => {
        // Comparación flexible: normaliza espacios y mayúsculas
        const projectCategory = (p.category || '').toLowerCase().replace(/\s+/g, '');
        const filterValue = selectedFilter.toLowerCase().replace(/\s+/g, '');
        return projectCategory === filterValue;
      });

  if (loading) return <LoadingSpinner />;

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Partículas usando divs animados */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none' style={{zIndex: 1}}>
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className='absolute rounded-full bg-purple-500 animate-float'
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.4,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Animated grid background */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className='pt-32 pb-16 px-6 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-6xl md:text-8xl font-black mb-8 tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600'>
            Projects
          </h1>
          <div className='h-1 w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-12 shadow-2xl shadow-purple-500/60 rounded-full'></div>
          <p className='text-xl text-purple-200 font-light leading-relaxed max-w-2xl'>
            A collection of projects that showcase my skills in web development, from frontend interfaces to full-stack applications with modern technologies.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className='px-6 pb-16 border-t border-white/10 pt-12 relative z-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-wrap gap-4'>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-purple-600 text-white shadow-2xl shadow-purple-600/50 scale-105'
                    : 'bg-white/5 border-2 border-purple-500/30 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 hover:scale-105'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className='px-6 pb-32 relative z-20'>
        <div className='max-w-7xl mx-auto'>
          {filteredProjects.length === 0 ? (
            <div className='text-center py-20'>
              <p className='text-2xl text-slate-400'>No projects found in this category</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className='group bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:bg-zinc-900 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300'
                >
                  {/* Project Image */}
                  {project.imageUrl && (
                    <div className='relative h-48 overflow-hidden bg-zinc-800'>
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      />
                      {project.featured && (
                        <div className='absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded text-xs font-medium hover:scale-110 transition-transform duration-300'>
                          Featured
                        </div>
                      )}
                      {/* Category Badge */}
                      <div className='absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded text-sm font-medium text-white hover:bg-black transition-colors duration-300'>
                        {project.category}
                      </div>
                    </div>
                  )}
                  
                  {/* Project Info */}
                  <div className='p-6 space-y-4'>
                    <h3 className='text-xl font-semibold text-purple-400 group-hover:text-purple-300 transition-colors'>
                      {project.title}
                    </h3>
                    
                    <p className='text-gray-300 line-clamp-3 text-sm text-justify'>
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className='px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-md text-purple-300 text-xs font-medium hover:bg-purple-600/30 hover:border-purple-500/50 hover:scale-110 transition-all duration-300 cursor-default'
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className='px-3 py-1 text-gray-500 text-xs hover:text-gray-400 transition-colors cursor-default'>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className='flex gap-3 pt-2'>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target='_blank' 
                          rel='noopener noreferrer'
                          className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300'
                        >
                          <ExternalLink className='w-4 h-4' />
                          Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target='_blank' 
                          rel='noopener noreferrer'
                          className='flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-purple-500 text-purple-400 rounded-md text-sm font-medium hover:bg-purple-600/10 hover:border-purple-400 hover:scale-105 backdrop-blur-sm transition-all duration-300'
                        >
                          <Github className='w-4 h-4' />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
