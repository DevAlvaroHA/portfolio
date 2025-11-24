'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Experience } from '@/shared/interface';
import { getAllExperience } from '@/shared/portfolio-services';
import { Briefcase, Calendar, MapPin, Check } from 'lucide-react';
import LoadingSpinner from '@/components/loading-spinner';

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExperience() {
      try {
        const data = await getAllExperience();
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experience:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchExperience();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <Header />
      
      <main className='pt-24 pb-20 px-4'>
        <div className='max-w-5xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <div className='inline-block mb-6'>
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Briefcase className='h-8 w-8 text-white' />
              </div>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
              Experiencia Laboral
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Mi trayectoria profesional y las empresas donde he contribuido al desarrollo de soluciones tecnológicas
            </p>
          </div>

          {/* Timeline */}
          <div className='relative'>
            {/* Vertical line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent hidden md:block' />

            <div className='space-y-12'>
              {experiences.map((exp, index) => (
                <div key={exp.id} className='relative'>
                  {/* Timeline dot */}
                  <div className='absolute left-8 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 hidden md:block transform -translate-x-1.5'>
                    <div className='absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75' />
                  </div>

                  {/* Content card */}
                  <div className='md:ml-20 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300'>
                    {/* Header */}
                    <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-4'>
                      <div className='mb-4 md:mb-0'>
                        <h3 className='text-2xl font-bold text-white mb-2'>
                          {exp.position}
                        </h3>
                        <div className='flex items-center gap-2 text-blue-400 text-lg font-semibold mb-3'>
                          <Briefcase className='h-5 w-5' />
                          {exp.company}
                        </div>
                        {exp.location && (
                          <div className='flex items-center gap-2 text-gray-400'>
                            <MapPin className='h-4 w-4' />
                            {exp.location}
                          </div>
                        )}
                      </div>
                      
                      <div className='flex flex-col items-start md:items-end gap-2'>
                        <div className='flex items-center gap-2 text-gray-300 font-medium'>
                          <Calendar className='h-4 w-4' />
                          {new Date(exp.startDate).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
                          {' - '}
                          {exp.current 
                            ? 'Presente' 
                            : new Date(exp.endDate!).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })
                          }
                        </div>
                        {exp.current && (
                          <span className='px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-medium'>
                            Trabajo actual
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className='text-gray-300 mb-6 leading-relaxed'>
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <div className='mb-6'>
                        <h4 className='text-white font-semibold mb-3'>Responsabilidades:</h4>
                        <ul className='space-y-2'>
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className='flex items-start gap-3 text-gray-400'>
                              <Check className='h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5' />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div>
                        <h4 className='text-white font-semibold mb-3'>Tecnologías utilizadas:</h4>
                        <div className='flex flex-wrap gap-2'>
                          {exp.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className='px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Company URL */}
                    {exp.companyUrl && (
                      <div className='mt-6 pt-6 border-t border-gray-700'>
                        <a 
                          href={exp.companyUrl} 
                          target='_blank' 
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors'
                        >
                          Visitar sitio web de {exp.company}
                          <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Empty state */}
          {experiences.length === 0 && (
            <div className='text-center py-20'>
              <Briefcase className='h-16 w-16 text-gray-600 mx-auto mb-4' />
              <p className='text-gray-400 text-lg'>No hay experiencia laboral disponible</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
