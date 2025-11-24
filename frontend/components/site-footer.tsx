'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className='border-t border-purple-500/20 bg-gradient-to-br from-purple-950 via-purple-900 to-black py-20 mt-auto shadow-2xl shadow-purple-900/40'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          {/* Logo y Copyright */}
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-xl shadow-purple-500/50 overflow-hidden'>
              <img src='/favicon.ico' alt='Logo' className='w-8 h-8' />
            </div>
            <p className='text-purple-300'>
              © {new Date().getFullYear()} Álvaro Hermosilla Alameda. All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className='flex items-center gap-6'>
            <a 
              href='https://github.com/DevAlvaroHA'
              target='_blank'
              rel='noopener noreferrer'
              className='text-purple-400 hover:text-purple-300 hover:scale-110 transition-all duration-300 p-2'
              aria-label='GitHub'
            >
              <Github className='h-6 w-6' />
            </a>
            <a 
              href='https://www.linkedin.com/in/álvaro-hermosilla-alameda-587526339'
              target='_blank'
              rel='noopener noreferrer'
              className='text-purple-400 hover:text-purple-300 hover:scale-110 transition-all duration-300 p-2'
              aria-label='LinkedIn'
            >
              <Linkedin className='h-6 w-6' />
            </a>
            <a 
              href='mailto:alvaro.hermosilla.alameda@gmail.com'
              className='text-purple-400 hover:text-purple-300 hover:scale-110 transition-all duration-300 p-2'
              aria-label='Email'
            >
              <Mail className='h-6 w-6' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
