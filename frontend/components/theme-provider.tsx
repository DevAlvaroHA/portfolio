'use client'

// Importación del namespace completo de React para acceder a todos sus tipos y funciones
import * as React from 'react'
// Importación del proveedor de temas de next-themes y su tipo de props
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

// Exportación de la función componente ThemeProvider que acepta children y props adicionales
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Retorna el proveedor de temas de next-themes pasando todas las props recibidas
  // Este componente envuelve la aplicación para proporcionar funcionalidad de temas (claro/oscuro)
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
