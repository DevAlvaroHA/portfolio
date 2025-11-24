// ============================================
// PORTFOLIO INTERFACES
// ============================================

export interface Profile {
  id: number;
  fullName: string;
  title: string;
  bio: string;
  location?: string;
  email?: string;
  phone?: string;
  website?: string;
  avatarUrl?: string;
  resumeUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  skills?: string[];
  languages?: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  features?: string[];
  featured: boolean;
  startDate?: string;
  endDate?: string;
  category?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  startDate: string;
  endDate?: string;
  current: boolean;
  location?: string;
  companyUrl?: string;
  employmentType?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  description?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  grade?: string;
  location?: string;
  institutionUrl?: string;
  activities?: string[];
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  company?: string;
  read: boolean;
  createdAt: string;
}

export interface CreateContactMessage {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  company?: string;
}

// ============================================
// AUTH INTERFACES
// ============================================

export interface User {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAccount {
  username: string;
  email: string;
  password: string;
}

export interface LoginAccount {
  email: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  setAuth: (value: boolean) => void;
}

export interface DecodedToken {
  isAuthenticated: boolean;
  id?: string;
  username?: string;
  email?: string;
  exp?: number;
}

// Reexportar tipos necesarios
export type { FieldValues, FieldPath } from 'react-hook-form';
export type { VariantProps } from 'class-variance-authority';
export type { ThemeProviderProps } from 'next-themes';
export type { ComponentProps } from 'react';
