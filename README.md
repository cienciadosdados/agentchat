<a href="https://agentset.ai">
  <img alt="Agentset is the open-source RAG platform." src="https://repository-images.githubusercontent.com/945763259/9a3ddd06-12c2-4122-990e-d9390101ce31">
</a>

<h3 align="center">Agentset</h3>

<p align="center">
    The open-source RAG platform.
    <br />
    <a href="https://agentset.ai"><strong>Learn more »</strong></a>
    <br />
    <br />
    <a href="#introduction"><strong>Introduction</strong></a> ·
    <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
    <a href="#self-hosting-and-development"><strong>Self-hosting</strong></a> ·
    <a href="#quick-start"><strong>Quick Start</strong></a>
</p>

<p align="center">
  <a href="https://github.com/agentset-ai/agentset/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/agentset-ai/agentset?label=license&logo=github&color=000&logoColor=fff" alt="License" />
  </a> 
  <a href="https://github.com/agentset-ai/agentset">
    <img src="https://img.shields.io/github/stars/agentset-ai/agentset" alt="Stars" />
  </a>
</p>

<br/>

## Introduction

Agentset is the open-source RAG platform for developers.

## Quick Start

### 1. Configure Environment Variables
Copy `.env.example` to `.env` and fill in all required variables:
- Supabase (Database)
- GitHub & Google OAuth
- OpenAI API
- Pinecone (Vector Database)
- Upstash (Redis & QStash)
- Resend (Emails)
- Stripe (Payments)
- Uploadthing (File Uploads)

### 2. Run Setup Script
**Windows:**
```powershell
.\setup.ps1
```

**Linux/Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

### 3. Start Development Server
```bash
cd apps/web
pnpm dev
```

Visit `http://localhost:3000` 

### Manual Setup (if scripts don't work)
```bash
# Install dependencies
pnpm install

# Setup database
cd packages/db
npx dotenv -e ../../.env -- npx prisma generate
npx dotenv -e ../../.env -- npx prisma db push

# Start development
cd ../../apps/web
pnpm dev
```

## Tech Stack

- [Next.js](https://nextjs.org/) – framework
- [TypeScript](https://www.typescriptlang.org/) – language
- [Tailwind](https://tailwindcss.com/) – CSS
- [Shadcn/ui](https://ui.shadcn.com/) – components
- [Upstash](https://upstash.com/) – redis, workflows
- [Supabase](https://supabase.com/) – database
- [Prisma](https://prisma.io/) - orm
- [BetterAuth](https://better-auth.com/) – auth
- [Turborepo](https://turbo.build/repo) – monorepo
- [Stripe](https://stripe.com/) – payments
- [Resend](https://resend.com/) – emails
- [Vercel](https://vercel.com/) – deployments

## Self-Hosting and Development

You can find a complete self-hosting guide [here](https://docs.agentset.ai/self-hosting).

## License

Agentset is open-source under the MIT License. You can [find it here](https://github.com/agentset-ai/agentset/blob/main/LICENSE).
