# 🚀 Quick Start - Portfolio

Guía rápida para poner en marcha tu portfolio en modo desarrollo en menos de 10 minutos.

## 📋 Checklist Pre-inicio

Antes de comenzar, asegúrate de tener instalado:

- ✅ Node.js 18 o superior ([Descargar](https://nodejs.org/))
- ✅ Docker Desktop ([Descargar](https://www.docker.com/products/docker-desktop))
- ✅ Git ([Descargar](https://git-scm.com/))
- ✅ Editor de código (VS Code recomendado)

## 🔧 Setup Inicial (Solo primera vez)

### 1. Clonar y acceder al proyecto

```bash
git clone https://github.com/DevAlvaroHA/portfolio.git
cd portfolio
```

### 2. Base de Datos PostgreSQL con Docker

Crea el contenedor de PostgreSQL:

```bash
docker container run -i -t \
  -e POSTGRES_PASSWORD=tu_password_seguro \
  -e POSTGRES_DB=portfolio \
  -v portfolio_postgres_data:/var/lib/postgresql/data \
  -p 5433:5432 \
  --name portfolio_db \
  postgres:15-alpine
```

**⚠️ Importante:** 
- Cambia `tu_password_seguro` por una contraseña fuerte
- Recuerda esta contraseña para el siguiente paso
- El contenedor se iniciará automáticamente al arrancar Docker Desktop

**Gestión del contenedor:**
```bash
# Iniciar contenedor (si está detenido)
docker container start portfolio_db

# Detener contenedor
docker container stop portfolio_db

# Ver estado
docker ps | findstr portfolio_db

# Ver logs
docker logs portfolio_db
```

### 3. Variables de Entorno

Copia y configura los archivos de entorno:

```bash
# Raíz del proyecto
cp .env.example .env

# Backend
cp backend/.env.example backend/.env

# Frontend  
cp frontend/.env.example frontend/.env
```

**Edita `backend/.env`:**
```dotenv
DATABASE_PASSWORD=tu_password_seguro  # La misma del paso 2
```

**Frontend y raíz** usan configuraciones por defecto. Solo edítalos si cambias puertos.

### 4. Instalar Dependencias

```bash
# Backend
cd backend
npm install

# Frontend (desde la raíz)
cd ../frontend
npm install --legacy-peer-deps
```

**Nota:** El flag `--legacy-peer-deps` es necesario para Next.js 15 + React 19.

### 5. Personalizar Datos (Importante)

Antes de poblar la base de datos, edita tus datos personales:

1. Abre `backend/src/seed.ts`
2. Busca y modifica las secciones:
   - **Línea ~20**: Perfil personal (nombre, título, bio, skills)
   - **Línea ~40**: Experiencia laboral
   - **Línea ~60**: Educación/formación
   - **Línea ~90**: Proyectos

3. También edita `backend/src/app.controller.ts` (endpoint POST /seed):
   - Contiene los mismos datos para el endpoint de seed

### 6. Poblar Base de Datos

```bash
cd backend
npm run seed
```

**Resultado esperado:**
```
✅ Perfil creado
✅ Experiencia creada
✅ Educación creada  
✅ 3 Proyectos creados
```

### 7. Añadir tu CV (Opcional)

Coloca tu CV en PDF en `frontend/public/` con el nombre:
- `CV_TuNombre.pdf` (sin tildes si hay problemas)

Actualiza la referencia en `frontend/app/resume/page.tsx`:
```typescript
const pdfUrl = '/CV_TuNombre.pdf';
```

## 🏃 Arrancar en Desarrollo

Una vez completado el setup, estos son los pasos para trabajar cada día:

### Terminal 1 - Base de Datos

```bash
# Verificar que Docker Desktop está corriendo
docker ps

# Si el contenedor está detenido, iniciarlo
docker container start portfolio_db
```

### Terminal 2 - Backend API

```bash
cd backend
npm run start:dev
```

**Verás:**
```
[Nest] Starting Nest application...
[Nest] Application is running on: http://localhost:3000
```

### Terminal 3 - Frontend

```bash
cd frontend
npm run dev
```

**Verás:**
```
▲ Next.js 15.2.4
- Local: http://localhost:3003
- Network: http://192.168.x.x:3003
```

## 🎯 Acceso Rápido

Una vez todo esté corriendo:

| Servicio | URL | Descripción |
|----------|-----|-------------|
| **🌐 Portfolio** | http://localhost:3003 | Web principal |
| **📄 Home** | http://localhost:3003 | Página de inicio |
| **👤 About** | http://localhost:3003/about | Sobre mí + Experiencia |
| **💼 Projects** | http://localhost:3003/projects | Galería de proyectos |
| **📋 Resume** | http://localhost:3003/resume | Visor de CV |
| **🔧 API Backend** | http://localhost:3000 | REST API |
| **📚 Swagger Docs** | http://localhost:3000/api | Documentación API |

## 📝 Comandos Útiles

### Docker (Base de datos)
```bash
# Iniciar
docker container start portfolio_db

# Detener
docker container stop portfolio_db

# Ver logs
docker logs portfolio_db

# Acceder a PostgreSQL CLI
docker exec -it portfolio_db psql -U postgres -d portfolio

# Limpiar datos (⚠️ CUIDADO - Borra todo)
docker exec -it portfolio_db psql -U postgres -d portfolio -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
```

### Backend
```bash
cd backend

# Desarrollo con hot-reload
npm run start:dev

# Poblar/Actualizar datos
npm run seed

# Build de producción
npm run build

# Iniciar producción
npm run start:prod

# Tests
npm test
npm run test:e2e
npm run test:cov

# Linting
npm run lint
```

### Frontend
```bash
cd frontend

# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm start

# Linting
npm run lint
```

## 🐛 Troubleshooting

### ❌ Error: "Cannot connect to database"

**Causa:** El contenedor Docker no está corriendo o la contraseña es incorrecta.

**Solución:**
```bash
# Verificar contenedor
docker ps -a | findstr portfolio

# Si aparece pero no está corriendo (status: Exited)
docker container start portfolio_db

# Verificar logs por errores
docker logs portfolio_db

# Verificar contraseña en backend/.env
cat backend/.env | findstr PASSWORD
```

### ❌ Error: "Port 5433 already in use"

**Causa:** Otro servicio está usando el puerto 5433.

**Solución:**
```bash
# Ver qué proceso usa el puerto
netstat -ano | findstr :5433

# Opción 1: Detener el otro proceso
# Opción 2: Cambiar puerto en .env y recrear contenedor
```

### ❌ Error: "Module not found" en Frontend

**Causa:** Dependencias no instaladas o cache corrupto.

**Solución:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### ❌ Datos no se actualizan después de cambiar el seed

**Solución:**
```bash
# Opción 1: Eliminar datos manualmente
docker exec -it portfolio_db psql -U postgres -d portfolio -c "DELETE FROM experience; DELETE FROM education; DELETE FROM projects; DELETE FROM profile;"

# Opción 2: Usar el endpoint /seed (elimina y recrea)
curl -X POST http://localhost:3000/seed

# Luego ejecutar seed nuevamente
cd backend
npm run seed

# Limpiar caché del navegador
# Ctrl + Shift + Delete o Ctrl + F5
```

### 🔄 Los cambios no se reflejan en el navegador

**Solución:**
```bash
# 1. Limpiar caché del navegador
Ctrl + F5  # Recarga sin caché
Ctrl + Shift + Delete  # Limpiar datos

# 2. Verificar que el backend devuelve datos correctos
curl http://localhost:3000/experience

# 3. Reiniciar servicios si persiste
# Detener ambos terminales (Ctrl + C)
# Volver a ejecutar npm run start:dev y npm run dev
```

## 📚 Endpoints de la API

### Públicos (No requieren autenticación)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Info de la API |
| POST | `/seed` | Poblar BD con datos de ejemplo |
| GET | `/profile/active` | Obtener perfil activo |
| GET | `/projects` | Todos los proyectos |
| GET | `/projects/featured` | Proyectos destacados |
| GET | `/experience` | Experiencia laboral |
| GET | `/education` | Formación académica |
| POST | `/contact` | Enviar mensaje |

**Ver documentación completa:** http://localhost:3000/api

## 🎨 Personalización Rápida

### Cambiar colores del tema

Edita `frontend/tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // El portfolio usa purple por defecto
      // Cambia a tu color preferido
      primary: colors.blue,  // o colors.green, colors.red, etc.
    }
  }
}
```

### Añadir nueva página

1. Crea `frontend/app/nueva-pagina/page.tsx`
2. Sigue la estructura de páginas existentes
3. Añade el link en `frontend/components/navigation.tsx`

### Modificar estructura de datos

1. Edita la entidad en `backend/src/[modulo]/entities/`
2. La BD se sincroniza automáticamente en desarrollo (`DATABASE_SYNC=true`)
3. Actualiza interfaces en `frontend/shared/interface.ts`

## 🚀 Próximos Pasos

Una vez tu portfolio está corriendo:

1. ✅ **Personaliza los datos** - Edita seed.ts con tu información real
2. ✅ **Añade tu CV** - Coloca tu PDF en frontend/public/
3. ✅ **Ajusta colores** - Modifica tailwind.config.ts a tu gusto
4. ✅ **Añade imágenes** - Agrega capturas de tus proyectos
5. 🚢 **Deploy a producción** - Ver README.md sección Deployment

## 📖 Documentación Completa

- **README.md** - Documentación completa del proyecto
- **SECURITY.md** - Políticas de seguridad
- **Swagger API** - http://localhost:3000/api

## 📞 Soporte

Si encuentras problemas:
1. Revisa esta guía de troubleshooting
2. Verifica logs del backend y frontend
3. Confirma que Docker está corriendo
4. Abre un issue en GitHub

---

**¡Listo! Tu portfolio está corriendo** 🎉

Accede a **http://localhost:3003** para ver tu portfolio en acción.
