# Guia de Setup - Agentset RAG Platform

Este guia te ajudará a configurar e fazer deploy da plataforma Agentset em poucos passos.

## Pré-requisitos

- Node.js 22.12.0+ (use `nvm use` se tiver o nvm instalado)
- Conta no GitHub
- Conta no Vercel (para deploy)

## Serviços Necessários

Você precisará criar contas e obter API keys dos seguintes serviços:

### 1. **Supabase** (Database)
- Acesse: https://supabase.com
- Crie um novo projeto
- Vá em Settings → Database → Connection string
- Copie a connection string (Session mode - porta 5432)

### 2. **GitHub OAuth** (Login)
- Vá em GitHub → Settings → Developer settings → OAuth Apps
- Crie nova OAuth App:
  - **Name**: Seu App Name
  - **Homepage URL**: `http://localhost:3000` (dev) / `https://seu-app.vercel.app` (prod)
  - **Callback URL**: `http://localhost:3000/api/auth/callback/github` (dev) / `https://seu-app.vercel.app/api/auth/callback/github` (prod)
- Copie Client ID e Client Secret

### 3. **OpenAI** (IA)
- Acesse: https://platform.openai.com
- Crie uma API key
- Adicione créditos à sua conta
- Modelos usados:
  - **gpt-4** (para chat)
  - **text-embedding-3-large** (para embeddings)

### 4. **Pinecone** (Vector Database)
- Acesse: https://pinecone.io
- Crie um novo index:
  - **Dimensions**: 1536
  - **Metric**: cosine
- Copie API key e host URL

### 5. **Upstash** (Redis + QStash)
- Acesse: https://upstash.com
- Crie um **Redis database** (para cache)
- Crie um **QStash** (para workflows)
- Copie URLs e tokens de ambos

### 6. **Resend** (Emails)
- Acesse: https://resend.com
- Crie uma API key

### 7. **Stripe** (Pagamentos)
- Acesse: https://stripe.com
- Crie uma conta
- Copie as keys de teste (sk_test_ e pk_test_)
- Configure webhook endpoint (depois do deploy)

### 8. **AWS S3** (Upload de arquivos)
- Crie um bucket S3
- Crie um usuário IAM com permissões no bucket
- Copie Access Key e Secret Key

## Configuração

### 1. Clone e instale dependências
```bash
git clone [seu-fork-do-repo]
cd agentset
pnpm install
```

### 2. Configure variáveis de ambiente
Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

Edite o arquivo `.env` e substitua todos os valores placeholder:

```bash
# ===== CONFIGURAÇÕES BÁSICAS =====
NEXT_PUBLIC_APP_DOMAIN="http://localhost:3000"

# ===== DATABASE (SUPABASE) =====
DATABASE_URL="postgres://prisma.SEU_PROJECT_REF:SUA_SENHA_PRISMA@SEU_REGION.pooler.supabase.com:5432/postgres"
DIRECT_URL="postgres://prisma.SEU_PROJECT_REF:SUA_SENHA_PRISMA@SEU_REGION.pooler.supabase.com:5432/postgres"

# ===== AUTENTICAÇÃO =====
BETTER_AUTH_SECRET="sua-chave-secreta-de-32-caracteres"
BETTER_AUTH_URL="http://localhost:3000"

# ===== GITHUB OAUTH =====
GITHUB_CLIENT_ID=seu_github_client_id
GITHUB_CLIENT_SECRET=seu_github_client_secret

# ===== OPENAI =====
DEFAULT_OPENAI_API_KEY=sk-sua_openai_api_key
DEFAULT_OPENAI_MODEL=gpt-4
DEFAULT_OPENAI_EMBEDDING_MODEL=text-embedding-3-large

# ===== PINECONE (VECTOR DATABASE) =====
DEFAULT_PINECONE_API_KEY=pcsk_sua_pinecone_api_key
DEFAULT_PINECONE_HOST="https://seu-index.svc.region.pinecone.io"

# ===== UPSTASH REDIS =====
REDIS_URL=https://seu-redis.upstash.io
REDIS_TOKEN=seu_upstash_token

# ===== QSTASH (WORKFLOWS) =====
QSTASH_URL="https://qstash.upstash.io"
QSTASH_TOKEN=seu_qstash_token
QSTASH_CURRENT_SIGNING_KEY=sig_seu_current_key
QSTASH_NEXT_SIGNING_KEY=sig_seu_next_key

# ===== RESEND (EMAILS) =====
RESEND_API_KEY="re_sua_resend_api_key"

# ===== STRIPE (PAGAMENTOS) =====
STRIPE_API_KEY=sk_test_sua_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_sua_stripe_public_key
STRIPE_WEBHOOK_SECRET=whsec_sua_stripe_webhook_secret

# ===== S3 (UPLOADS DE ARQUIVOS) =====
S3_ACCESS_KEY=seu_s3_access_key
S3_SECRET_KEY=seu_s3_secret_key
S3_ENDPOINT=https://s3.amazonaws.com
S3_BUCKET=seu-bucket-name
```

### 3. Configure o banco de dados
No Supabase SQL Editor, execute:
```sql
-- Criar usuário Prisma
create user "prisma" with password 'SUA_SENHA_FORTE' bypassrls createdb;
grant "prisma" to "postgres";
grant usage on schema public to prisma;
grant create on schema public to prisma;
grant all on all tables in schema public to prisma;
grant all on all routines in schema public to prisma;
grant all on all sequences in schema public to prisma;
alter default privileges for role postgres in schema public grant all on tables to prisma;
alter default privileges for role postgres in schema public grant all on routines to prisma;
alter default privileges for role postgres in schema public grant all on sequences to prisma;
```

### 4. Execute migrações
```bash
pnpm db:generate
pnpm db:deploy
```

### 5. Teste localmente
```bash
pnpm dev
```

Acesse: http://localhost:3000

## Deploy no Vercel

### 1. Conecte ao Vercel
- Acesse https://vercel.com
- Conecte seu repositório GitHub
- Importe o projeto

### 2. Configure variáveis de ambiente
No dashboard do Vercel, adicione todas as variáveis do seu `.env`, mas altere:
- `NEXT_PUBLIC_APP_DOMAIN` para sua URL do Vercel
- `BETTER_AUTH_URL` para sua URL do Vercel
- URLs de callback do GitHub OAuth para sua URL do Vercel

### 3. Configure Stripe Webhook
Após o deploy:
- No Stripe Dashboard → Webhooks
- Adicione endpoint: `https://seu-app.vercel.app/api/stripe/webhook`
- Eventos: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`
- Copie o webhook secret e atualize `STRIPE_WEBHOOK_SECRET`

### 4. Deploy
```bash
git push origin main
```

O Vercel fará o deploy automaticamente!

## Troubleshooting

### Erro de conexão com banco
- Verifique se a string de conexão está correta
- Confirme se o usuário Prisma foi criado no Supabase

### Erro de autenticação GitHub
- Verifique se as URLs de callback estão corretas
- Confirme Client ID e Secret

### Erro de OpenAI
- Verifique se a API key está correta
- Confirme se há créditos na conta

### Erro de build no Vercel
- Verifique se todas as variáveis de ambiente estão configuradas
- Confirme se não há erros de TypeScript

## Suporte

Se encontrar problemas, verifique:
1. Todas as variáveis de ambiente estão preenchidas
2. Todos os serviços externos estão configurados
3. As URLs de callback estão corretas
4. Há créditos/cotas nos serviços pagos

---

**Boa sorte com seu deploy! 
