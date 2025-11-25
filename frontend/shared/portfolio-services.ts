'use client';

import {
  Profile,
  Project,
  Experience,
  Education,
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
    throw new Error('Error fetching profile');
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
    throw new Error('Error fetching projects');
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
    throw new Error('Error fetching experience');
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
    throw new Error('Error fetching education');
  }

  return await response.json();
}
