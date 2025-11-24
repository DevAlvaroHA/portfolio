# Portfolio Profesional - Álvaro Hermosilla Alameda

Portfolio profesional desarrollado con Next.js y NestJS. Aplicación estática que muestra información profesional, proyectos, experiencia y formación académica. Los datos se editan directamente desde el código.

## 🚀 Tecnologías

### Backend
- NestJS + TypeScript
- PostgreSQL + TypeORM
- Swagger API Documentation
- Endpoints públicos (solo lectura)

### Frontend
- Next.js 15 + React 19
- TypeScript
- Tailwind CSS + shadcn/ui
- Diseño responsive

## 📋 Requisitos
- Node.js 18+
- Docker Desktop
- Git

## 🛠️ Guía de Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/DevAlvaroHA/Portfolio
cd Portfolio
```

### 2. Configurar variables de entorno

Copia los archivos de ejemplo:

**Raíz del proyecto (`.env`):**
```env
DATABASE_PORT=5433
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=portfolio
```

**Backend (`backend/.env`):**
```env
DATABASE_URL=localhost
DATABASE_PORT=5433
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=portfolio
DATABASE_SYNC=true

FRONTEND_URL=http://localhost:3003
```

**Frontend (`frontend/.env`):**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3003

# Redes sociales
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/álvaro-hermosilla-alameda-587526339
NEXT_PUBLIC_GITHUB_URL=https://github.com/DevAlvaroHA
```

### 3. Crear contenedor de base de datos

```bash
docker container run -i -t -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=portfolio -v portfolio_postgres_data:/var/lib/postgresql/data -p 5433:5432 --name portfolio_db postgres:15-alpine
```

**Gestionar el contenedor:**
```bash
# Iniciar
docker container start portfolio_db

# Detener
docker container stop portfolio_db

# Ver logs
docker logs portfolio_db
```

### 4. Instalar dependencias

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install --legacy-peer-deps
```

### 5. Poblar base de datos con seed

```bash
cd backend
npm run seed
```

Este comando creará:
- ✅ Perfil de Álvaro Hermosilla
- ✅ Experiencia en Futura Tickets
- ✅ 3 Formaciones académicas (IES Valle Inclán, IES Isidra de Guzmán, IES Ignacio Ellacuría)
- ✅ Proyecto Portfolio de ejemplo

### 6. Ejecutar en desarrollo

Abre dos terminales:

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 7. Acceder a la aplicación

- **Portfolio público**: http://localhost:3003
- **API Backend**: http://localhost:3000
- **Swagger Docs**: http://localhost:3000/api

## 📝 Cómo Actualizar el Contenido

### Opción 1: Editar el Seed y Re-ejecutar

Modifica `backend/src/seed.ts` con tus datos y ejecuta:

```bash
cd backend
npm run seed
```

### Opción 2: Editar Directamente en la Base de Datos

Usa un cliente PostgreSQL (pgAdmin, DBeaver, etc.) y conecta a:
- Host: localhost
- Puerto: 5433
- Usuario: postgres
- Password: postgres
- Database: portfolio

Tablas principales:
- `profile` - Tu información personal
- `project` - Tus proyectos
- `experience` - Tu experiencia laboral
- `education` - Tu formación académica
- `contact_message` - Mensajes recibidos

### Opción 3: Modificar el Código del Seed

Edita `backend/src/seed.ts`:

```typescript
// Línea 24 - Perfil
await profileService.create({
  fullName: 'Tu Nombre',
  title: 'Tu Título',
  bio: 'Tu biografía...',
  // ... más campos
});

// Línea 59 - Experiencia
await experienceService.create({
  company: 'Empresa',
  position: 'Cargo',
  // ... más campos
});

// Línea 80 - Educación
await educationService.create({
  institution: 'Institución',
  degree: 'Título',
  // ... más campos
});

// Línea 153 - Proyectos
await projectsService.create({
  title: 'Nombre del Proyecto',
  description: 'Descripción...',
  // ... más campos
});
```

## 📦 Estructura del Proyecto

```
Portfolio/
├── backend/          # API NestJS
│   ├── src/
│   │   ├── profile/        # Información personal
│   │   ├── projects/       # Proyectos
│   │   ├── experience/     # Experiencia laboral
│   │   ├── education/      # Formación académica
│   │   ├── contact/        # Mensajes de contacto
│   │   └── seed.ts         # Script para poblar datos
│   └── ...
├── frontend/         # Next.js App
│   ├── app/
│   │   ├── page.tsx           # Home
│   │   ├── about/             # Sobre mí
│   │   ├── projects/          # Galería de proyectos
│   │   ├── experience/        # Timeline de experiencia
│   │   ├── education/         # Historial académico
│   │   └── contact/           # Formulario de contacto
│   └── ...
└── docs/             # Documentación
```

## 🚢 Deployment

### Recomendaciones:
- **Frontend**: Vercel (gratis, optimizado para Next.js)
- **Backend**: Render / Railway (tier gratis disponible)
- **Base de datos**: Supabase / Neon / Render PostgreSQL

Ver `render.yaml` para configuración de deployment.

## 📧 Contacto

- **Email**: alvaro.hermosilla.alameda@gmail.com
- **LinkedIn**: [Álvaro Hermosilla](https://www.linkedin.com/in/álvaro-hermosilla-alameda-587526339)
- **GitHub**: [DevAlvaroHA](https://github.com/DevAlvaroHA)

## 📄 Licencia
MIT