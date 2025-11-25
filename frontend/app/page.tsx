'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Briefcase, FileText } from 'lucide-react';
import LoadingSpinner from '@/components/loading-spinner';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Partículas usando divs animados */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none' style={{zIndex: 1}}>
        {[...Array(100)].map((_, i) => (
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
      <section className='min-h-screen flex items-center justify-center px-6 relative' style={{zIndex: 10}}>
        <div className='max-w-5xl mx-auto text-center space-y-12 fade-in'>
          {/* Main Heading */}
          <div className='space-y-4 sm:space-y-6'>
            <h1 className='text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 leading-[0.85] drop-shadow-2xl px-4'>
              ÁLVARO
              <br />
              HERMOSILLA
            </h1>
            <div className='h-1 w-32 sm:w-40 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto shadow-2xl shadow-purple-500/60 rounded-full'></div>
          </div>

          {/* Subtitle */}
          <p className='text-base sm:text-xl md:text-2xl text-purple-200 font-light max-w-3xl mx-auto text-center leading-relaxed px-4'>
            Senior Technician ASIR & DAW | Full-Stack Web Developer | Systems & Networks | Cybersecurity
          </p>

          {/* CTA */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8 px-4'>
            <Link
              href='/projects'
              className='w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-600/50 hover:shadow-purple-600/70'
            >
              View My Work
              <ArrowRight className='h-5 w-5 group-hover:translate-x-2 transition-transform duration-300' />
            </Link>
            <Link
              href='/about'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border-2 border-purple-500/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-purple-600/20 hover:border-purple-400 hover:scale-105 transition-all duration-300'
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center pt-2'>
            <div className='w-1.5 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50'></div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className='py-24 px-6 border-t border-white/10'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* About Card */}
            <Link href='/about' className='group'>
              <div className='bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-purple-500/50 hover:bg-zinc-900 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 h-full'>
                <div className='flex flex-col space-y-4'>
                  <div className='w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:bg-purple-600/30 group-hover:scale-110 transition-all duration-300'>
                    <Code2 className='h-7 w-7 text-purple-400' />
                  </div>
                  <h3 className='text-2xl font-bold text-purple-400'>About</h3>
                  <p className='text-gray-400 leading-relaxed text-justify'>
                    Background, skills, and professional experience in web development
                  </p>
                  <div className='pt-2 flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors'>
                    Learn more
                    <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
                  </div>
                </div>
              </div>
            </Link>

            {/* Projects Card */}
            <Link href='/projects' className='group'>
              <div className='bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-purple-500/50 hover:bg-zinc-900 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 h-full'>
                <div className='flex flex-col space-y-4'>
                  <div className='w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:bg-purple-600/30 group-hover:scale-110 transition-all duration-300'>
                    <Briefcase className='h-7 w-7 text-purple-400' />
                  </div>
                  <h3 className='text-2xl font-bold text-purple-400'>Projects</h3>
                  <p className='text-gray-400 leading-relaxed text-justify'>
                    Portfolio of web development work and complete applications
                  </p>
                  <div className='pt-2 flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors'>
                    View projects
                    <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
                  </div>
                </div>
              </div>
            </Link>

            {/* Resume Card */}
            <Link href='/resume' className='group'>
              <div className='bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-purple-500/50 hover:bg-zinc-900 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 h-full'>
                <div className='flex flex-col space-y-4'>
                  <div className='w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:bg-purple-600/30 group-hover:scale-110 transition-all duration-300'>
                    <FileText className='h-7 w-7 text-purple-400' />
                  </div>
                  <h3 className='text-2xl font-bold text-purple-400'>Resume</h3>
                  <p className='text-gray-400 leading-relaxed text-justify'>
                    Complete professional CV and technical certifications
                  </p>
                  <div className='pt-2 flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors'>
                    View resume
                    <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


