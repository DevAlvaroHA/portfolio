# 🚀 Backend Portfolio - API Documentation

## 📦 Quick Start

```bash
# 1. Install dependencies
cd backend
npm install

# 2. Copy and configure .env file
cp .env.example .env
# Edit .env with your database credentials

# 3. Start Docker database
docker run -d -e POSTGRES_PASSWORD=tu_password_seguro -e POSTGRES_DB=portfolio -v portfolio_postgres_data:/var/lib/postgresql/data -p 5433:5432 --name portfolio_db postgres:15-alpine

# 4. Seed database with sample data
npm run seed

# 5. Start development server
npm run start:dev
```

Access:
- **API**: http://localhost:3000
- **Swagger Docs**: http://localhost:3000/api

## 📚 API Endpoints

Todos los endpoints son públicos (no requieren autenticación):

### General
- `GET /` - Health check de la API
- `POST /seed` - Poblar base de datos (solo desarrollo)

### Profile
- `GET /profile/active` - Obtener perfil activo

### Projects
- `GET /projects` - Listar todos los proyectos
- `GET /projects/featured` - Proyectos destacados

### Experience
- `GET /experience` - Listar experiencia laboral

### Education
- `GET /education` - Listar formación académica

### Contact
- `POST /contact` - Enviar mensaje de contacto

## 🛠️ Scripts

```bash
npm run start:dev    # Development
npm run start:prod   # Production
npm run build        # Build
npm run seed         # Seed database
npm run lint         # Lint code
```

For full documentation, see main README.md
