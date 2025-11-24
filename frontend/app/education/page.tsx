'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Education } from '@/shared/interface';
import { getAllEducation } from '@/shared/portfolio-services';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import LoadingSpinner from '@/components/loading-spinner';

export default function EducationPage() {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEducation() {
      try {
        const data = await getAllEducation();
        setEducation(data);
      } catch (error) {
        console.error('Error fetching education:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchEducation();
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
              <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <GraduationCap className='h-8 w-8 text-white' />
              </div>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Formación Académica
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Mi trayectoria educativa y certificaciones que respaldan mi experiencia profesional
            </p>
          </div>

          {/* Education Cards */}
          <div className='grid grid-cols-1 gap-8'>
            {education.map((edu) => (
              <div 
                key={edu.id}
                className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300'
              >
                {/* Header */}
                <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-6'>
                  <div className='mb-4 md:mb-0'>
                    <h3 className='text-2xl font-bold text-white mb-2'>
                      {edu.degree}
                    </h3>
                    <div className='flex items-center gap-2 text-purple-400 text-lg font-semibold mb-3'>
                      <GraduationCap className='h-5 w-5' />
                      {edu.institution}
                    </div>
                    {edu.location && (
                      <div className='flex items-center gap-2 text-gray-400'>
                        <MapPin className='h-4 w-4' />
                        {edu.location}
                      </div>
                    )}
                  </div>
                  
                  <div className='flex flex-col items-start md:items-end gap-2'>
                    <div className='flex items-center gap-2 text-gray-300 font-medium'>
                      <Calendar className='h-4 w-4' />
                      {new Date(edu.startDate).getFullYear()}
                      {' - '}
                      {edu.endDate 
                        ? new Date(edu.endDate).getFullYear()
                        : 'Presente'
                      }
                    </div>
                    {edu.grade && (
                      <div className='flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full'>
                        <Award className='h-4 w-4 text-yellow-400' />
                        <span className='text-yellow-400 text-sm font-medium'>{edu.grade}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                {edu.description && (
                  <p className='text-gray-300 mb-6 leading-relaxed'>
                    {edu.description}
                  </p>
                )}

                {/* Activities & Achievements */}
                {edu.activities && edu.activities.length > 0 && (
                  <div className='mb-6'>
                    <h4 className='text-white font-semibold mb-3'>Actividades y Logros:</h4>
                    <ul className='space-y-2'>
                      {edu.activities.map((activity, idx) => (
                        <li key={idx} className='flex items-start gap-3 text-gray-400'>
                          <div className='w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0' />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Field of Study Badge */}
                {edu.fieldOfStudy && (
                  <div className='mt-6 pt-6 border-t border-gray-700'>
                    <span className='inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 font-medium'>
                      Área de estudio: {edu.fieldOfStudy}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Empty state */}
          {education.length === 0 && (
            <div className='text-center py-20'>
              <GraduationCap className='h-16 w-16 text-gray-600 mx-auto mb-4' />
              <p className='text-gray-400 text-lg'>No hay formación académica disponible</p>
            </div>
          )}

          {/* Certifications Section */}
          <div className='mt-20 text-center'>
            <div className='bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-purple-500/20'>
              <Award className='h-12 w-12 text-purple-400 mx-auto mb-4' />
              <h2 className='text-3xl font-bold text-white mb-4'>
                Aprendizaje Continuo
              </h2>
              <p className='text-gray-300 max-w-2xl mx-auto'>
                Comprometido con el desarrollo profesional continuo a través de cursos, 
                certificaciones y participación en la comunidad de desarrolladores.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
