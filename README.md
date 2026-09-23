# SynHosting

SynHosting is a SaaS-style hosting platform focused on Minecraft servers, Discord bots, and Telegram bots.

## Requisitos

- Node.js 20 LTS o superior
- npm 10 o superior
- Docker Desktop (recomendado para PostgreSQL y Redis)

## Arranque local — Windows, macOS o Linux

Desde la carpeta raíz del repositorio:

```bash
npm install
cp .env.example .env
npm run dev
```

En Windows PowerShell, si `cp` no funciona:

```powershell
Copy-Item .env.example .env
```

Después abre **http://localhost:3000**. También puedes comprobar la aplicación en **http://localhost:3000/api/health**.

> La landing page no necesita una base de datos para mostrarse. PostgreSQL es necesario para registro, login y las funciones del dashboard.

## Base de datos local con Docker

Arranca PostgreSQL y Redis:

```bash
docker compose up -d
```

Comprueba que están activos:

```bash
docker compose ps
```

Genera el cliente Prisma y sincroniza el esquema:

```bash
npm run db:generate
npm run db:push
```

Finalmente arranca Next.js:

```bash
npm run dev
```

Para detener los servicios:

```bash
docker compose down
```

Para borrar también los datos locales y empezar de cero:

```bash
docker compose down -v
```

## Variables de entorno

Para desarrollo local no tienes que pasarme credenciales. Usa `.env.example` y deja estos valores:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=change-me-in-production
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/synhosting?schema=public"
REDIS_URL="redis://localhost:6379"
NEXT_PUBLIC_APP_NAME="SynHosting"
```

No publiques ni compartas un `.env` real, contraseñas, tokens ni claves privadas. Para producción habrá que sustituir especialmente `NEXTAUTH_SECRET`, `DATABASE_URL` y `REDIS_URL` por valores seguros.

## Solución de problemas

### `npm` no se reconoce
Instala Node.js 20 LTS y reinicia la terminal.

### Error `ECONNREFUSED` de PostgreSQL
Ejecuta `docker compose up -d` y luego `npm run db:push`.

### Error `P1001` de Prisma
PostgreSQL no está accesible o `DATABASE_URL` no coincide con el contenedor. En el entorno local usa exactamente la URL del ejemplo.

### Error de puerto 3000 ocupado
Ejecuta:

```bash
npm run dev -- -p 3001
```

Y abre http://localhost:3001. En ese caso cambia también `NEXTAUTH_URL` en `.env` al nuevo puerto.

### La página no carga después de cambiar dependencias
Borra la caché de Next.js y reinstala:

```bash
rm -rf .next node_modules
npm install
npm run dev
```

En Windows PowerShell:

```powershell
Remove-Item -Recurse -Force .next, node_modules
npm install
npm run dev
```

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- PostgreSQL + Prisma
- Auth.js / NextAuth
- Redis
- Docker

## Estructura

- `app/` — páginas y rutas del App Router
- `components/` — componentes reutilizables
- `lib/` — utilidades, Prisma y autenticación
- `prisma/` — esquema de base de datos
- `docker-compose.yml` — PostgreSQL y Redis local
- `Dockerfile` — contenedor de la aplicación
