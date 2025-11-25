import type React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import Header from '@/components/navigation';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Professional Portfolio',
  description: 'Full-Stack Web Developer Portfolio - Modern web applications with React, Node.js, TypeScript, and more.',
  keywords: ['portfolio', 'developer', 'full-stack', 'web development', 'react', 'nodejs', 'typescript', 'software engineer'],
  authors: [{ name: 'Portfolio Owner' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Professional Portfolio',
    description: 'Full-Stack Web Developer | Software Engineer | Modern Web Applications',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-1 pt-[72px] sm:pt-[88px]'>
            {children}
          </main>
          <Footer />
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
