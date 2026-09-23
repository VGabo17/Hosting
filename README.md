# SynHosting

SynHosting is a SaaS-style hosting platform focused on Minecraft servers, Discord bots, and Telegram bots.

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- PostgreSQL + Prisma
- Auth.js / NextAuth
- Redis
- Docker

## Features

- Public landing page
- Authentication and user registration
- Client dashboard
- Admin dashboard
- Service catalog for Minecraft, Discord, and Telegram
- Prisma models for users, plans, and services
- Dockerized local environment

## Getting started

1. Copy the environment file:
   ```bash
   cp .env.example .env
   ```

2. Start PostgreSQL and Redis:
   ```bash
   docker compose up -d
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Generate Prisma client:
   ```bash
   npm run db:generate
   ```

5. Apply database schema:
   ```bash
   npm run db:push
   ```

6. Run the app:
   ```bash
   npm run dev
   ```

The app will be available at: http://localhost:3000

## Project structure

- `app/` - Next.js app router pages and routes
- `components/` - reusable UI components
- `lib/` - utilities and auth helpers
- `prisma/` - Prisma schema and migrations
- `docker-compose.yml` - local infrastructure services
- `Dockerfile` - containerization for the app

## Roadmap

- Landing page and brand identity
- User auth and onboarding
- Client dashboard and orders
- Admin panel for plans and users
- Deployment integrations for nodes and containers
- Billing and automation
