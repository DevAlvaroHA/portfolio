# 🔒 Guía de Seguridad - Portfolio

Este documento contiene información importante sobre la seguridad del proyecto y las mejores prácticas a seguir.

## ✅ Cambios de Seguridad Aplicados

### 1. Archivos de Entorno Protegidos
- ✅ Todos los archivos `.env` están en `.gitignore`
- ✅ Se han creado archivos `.env.example` como plantillas
- ✅ Los archivos `.env` reales NO están en el repositorio

### 2. Credenciales Eliminadas de la Documentación
- ✅ URLs personales eliminadas de los READMEs
- ✅ Contraseñas de ejemplo reemplazadas con placeholders

### 3. Información Personal Generalizada
- ✅ Datos personales específicos reemplazados con texto genérico
- ✅ URLs de producción actualizadas con placeholders

### 4. Sistema de Autenticación
- ℹ️ Este proyecto **NO tiene sistema de autenticación**
- ℹ️ Todos los endpoints son públicos (excepto el POST /seed para desarrollo)
- ℹ️ No hay panel de administración ni login
- ℹ️ Los datos se gestionan directamente desde la base de datos

## 🔐 Configuración Antes del Primer Push

### Paso 1: Verificar Archivos .env
Asegúrate de que tus archivos `.env` locales NO están siendo trackeados:

```bash
# Verificar archivos trackeados
git ls-files | Select-String -Pattern "\.env"

# No debería mostrar ningún archivo .env
```

### Paso 2: Revisar Variables de Entorno Locales

**Backend (.env):**
- `DATABASE_PASSWORD`: Usa una contraseña segura
- `FRONTEND_URL`: Actualiza si usas otro puerto

**Frontend (.env):**
- `NEXT_PUBLIC_LINKEDIN_URL`: Tu URL de LinkedIn
- `NEXT_PUBLIC_GITHUB_URL`: Tu URL de GitHub
- `NEXT_PUBLIC_EMAIL`: Tu email de contacto

### Paso 3: Configurar Variables en Producción

**Para Render/Railway/Heroku:**
1. NO subas archivos `.env` al repositorio
2. Configura las variables de entorno desde el panel de control
3. Usa valores diferentes a los de desarrollo (especialmente passwords de base de datos)

**Para Vercel:**
1. Configura las variables en el dashboard de Vercel
2. Las variables `NEXT_PUBLIC_*` se incluirán en el build

## ⚠️ Información Sensible a Proteger

### NUNCA subir al repositorio:
- ❌ Archivos `.env` con credenciales reales
- ❌ Contraseñas de bases de datos
- ❌ API keys de servicios externos (si los usas en el futuro)
- ❌ Certificados o claves privadas

### Datos personales:
- ⚠️ Email personal (solo si deseas hacerlo público)
- ⚠️ Números de teléfono
- ⚠️ Direcciones físicas
- ⚠️ URLs de servicios privados

## 🛡️ Mejores Prácticas

### 1. Gestión de Secretos
```bash
# CORRECTO: Usar variables de entorno
DATABASE_PASSWORD=${DATABASE_PASSWORD}

# INCORRECTO: Hardcodear secretos
const password = "mi-password-123";
```

### 2. Contraseñas Seguras
- Mínimo 12 caracteres
- Combinar mayúsculas, minúsculas, números y símbolos
- Usar un gestor de contraseñas (1Password, Bitwarden, LastPass)
- Contraseñas diferentes para desarrollo y producción

### 3. Base de Datos en Producción
- ✅ Usar SSL/TLS para conexiones
- ✅ Configurar reglas de firewall
- ✅ Limitar acceso por IP si es posible
- ✅ Backups automáticos
- ✅ Credentials con permisos mínimos necesarios

## 📝 Checklist Pre-Push

Antes de hacer push a GitHub, verifica:

- [ ] No hay archivos `.env` en el staging area
- [ ] Los archivos `.env.example` no contienen datos reales
- [ ] No hay contraseñas hardcodeadas en el código
- [ ] No hay tokens o API keys en el código
- [ ] La documentación no revela información sensible
- [ ] El `.gitignore` está actualizado

```bash
# Verificar archivos que se van a subir
git status

# Verificar contenido de archivos staged
git diff --staged

# Si encuentras algo sensible, no hagas push
```

## 🚨 ¿Accidentalmente Subiste Información Sensible?

### Solución Inmediata:

1. **Cambiar inmediatamente** todas las credenciales expuestas
2. **Revocar** tokens y API keys comprometidos
3. **Limpiar el historial de Git** (requiere reescribir historia):

```bash
# ADVERTENCIA: Esto reescribe la historia de Git
# Asegúrate de entender lo que haces

# Remover archivo del historial completo
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch ruta/al/archivo" \
  --prune-empty --tag-name-filter cat -- --all

# Forzar push (PELIGROSO en proyectos colaborativos)
git push origin --force --all
```

4. **Mejor opción:** Considera crear un nuevo repositorio limpio

## 🔍 Auditoría de Seguridad

### Herramientas Recomendadas:

1. **git-secrets** - Previene commits con secretos
```bash
# Instalar
git secrets --install

# Registrar patrones
git secrets --register-aws
```

2. **truffleHog** - Busca secretos en el historial de Git
3. **GitGuardian** - Monitoreo automático de repositorios

## 📚 Recursos Adicionales

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [NestJS Security](https://docs.nestjs.com/security/helmet)
- [Next.js Security Headers](https://nextjs.org/docs/advanced-features/security-headers)

## 🆘 Soporte

Si tienes dudas sobre seguridad:
1. Revisa la documentación oficial de las tecnologías usadas
2. Consulta con un experto en seguridad
3. NO compartas credenciales por canales inseguros

---

**Recuerda:** La seguridad es un proceso continuo, no un estado final. Mantente actualizado y revisa regularmente las prácticas de seguridad.
