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

Crea tu archivo de configuración desde la plantilla:

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus URLs personales.

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
│   ├── globals.css          # Estilos globales
│   ├── about/               # Página "Sobre mí"
│   ├── projects/            # Página de proyectos
│   └── resume/              # Página de currículum
├── components/              # Componentes React
│   ├── navigation.tsx       # Barra de navegación con menú mobile
│   ├── footer.tsx           # Pie de página
│   ├── loading-spinner.tsx  # Spinner de carga
│   └── ui/                  # Componentes de shadcn/ui
├── shared/                  # Código compartido
│   ├── interface.ts         # Interfaces TypeScript
│   └── portfolio-services.ts # Servicios API
├── lib/                     # Utilidades
│   └── utils.ts             # Funciones helper de Tailwind
└── public/                  # Archivos estáticos
    └── CV_ÁlvaroHermosillaAlameda.pdf
```

## 🎨 Páginas Principales

- **/** - Home con hero y proyectos destacados
- **/about** - Perfil completo: bio, experiencia, educación, habilidades
- **/projects** - Galería de proyectos con filtros por categoría
- **/resume** - Currículum descargable en PDF

## 🔌 Integración con Backend

Los servicios están en `shared/portfolio-services.ts`:

```typescript
// Servicios API públicos
getActiveProfile()      // Obtiene el perfil activo
getAllProjects()        // Lista todos los proyectos
getAllExperience()      // Lista experiencia laboral
getAllEducation()       // Lista formación académica
```

Todos los endpoints son públicos y no requieren autenticación.

## 🎨 Temas y Estilos

- **Tema oscuro** por defecto (slate-900, slate-800)
- **Gradientes** azul-cian para elementos principales
- **Animaciones** suaves con Tailwind transitions
- **Responsive** desde mobile a desktop

## 🎨 Componentes UI

Utiliza **shadcn/ui** para componentes reutilizables:
- Avatar, Badge, Button, Card
- Dropdown Menu, Form, Input, Label
- Skeleton loaders, Toast notifications

Todos los componentes están en `components/ui/` y se pueden personalizar con Tailwind.

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
