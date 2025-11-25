'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className='border-t border-purple-500/20 bg-gradient-to-br from-purple-950 via-purple-900 to-black py-12 sm:py-20 mt-auto shadow-2xl shadow-purple-900/40'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8'>
          {/* Logo y Copyright */}
          <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left'>
            <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-xl shadow-purple-500/50 overflow-hidden'>
              <img src='/favicon.ico' alt='Logo' className='w-7 h-7 sm:w-8 sm:h-8' />
            </div>
            <p className='text-purple-300 text-sm sm:text-base'>
              © {new Date().getFullYear()} Álvaro Hermosilla Alameda. All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className='flex items-center gap-4 sm:gap-6'>
            <a 
              href='https://github.com/DevAlvaroHA'
              target='_blank'
              rel='noopener noreferrer'
              className='text-purple-400 hover:text-purple-300 hover:scale-110 transition-all duration-300 p-2'
              aria-label='GitHub'
            >
              <Github className='h-5 w-5 sm:h-6 sm:w-6' />
            </a>
            <a 
              href='https://www.linkedin.com/in/álvaro-hermosilla-alameda-587526339'
              target='_blank'
              rel='noopener noreferrer'
              className='text-purple-400 hover:text-purple-300 hover:scale-110 transition-all duration-300 p-2'
              aria-label='LinkedIn'
            >
              <Linkedin className='h-5 w-5 sm:h-6 sm:w-6' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
