'use client';

import { useState, useEffect } from 'react';
import { Shield, Calendar, MapPin, Briefcase, GraduationCap, Code, Sparkles } from 'lucide-react';
import { getActiveProfile, getAllExperience, getAllEducation } from '@/shared/portfolio-services';
import LoadingSpinner from '@/components/loading-spinner';

export default function AboutPage() {
  const [profile, setProfile] = useState<any>(null);
  const [experience, setExperience] = useState<any[]>([]);
  const [education, setEducation] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [profileData, experienceData, educationData] = await Promise.all([
          getActiveProfile(),
          getAllExperience(),
          getAllEducation()
        ]);
        setProfile(profileData);
        setExperience(experienceData);
        setEducation(educationData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Mostrar loading por mínimo 800ms
    Promise.all([
      fetchData(),
      new Promise(resolve => setTimeout(resolve, 800))
    ]).then(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;

  const skills = profile?.skills || [];

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
      <section className='pt-32 pb-20 px-6 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-6xl md:text-8xl font-black mb-8 tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600'>
            About Me
          </h1>
          <div className='h-1 w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-12 shadow-2xl shadow-purple-500/60 rounded-full'></div>
          <div className='text-lg text-gray-300 leading-relaxed space-y-6'>
            {profile?.bio?.split('\n').map((paragraph: string, index: number) => (
              <p key={index} className='text-justify'>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className='py-20 px-6 border-t border-white/10'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold mb-16 flex items-center gap-4 text-purple-400'>
            <Sparkles className='w-10 h-10' />
            Specialties
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-purple-500/50 hover:bg-zinc-900 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300'>
              <div className='flex flex-col space-y-4'>
                <div className='w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/30 hover:scale-110 transition-all duration-300'>
                  <Code className='w-6 h-6 text-purple-400' />
                </div>
                <h3 className='text-xl font-semibold text-purple-400'>Full-Stack Web Developer</h3>
                <p className='text-gray-300 text-sm leading-relaxed text-justify'>
                  React, Node.js, MySQL. Desarrollo completo de aplicaciones web que optimizan procesos, conectando frontend moderno con backend robusto y escalable
                </p>
              </div>
            </div>

            <div className='bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-purple-500/50 hover:bg-zinc-900 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300'>
              <div className='flex flex-col space-y-4'>
                <div className='w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/30 hover:scale-110 transition-all duration-300'>
                  <svg className='w-6 h-6 text-purple-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-purple-400'>Sistemas & Redes + DevOps</h3>
                <p className='text-gray-300 text-sm leading-relaxed text-justify'>
                  Linux, Docker, Cloud & Virtualización. Administración de sistemas, automatización con Python y entornos IT robustos que escalan de forma segura
                </p>
              </div>
            </div>

            <div className='bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-purple-500/50 hover:bg-zinc-900 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300'>
              <div className='flex flex-col space-y-4'>
                <div className='w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/30 hover:scale-110 transition-all duration-300'>
                  <Shield className='w-6 h-6 text-purple-400' />
                </div>
                <h3 className='text-xl font-semibold text-purple-400'>Ciberseguridad & UX</h3>
                <p className='text-gray-300 text-sm leading-relaxed text-justify'>
                  Ethical Hacking, Análisis Forense Digital y Firewalls. Protección de infraestructuras con enfoque en experiencia de usuario segura y funcional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className='py-20 px-6 border-t border-white/10'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold mb-16 flex items-center gap-4 text-purple-400'>
            <Briefcase className='w-10 h-10' />
            Experience
          </h2>
          
          <div className='space-y-6'>
            {experience.map((exp) => (
              <div 
                key={exp.id}
                className='bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-purple-500/50 hover:bg-zinc-900 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer'
              >
                <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-4'>
                  <div>
                    <h3 className='text-2xl font-semibold text-purple-400 mb-2'>{exp.position}</h3>
                    <p className='text-gray-300 font-medium text-lg'>{exp.company}</p>
                  </div>
                  <div className='flex items-center gap-2 text-gray-500 text-sm mt-2 md:mt-0'>
                    <Calendar className='h-4 w-4' />
                    <span>
                      {new Date(exp.startDate).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
                      {' - '}
                      {exp.current ? 'Actualidad' : new Date(exp.endDate).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </div>
                
                {exp.location && (
                  <div className='flex items-center gap-2 text-gray-500 text-sm mb-4'>
                    <MapPin className='h-4 w-4' />
                    <span>{exp.location}</span>
                  </div>
                )}
                
                <p className='text-gray-300 mb-4 leading-relaxed text-justify'>{exp.description}</p>
                
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className='flex flex-wrap gap-2'>
                    {exp.technologies.map((tech: string, idx: number) => (
                      <span 
                        key={idx}
                        className='px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-md text-purple-300 text-xs font-medium hover:bg-purple-600/30 hover:border-purple-500/50 hover:scale-110 transition-all duration-300 cursor-default'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className='py-20 px-6 border-t border-white/10'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold mb-16 flex items-center gap-4 text-purple-400'>
            <GraduationCap className='w-10 h-10' />
            Education
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {education.map((edu) => (
              <div 
                key={edu.id}
                className='bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-purple-500/50 hover:bg-zinc-900 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300'
              >
                <div className='mb-4'>
                  <h3 className='text-xl font-semibold text-purple-400 mb-2'>{edu.degree}</h3>
                  <p className='text-gray-300 font-medium'>{edu.institution}</p>
                  {edu.fieldOfStudy && (
                    <p className='text-gray-500 text-sm mt-1'>{edu.fieldOfStudy}</p>
                  )}
                </div>
                
                <div className='flex items-center gap-2 text-gray-500 text-sm mb-4'>
                  <Calendar className='h-4 w-4' />
                  <span>
                    {new Date(edu.startDate).getFullYear()}
                    {' - '}
                    {edu.current ? 'Actualidad' : new Date(edu.endDate).getFullYear()}
                  </span>
                </div>
                
                {edu.description && (
                  <p className='text-gray-300 text-sm mb-4 text-justify'>{edu.description}</p>
                )}
                
                {edu.activities && edu.activities.length > 0 && (
                  <div className='flex flex-wrap gap-2'>
                    {edu.activities.map((activity: string, idx: number) => (
                      <span 
                        key={idx}
                        className='px-2 py-1 bg-purple-600/20 border border-purple-500/30 rounded text-purple-300 text-xs hover:bg-purple-600/30 hover:border-purple-500/50 hover:scale-110 transition-all duration-300 cursor-default'
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className='py-20 px-6 pb-32 border-t border-white/10'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold mb-16 text-purple-400'>Tech Stack</h2>
          
          <div className='bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-purple-500/50 hover:bg-zinc-900 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300'>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3'>
              {skills.map((skill: string, index: number) => (
                <div 
                  key={index}
                  className='group flex items-center justify-center p-4 bg-purple-600/20 border border-purple-500/30 rounded-lg hover:border-purple-500/50 hover:bg-purple-600/30 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 text-center cursor-pointer'
                >
                  <span className='text-sm text-purple-300 font-medium group-hover:scale-105 transition-transform duration-300'>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
