import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import Header from '@/components/navigation';
import SiteFooter from '@/components/site-footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Álvaro Hermosilla - Portfolio Profesional',
  description: 'Portfolio de Álvaro Hermosilla Alameda. Técnico Superior ASIR & DAW | Full-Stack Web Developer (React, Node.js, MySQL) | Sistemas & Redes | DevOps (Docker, Linux) | Ciberseguridad: Ethical Hacking & Forense Digital | Python Automation | Cloud & Virtualización | UX | Inglés B2',
  keywords: ['portfolio', 'desarrollador', 'full-stack', 'web development', 'react', 'nodejs', 'typescript', 'sistemas', 'redes', 'devops', 'ciberseguridad', 'ethical hacking', 'docker', 'linux', 'python', 'mysql', 'cloud', 'asir', 'daw', 'ux'],
  authors: [{ name: 'Álvaro Hermosilla Alameda' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Álvaro Hermosilla - Portfolio Profesional',
    description: 'Técnico Superior ASIR & DAW | Full-Stack Web Developer | Sistemas & Redes | DevOps | Ciberseguridad',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-1 pt-16'>
            {children}
          </main>
          <SiteFooter />
        </div>
        <Toaster 
          position="top-right"
          richColors
          closeButton
        />
      </body>
    </html>
  );
}
