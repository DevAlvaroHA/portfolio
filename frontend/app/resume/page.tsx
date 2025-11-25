'use client';

import { useEffect, useState } from 'react';
import { Download, FileText } from 'lucide-react';
import LoadingSpinner from '@/components/loading-spinner';

export default function ResumePage() {
  const [loading, setLoading] = useState(true);
  const pdfUrl = '/CV_ÁlvaroHermosillaAlameda.pdf'; // URL del CV en la carpeta public

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

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
            Resume
          </h1>
          <div className='h-1 w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-12 shadow-2xl shadow-purple-500/60 rounded-full'></div>
          <p className='text-xl text-purple-200 font-light leading-relaxed mb-12 max-w-2xl'>
            Download my complete resume or view it directly below. Always updated with my latest experience and technical skills.
          </p>
          
          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-6'>
            <a 
              href={pdfUrl}
              download='Alvaro_Hermosilla_Resume.pdf'
              className='inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300'
            >
              <Download className='w-5 h-5' />
              Download PDF
            </a>
            <a 
              href='#pdf-viewer'
              className='inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-purple-500/50 text-white rounded-xl font-semibold hover:bg-purple-600/20 hover:border-purple-400 hover:scale-105 transition-all duration-300'
            >
              <FileText className='w-5 h-5' />
              View Below
            </a>
          </div>
        </div>
      </section>

      {/* PDF Viewer */}
      <section id='pdf-viewer' className='px-6 pb-32 pt-16 border-t border-white/10'>
        <div className='max-w-5xl mx-auto'>
          <div className='bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10 relative z-10 hover:border-purple-500/50 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300'>
            {/* Viewer Header */}
            <div className='flex items-center justify-between mb-6 pb-6 border-b border-purple-500/30 relative z-20'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/30 hover:scale-110 transition-all duration-300'>
                  <FileText className='w-6 h-6 text-purple-400' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-purple-400'>CV - Álvaro Hermosilla Alameda</h3>
                  <p className='text-sm text-purple-300'>Full-Stack Developer</p>
                </div>
              </div>
              <div className='flex gap-2 relative z-30'>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className='px-4 py-2 border border-purple-500 text-purple-400 rounded-md text-sm font-medium hover:bg-purple-600/10 hover:border-purple-400 transition-all duration-300 cursor-pointer relative'
                >
                  Full View
                </button>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const link = document.createElement('a');
                    link.href = pdfUrl;
                    link.download = 'Alvaro_Hermosilla_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className='px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-all duration-300 cursor-pointer relative'
                >
                  Download
                </button>
              </div>
            </div>

            {/* PDF Embed */}
            <div className='relative w-full bg-zinc-800 rounded-lg overflow-hidden' style={{ height: '80vh' }}>
              <iframe
                src={pdfUrl}
                className='w-full h-full'
                title='Resume PDF'
              />
            </div>

            {/* Instructions */}
            <div className='mt-6 p-4 bg-white/5 border border-white/10 rounded-lg'>
              <p className='text-center text-gray-400 text-sm'>
                Use <kbd className='px-2 py-1 bg-black rounded text-white'>Ctrl+Scroll</kbd> to zoom • 
                Click and drag to pan • Use fullscreen mode for better reading
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
