# Portfolio Profesional

Portfolio profesional Full-Stack desarrollado con Next.js y NestJS. Aplicación moderna que muestra información profesional, proyectos, experiencia laboral y formación académica de forma dinámica y responsive.

## 🚀 Características

- ✅ **Diseño Moderno**: Interfaz responsive con animaciones y efectos visuales
- ✅ **Gestión Dinámica**: Todos los datos se gestionan desde PostgreSQL
- ✅ **API REST**: Backend con documentación Swagger automática
- ✅ **Mobile First**: Navegación responsive con menú hamburguesa
- ✅ **Visor de CV**: Visualización integrada de CV en PDF
- ✅ **Categorización**: Proyectos organizados por categorías (Full Stack, Frontend, Backend, etc.)
- ✅ **Seguridad Hardened**: Rate limiting, Helmet headers, validación estricta de inputs

## 🔒 Seguridad Implementada

### Backend
- **Rate Limiting**: 20 requests/minuto por IP (protección contra DDoS y brute force)
- **Helmet**: Headers de seguridad (X-Frame-Options, CSP, XSS Protection)
- **Validación Estricta**: 
  - Campos con límites de longitud (2-2000 caracteres)
  - Whitelist de propiedades (rechaza campos no definidos)
  - Sanitización automática de inputs
- **DATABASE_SYNC**: Forzado a `false` en producción (previene pérdida de datos)
- **SSL/TLS**: Conexiones encriptadas a base de datos en producción

### Frontend  
- **Security Headers**: HSTS, X-Content-Type-Options, Referrer-Policy
- **Permissions-Policy**: Deshabilita APIs innecesarias (camera, microphone, geolocation)
- **X-Frame-Options**: Previene clickjacking
- **No XSS vectors**: Sin `dangerouslySetInnerHTML` ni `innerHTML`

## 🛠️ Stack Tecnológico

### Backend
- **NestJS** - Framework Node.js para aplicaciones empresariales
- **TypeScript** - Tipado estático
- **PostgreSQL 15** - Base de datos relacional
- **TypeORM** - ORM para gestión de datos
- **Swagger** - Documentación API automática
- **Docker** - Contenedor para PostgreSQL

### Frontend
- **Next.js 15** - Framework React con App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **shadcn/ui** - Componentes UI accesibles
- **Lucide React** - Iconos
- **Sonner** - Notificaciones toast

## 📋 Requisitos Previos

- **Node.js** 18 o superior
- **Docker Desktop** para PostgreSQL
- **Git** para clonar el repositorio
- **npm** o **pnpm** como gestor de paquetes

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/DevAlvaroHA/portfolio.git
cd portfolio
```

### 2. Configurar variables de entorno

Copia los archivos de ejemplo y configúralos:

```bash
# Raíz del proyecto
cp .env.example .env

# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env
```

**Variables importantes a configurar:**

**Backend (`backend/.env`):**
- `DATABASE_PASSWORD`: Contraseña segura para PostgreSQL
- `FRONTEND_URL`: URL del frontend (por defecto: http://localhost:3003)

**Frontend (`frontend/.env`):**
- `NEXT_PUBLIC_API_URL`: URL del backend (por defecto: http://localhost:3000)

### 3. Crear contenedor de PostgreSQL

```bash
docker container run -i -t \
  -e POSTGRES_PASSWORD=tu_password_seguro \
  -e POSTGRES_DB=portfolio \
  -v portfolio_postgres_data:/var/lib/postgresql/data \
  -p 5433:5432 \
  --name portfolio_db \
  postgres:15-alpine
```

**Nota:** Usa la misma contraseña que configuraste en `backend/.env`

### 4. Instalar dependencias

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install --legacy-peer-deps
```

### 5. Poblar la base de datos

```bash
cd backend
npm run seed
```

Este comando creará:
- ✅ Perfil profesional con datos de ejemplo
- ✅ Experiencia laboral de muestra
- ✅ Formación académica de ejemplo
- ✅ Proyectos de ejemplo

**IMPORTANTE:** Edita `backend/src/seed.ts` y `backend/src/app.controller.ts` con tus datos reales antes de ejecutar el seed.

### 6. Iniciar la aplicación

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

| Servicio | URL | Descripción |
|----------|-----|-------------|
| **Portfolio** | http://localhost:3003 | Aplicación web principal |
| **API Backend** | http://localhost:3000 | REST API |
| **Swagger Docs** | http://localhost:3000/api | Documentación interactiva |

## 📁 Estructura del Proyecto

```
portfolio/
├── backend/              # API NestJS
│   ├── src/
│   │   ├── profile/      # Módulo de perfil profesional
│   │   ├── projects/     # Módulo de proyectos
│   │   ├── experience/   # Módulo de experiencia laboral
│   │   ├── education/    # Módulo de formación académica
│   │   ├── contact/      # Módulo de mensajes de contacto
│   │   ├── app.controller.ts  # Endpoint /seed
│   │   ├── app.module.ts      # Módulo raíz
│   │   ├── seed.ts            # Script de seed
│   │   └── main.ts            # Punto de entrada
│   ├── .env.example
│   └── package.json
│
├── frontend/             # Aplicación Next.js
│   ├── app/
│   │   ├── page.tsx           # Home (/)
│   │   ├── about/page.tsx     # Sobre mí (/about)
│   │   ├── projects/page.tsx  # Proyectos (/projects)
│   │   ├── resume/page.tsx    # CV (/resume)
│   │   ├── layout.tsx         # Layout raíz
│   │   └── globals.css        # Estilos globales
│   ├── components/
│   │   ├── navigation.tsx     # Header con navegación
│   │   ├── footer.tsx         # Footer
│   │   ├── loading-spinner.tsx
│   │   └── ui/                # Componentes shadcn/ui
│   ├── shared/
│   │   ├── portfolio-services.ts  # Servicios API
│   │   └── interface.ts           # Interfaces TypeScript
│   ├── public/
│   │   └── CV_ÁlvaroHermosillaAlameda.pdf  # CV en PDF
│   ├── .env.example
│   └── package.json
│
├── .env.example          # Variables globales
├── docker-compose.yml    # Configuración Docker (opcional)
├── README.md             # Este archivo
├── QUICK_START.md        # Guía rápida
└── SECURITY.md           # Políticas de seguridad
```

## 🌐 Endpoints de la API

### Públicos (sin autenticación)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Información de la API |
| POST | `/seed` | Poblar base de datos con datos de ejemplo |
| GET | `/profile/active` | Obtener perfil activo |
| GET | `/projects` | Listar todos los proyectos |
| GET | `/projects/featured` | Proyectos destacados |
| GET | `/experience` | Experiencia laboral |
| GET | `/education` | Formación académica |
| POST | `/contact` | Enviar mensaje de contacto |

**Nota:** Todos los endpoints están documentados en Swagger: http://localhost:3000/api

## 📝 Personalizar Contenido

### Opción 1: Editar archivos seed

1. Edita `backend/src/seed.ts` con tus datos
2. Edita `backend/src/app.controller.ts` (endpoint `/seed`)
3. Ejecuta: `npm run seed` en el backend

### Opción 2: Editar directamente en la base de datos

Usa un cliente PostgreSQL (DBeaver, pgAdmin, TablePlus):

**Conexión:**
- Host: `localhost`
- Puerto: `5433`
- Usuario: `postgres`
- Password: (tu contraseña del .env)
- Database: `portfolio`

**Tablas:**
- `profile` - Información personal
- `projects` - Proyectos
- `experience` - Experiencia laboral
- `education` - Formación académica
- `contact_messages` - Mensajes recibidos

### Actualizar CV

Reemplaza el archivo `frontend/public/CV_ÁlvaroHermosillaAlameda.pdf` con tu CV y actualiza la referencia en `frontend/app/resume/page.tsx` si cambias el nombre del archivo.

## 🎨 Personalización Visual

### Cambiar colores

Edita `frontend/tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Personaliza los colores aquí
    }
  }
}
```

### Añadir secciones

Las páginas están en `frontend/app/[nombre]/page.tsx`. Sigue la estructura existente para crear nuevas secciones.

## 🐳 Comandos Docker

```bash
# Iniciar contenedor
docker container start portfolio_db

# Detener contenedor
docker container stop portfolio_db

# Ver logs
docker logs portfolio_db

# Acceder a PostgreSQL
docker exec -it portfolio_db psql -U postgres -d portfolio

# Eliminar contenedor (⚠️ borra los datos)
docker container rm -f portfolio_db
```

## 🚢 Deployment

### Frontend (Vercel - Recomendado)

1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Configura las variables de entorno:
   - `NEXT_PUBLIC_API_URL`: URL de tu backend en producción
3. Deploy automático con cada push a `main`

### Backend (Render / Railway)

1. Crea un servicio web en [Render](https://render.com) o [Railway](https://railway.app)
2. Conecta tu repositorio
3. Configura las variables de entorno del backend
4. Añade un servicio PostgreSQL

Ver `render.yaml` para configuración específica de Render.

## 🧪 Testing

```bash
# Backend
cd backend
npm test                 # Tests unitarios
npm run test:e2e        # Tests E2E
npm run test:cov        # Cobertura

# Frontend
cd frontend
npm run lint            # Linting
npm run build           # Build de producción
```

## 📚 Documentación Adicional

- **Guía Rápida**: Ver `QUICK_START.md`
- **Seguridad**: Ver `SECURITY.md`
- **API Docs**: http://localhost:3000/api (Swagger)

## 🤝 Contribución

Este es un proyecto personal de portfolio. Si encuentras bugs o tienes sugerencias, abre un issue.

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Esto significa que puedes:

✅ Usar el código para proyectos personales o comerciales  
✅ Modificar y adaptar el código según tus necesidades  
✅ Distribuir copias del código  
✅ Usar el código en proyectos privados  

**Requisitos:**
- Debes incluir el aviso de copyright original
- Debes incluir una copia de la licencia MIT

Consulta el archivo [LICENSE](./LICENSE) para el texto legal completo.

**© 2025 Álvaro Hermosilla Alameda**

## 📧 Contacto

Para consultas sobre este proyecto:
- GitHub: [@DevAlvaroHA](https://github.com/DevAlvaroHA)
- Portfolio: [aha-portfolio.vercel.app](https://aha-portfolio.vercel.app)