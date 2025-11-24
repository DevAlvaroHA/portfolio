'use client';

import {
  Profile,
  Project,
  Experience,
  Education,
  ContactMessage,
  CreateContactMessage,
} from './interface';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// ============================================
// PROFILE SERVICES (Solo lectura)
// ============================================

export async function getActiveProfile(): Promise<Profile> {
  const response = await fetch(`${API_URL}/profile/active`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener perfil');
  }

  return await response.json();
}

// ============================================
// PROJECTS SERVICES (Solo lectura)
// ============================================

export async function getAllProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/projects`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener proyectos');
  }

  return await response.json();
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/projects/featured`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener proyectos destacados');
  }

  return await response.json();
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const response = await fetch(`${API_URL}/projects?category=${category}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener proyectos por categoría');
  }

  return await response.json();
}

// ============================================
// EXPERIENCE SERVICES (Solo lectura)
// ============================================

export async function getAllExperience(): Promise<Experience[]> {
  const response = await fetch(`${API_URL}/experience`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener experiencia');
  }

  return await response.json();
}

// ============================================
// EDUCATION SERVICES (Solo lectura)
// ============================================

export async function getAllEducation(): Promise<Education[]> {
  const response = await fetch(`${API_URL}/education`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener educación');
  }

  return await response.json();
}

// ============================================
// CONTACT SERVICES
// ============================================

export async function sendContactMessage(data: CreateContactMessage): Promise<ContactMessage> {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error al enviar mensaje');
  }

  return await response.json();
}
