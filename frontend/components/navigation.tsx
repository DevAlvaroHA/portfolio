'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
  ];
  
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-900/30 transition-all duration-500'>'
      <div className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='group flex items-center gap-3'>
            <div className='w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-all duration-300 overflow-hidden'>
              <img src='/favicon.ico' alt='Logo' className='w-7 h-7' />
            </div>
            <span className='text-xl font-semibold text-purple-300 tracking-tight group-hover:text-purple-200 transition-all duration-300'>
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
        </div>
      </div>
    </header>
  );
}
