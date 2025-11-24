# Portfolio - Álvaro Hermosilla Alameda

Portfolio profesional desarrollado con Next.js, NestJS y PostgreSQL.

## 🚀 Despliegue

### Frontend (Vercel)
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente Next.js
4. Configura las variables de entorno:
   - `NEXT_PUBLIC_API_URL`: URL de tu backend en Render
5. ¡Despliega!

### Backend (Render)
1. Ve a [render.com](https://render.com)
2. Crea una cuenta gratuita
3. Sube tu código a GitHub
4. En Render, selecciona "New +" → "Blueprint"
5. Conecta tu repositorio y usa el archivo `render.yaml`
6. Render creará automáticamente:
   - PostgreSQL database (gratis)
   - Backend service
   - Frontend service (opcional, usa Vercel mejor)

## 📋 Pasos Rápidos

### Opción 1: Vercel (Frontend) + Render (Backend) ⭐ RECOMENDADO

**Backend en Render:**
```bash
# 1. Sube tu código a GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/portfolio.git
git push -u origin main

# 2. Ve a render.com → New Web Service
# 3. Conecta tu repo y configura:
#    - Name: portfolio-backend
#    - Root Directory: backend
#    - Build Command: npm install && npm run build
#    - Start Command: npm run start:prod
#    - Plan: Free

# 4. Añade variables de entorno en Render:
DATABASE_URL=<tu-db-url>
JWT_SECRET=<genera-uno-seguro>
NODE_ENV=production
FRONTEND_URL=<tu-url-vercel>

# 5. Crea PostgreSQL database en Render (Free tier)
```

**Frontend en Vercel:**
```bash
# 1. Ve a vercel.com
# 2. Import Git Repository
# 3. Selecciona tu repo
# 4. Root Directory: frontend
# 5. Añade variable de entorno:
NEXT_PUBLIC_API_URL=https://tu-backend.onrender.com

# 6. Deploy!
```

### Opción 2: Todo en Render con Blueprint

```bash
# 1. Sube a GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. En Render: New → Blueprint
# 3. Conecta el repo (usará render.yaml automáticamente)
# 4. Actualiza las URLs en render.yaml después del primer deploy
```

## 🔧 Configuración Local

### Backend
```bash
cd backend
npm install
npm run start:dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 🌐 URLs Públicas

Una vez desplegado, tendrás:
- Frontend: `https://tu-portfolio.vercel.app`
- Backend: `https://tu-portfolio-backend.onrender.com`
- Database: Gestionada automáticamente por Render

## 📝 Notas Importantes

- **Render Free Tier**: El backend se dormirá después de 15 min de inactividad (primera carga lenta)
- **Vercel**: Despliegues ilimitados, muy rápido
- **Database**: Render ofrece PostgreSQL gratuito con 256MB
- **Custom Domain**: Puedes añadir tu propio dominio en Vercel/Render

## 🔐 Variables de Entorno Necesarias

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@host:5432/dbname
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=tu-password
DATABASE_NAME=portfolio
DATABASE_SYNC=false
JWT_SECRET=tu-secreto-super-seguro-aqui
NODE_ENV=production
FRONTEND_URL=https://tu-portfolio.vercel.app
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=https://tu-backend.onrender.com
```

## ✅ Checklist de Despliegue

- [ ] Código subido a GitHub
- [ ] Backend desplegado en Render
- [ ] Base de datos PostgreSQL creada en Render
- [ ] Variables de entorno configuradas en Render
- [ ] Frontend desplegado en Vercel
- [ ] Variable NEXT_PUBLIC_API_URL configurada en Vercel
- [ ] Ejecutar seed para poblar la base de datos
- [ ] Probar que todo funciona correctamente
- [ ] (Opcional) Configurar dominio personalizado

## 🎯 Después del Primer Despliegue

1. Obtén las URLs finales de Render y Vercel
2. Actualiza las variables de entorno con las URLs correctas
3. Ejecuta el seed en producción:
   ```bash
   # Desde Render shell o localmente apuntando a prod
   npm run seed
   ```

## 🆘 Troubleshooting

- **Backend no responde**: Render free tier se duerme, espera 30s en la primera carga
- **CORS errors**: Verifica que FRONTEND_URL en backend coincida con tu URL de Vercel
- **Database no conecta**: Revisa que las variables DATABASE_* estén correctas
- **Build falla**: Asegúrate de que todas las dependencias estén en package.json

---

💜 **Desarrollado por Álvaro Hermosilla Alameda**
