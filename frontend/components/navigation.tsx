'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
  ];
  
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-900/30 transition-all duration-500'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-7'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='group flex items-center gap-2 sm:gap-3'>
            <div className='w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-all duration-300 overflow-hidden'>
              <img src='/favicon.ico' alt='Logo' className='w-6 h-6 sm:w-7 sm:h-7' />
            </div>
            <span className='text-base sm:text-lg font-semibold text-purple-300 tracking-tight group-hover:text-purple-200 transition-all duration-300'>
              Portfolio
            </span>
          </Link>
          
          {/* Navigation Desktop */}
          <nav className='hidden md:flex items-center gap-2'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg ${
                  pathname === link.href
                    ? 'text-white bg-purple-600 shadow-xl shadow-purple-500/40 scale-105'
                    : 'text-purple-200 hover:text-white hover:bg-purple-600/30 hover:scale-105'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden p-2 text-purple-300 hover:text-white transition-colors'
            aria-label='Toggle menu'
          >
            {isMobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className='md:hidden mt-4 pb-4 space-y-2 animate-in slide-in-from-top duration-300'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-white bg-purple-600 shadow-lg shadow-purple-500/40'
                    : 'text-purple-200 hover:text-white hover:bg-purple-600/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
