# 🚀 Quick Start - Portfolio

Guía rápida para iniciar el portfolio en modo desarrollo.

## 📋 Checklist Pre-inicio

- [ ] Node.js 18+ instalado
- [ ] Docker Desktop instalado y corriendo
- [ ] Git instalado

## 🔧 Setup Inicial (Solo primera vez)

### 1. Base de Datos
```bash
# Crear contenedor PostgreSQL
docker container run -i -t -e POSTGRES_PASSWORD=tu_password_seguro -e POSTGRES_DB=portfolio -v portfolio_postgres_data:/var/lib/postgresql/data -p 5433:5432 --name portfolio_db postgres:15-alpine
```

**Nota:** Reemplaza `tu_password_seguro` con una contraseña segura.

### 2. Variables de Entorno

Copia los archivos de ejemplo y configúralos:

```bash
# Raíz del proyecto
cp .env.example .env

# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env
```

**Edita cada archivo `.env`** con tus valores:
- Configura la contraseña de la base de datos
- Genera un JWT_SECRET seguro (mínimo 64 caracteres aleatorios)
- Añade tus URLs de redes sociales en el frontend

### 3. Instalar Dependencias

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install --legacy-peer-deps
```

### 4. Poblar Base de Datos (Primera vez)

```bash
cd backend
npm run seed
```

**Credenciales de admin:**
Ver el archivo `backend/src/seed.ts` para las credenciales por defecto. Se recomienda cambiarlas después del primer login.

## 🏃 Arrancar en Desarrollo

### Terminal 1 - Base de Datos
```bash
# Si el contenedor está detenido
docker container start portfolio_db

# Verificar que está corriendo
docker ps | findstr portfolio_db
```

### Terminal 2 - Backend
```bash
cd backend
npm run start:dev
```

**Verificar:**
- API: http://localhost:3000
- Swagger: http://localhost:3000/api

### Terminal 3 - Frontend
```bash
cd frontend
npm run dev
```

**Verificar:**
- Portfolio: http://localhost:3003

## 🎯 Acceso Rápido

| Servicio | URL | Descripción |
|----------|-----|-------------|
| **Portfolio público** | http://localhost:3003 | Home, proyectos, experiencia, contacto |
| **Login admin** | http://localhost:3003/login | Panel de administración |
| **API Backend** | http://localhost:3000 | REST API |
| **Swagger Docs** | http://localhost:3000/api | Documentación interactiva |

## 📝 Comandos Útiles

### Docker (Base de datos)
```bash
# Iniciar contenedor
docker container start portfolio_db

# Detener contenedor
docker container stop portfolio_db

# Ver logs
docker logs portfolio_db

# Acceder a PostgreSQL
docker exec -it portfolio_db psql -U postgres -d portfolio
```

### Backend
```bash
cd backend

# Desarrollo con hot reload
npm run start:dev

# Producción
npm run build
npm run start:prod

# Poblar base de datos
npm run seed

# Tests
npm test
```

### Frontend
```bash
cd frontend

# Desarrollo
npm run dev

# Producción
npm run build
npm start

# Linting
npm run lint
```

## 🐛 Troubleshooting

### Error: "Cannot connect to database"
```bash
# Verificar que el contenedor está corriendo
docker ps

# Si no está, iniciarlo
docker container start portfolio_db

# Verificar logs
docker logs portfolio_db
```

### Error: "Port 5433 already in use"
```bash
# Ver qué proceso usa el puerto
netstat -ano | findstr :5433

# Detener el proceso o cambiar puerto en .env
```

### Error: "Module not found" en Frontend
```bash
cd frontend
npm install --legacy-peer-deps
```

### Error: "JWT token invalid"
- Verificar que `JWT_SECRET` en backend/.env sea el mismo siempre
- Cerrar sesión y volver a iniciar sesión

## 📚 Estructura de Endpoints

### Públicos (Sin autenticación)
- `GET /profile/active` - Perfil activo
- `GET /projects` - Todos los proyectos
- `GET /projects/featured` - Proyectos destacados
- `GET /experience` - Experiencia laboral
- `GET /education` - Formación académica
- `POST /contact` - Enviar mensaje

### Privados (Requieren JWT Bearer token)
- `POST /auth/login` - Iniciar sesión
- `POST /auth/register` - Registrar admin
- Todos los endpoints POST/PATCH/DELETE de proyectos, experiencia, educación

## 🎨 Personalización

### Cambiar colores principales
Edita `frontend/tailwind.config.ts`:
```typescript
colors: {
  primary: { /* tus colores */ }
}
```

### Añadir/modificar secciones
Las páginas están en `frontend/app/[seccion]/page.tsx`

### Modificar API
Los módulos del backend están en `backend/src/[modulo]/`

## 🚀 Next Steps

1. ✅ Verificar que todo funciona
2. 📝 Editar perfil en `/login` → Panel Admin
3. 🎨 Personalizar colores y estilos
4. 📸 Añadir imágenes de proyectos
5. 🌐 Deploy a producción (Vercel + Render)

## 📞 Soporte

Si encuentras algún problema:
1. Revisa los logs del backend y frontend
2. Verifica que la base de datos esté corriendo
3. Confirma que las variables de entorno estén correctas
4. Revisa la documentación en `/docs`

---

**¡Listo! Tu portfolio está funcionando** 🎉

Accede a http://localhost:3003 para ver tu portfolio.
