# 🚀 Backend Portfolio - API Documentation

## 📦 Quick Start

```bash
# 1. Install dependencies
cd backend
npm install

# 2. Create .env file (see .env.example)

# 3. Start Docker database
docker run -d -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=portfolio -v portfolio_postgres_data:/var/lib/postgresql/data -p 5433:5432 --name portfolio_db postgres:15-alpine

# 4. Seed database with sample data
npm run seed

# 5. Start development server
npm run start:dev
```

Access:
- **API**: http://localhost:3000
- **Swagger Docs**: http://localhost:3000/api

## 📚 API Endpoints

### Auth
- `POST /users/register` - Register admin
- `POST /users/login` - Login

### Profile
- `GET /profile/active` - Get public profile
- `POST /profile` - Create profile (admin)

### Projects
- `GET /projects` - List all projects
- `GET /projects/featured` - Featured projects
- `POST /projects` - Create project (admin)

### Experience
- `GET /experience` - List experience
- `POST /experience` - Create experience (admin)

### Education
- `GET /education` - List education
- `POST /education` - Create education (admin)

### Contact
- `POST /contact` - Send message (public)
- `GET /contact` - List messages (admin)

## 🔐 Default Credentials (after seed)

```
Email: admin@portfolio.com
Password: Admin123!
```

## 🛠️ Scripts

```bash
npm run start:dev    # Development
npm run start:prod   # Production
npm run build        # Build
npm run seed         # Seed database
npm run lint         # Lint code
```

For full documentation, see main README.md
