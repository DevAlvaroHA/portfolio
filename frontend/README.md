# Portfolio - Frontend

Frontend del portfolio personal construido con Next.js 15, React 19 y TypeScript.

## 🚀 Tecnologías

- **Next.js 15** - Framework React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes de UI reutilizables
- **React Hook Form + Zod** - Gestión de formularios y validación
- **Sonner** - Notificaciones toast

## 📋 Requisitos Previos

- Node.js 18+ y npm/pnpm
- Backend corriendo en `http://localhost:3000`

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install
# o
pnpm install
```

## ⚙️ Configuración

Crea un archivo `.env.local` en la raíz del directorio frontend:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_URL=https://github.com/tu-usuario
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/tu-usuario
```

## 🚀 Ejecución

### Desarrollo
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:3003`

### Producción
```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
frontend/
├── app/                      # App Router de Next.js
│   ├── page.tsx             # Página principal (home)
│   ├── layout.tsx           # Layout principal
│   ├── about/               # Página "Sobre mí"
│   ├── projects/            # Página de proyectos
│   ├── experience/          # Página de experiencia
│   ├── education/           # Página de educación
│   ├── contact/             # Página de contacto
│   ├── login/               # Login para admin
│   └── register/            # Registro (admin)
├── components/              # Componentes React
│   ├── header.tsx           # Cabecera de navegación
│   ├── footer.tsx           # Pie de página
│   ├── loading-spinner.tsx  # Spinner de carga
│   ├── protected-route.tsx  # HOC para rutas protegidas
│   └── ui/                  # Componentes de shadcn/ui
├── contexts/                # Contextos de React
│   └── auth-context.tsx     # Contexto de autenticación
├── shared/                  # Código compartido
│   ├── interface.ts         # Interfaces TypeScript
│   └── portfolio-services.ts # Servicios API
├── lib/                     # Utilidades
│   └── utils.ts             # Funciones helper
└── styles/                  # Estilos globales
    └── globals.css
```

## 🎨 Páginas Principales

### Públicas
- **/** - Home con hero, proyectos destacados y CTA
- **/about** - Sobre mí, habilidades, idiomas
- **/projects** - Galería de proyectos con filtros
- **/experience** - Timeline de experiencia laboral
- **/education** - Formación académica
- **/contact** - Formulario de contacto

### Autenticadas
- **/login** - Acceso al panel de admin
- **/admin** - Panel de administración (pendiente)

## 🔌 Integración con Backend

Los servicios están en `shared/portfolio-services.ts`:

```typescript
// Públicos (sin autenticación)
getActiveProfile()
getAllProjects()
getFeaturedProjects()
getAllExperience()
getAllEducation()
sendContactMessage(data)

// Privados (requieren JWT)
createProject(data, token)
updateProject(id, data, token)
deleteProject(id, token)
// ... etc
```

## 🎨 Temas y Estilos

- **Tema oscuro** por defecto (slate-900, slate-800)
- **Gradientes** azul-cian para elementos principales
- **Animaciones** suaves con Tailwind transitions
- **Responsive** desde mobile a desktop

## 🔐 Autenticación

El frontend usa JWT tokens almacenados en localStorage:
- `token` - JWT del usuario
- `user` - Información del usuario

El contexto `AuthContext` gestiona el estado de autenticación globalmente.

## 📝 Formularios

Todos los formularios usan React Hook Form + Zod:

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  // validaciones
});

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
});
```

## 🚀 Deployment

### Vercel (recomendado)
```bash
vercel
```

### Build estático
```bash
npm run build
# Los archivos estáticos estarán en .next/
```

## 🐛 Troubleshooting

**Error de conexión al backend:**
- Verifica que el backend esté corriendo en puerto 3000
- Revisa la variable `NEXT_PUBLIC_API_URL` en `.env.local`

**Imágenes no cargan:**
- Las URLs de imágenes deben ser absolutas o estar en `/public`

**Errores de TypeScript:**
- Ejecuta `npm run build` para ver todos los errores
- Verifica que las interfaces en `shared/interface.ts` coincidan con el backend

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
