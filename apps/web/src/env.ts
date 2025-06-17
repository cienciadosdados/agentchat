import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    NEXT_PUBLIC_APP_NAME: z.string().optional().default("Agentset"),
    NEXT_PUBLIC_APP_SHORT_DOMAIN: z.string().optional().default("agentset.ai"),

    NEXT_PUBLIC_VERCEL_ENV: z
      .enum(["development", "preview", "production"])
      .optional()
      .default("development"),
  },
  server: {
    DATABASE_URL: z.string().url(),
    SUPABASE_URL: z.string().url().optional(),
    SUPABASE_ANON_KEY: z.string().optional(),

    RESEND_API_KEY: z.string(),

    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.string().url(),

    QSTASH_URL: z.string().url(),
    QSTASH_TOKEN: z.string(),
    QSTASH_CURRENT_SIGNING_KEY: z.string(),
    QSTASH_NEXT_SIGNING_KEY: z.string(),

    DEFAULT_OPENAI_API_KEY: z.string(),
    DEFAULT_OPENAI_MODEL: z.string().optional().default("gpt-4"),
    DEFAULT_OPENAI_EMBEDDING_MODEL: z.string().optional().default("text-embedding-3-large"),

    DEFAULT_PINECONE_API_KEY: z.string(),
    DEFAULT_PINECONE_HOST: z.string().url(),

    SECONDARY_PINECONE_API_KEY: z.string().optional(),
    SECONDARY_PINECONE_HOST: z.string().url().optional(),

    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),

    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),

    PARTITION_API_KEY: z.string(),
    PARTITION_API_URL: z.string().url(),

    DEFAULT_COHERE_API_KEY: z.string(),

    UPLOADTHING_TOKEN: z.string(),
    UPLOADTHING_APP_ID: z.string(),

    ASSETS_UPLOADTHING_TOKEN: z.string(),
    ASSETS_UPLOADTHING_APP_ID: z.string(),
    ASSETS_UPLOADTHING_URL: z.string().url(),

    REDIS_URL: z.string().url(),
    REDIS_TOKEN: z.string(),

    STRIPE_API_KEY: z.string(),
    STRIPE_WEBHOOK_SECRET: z.string(),

    DISCORD_HOOK_ALERTS: z.string().url().optional(),
    DISCORD_HOOK_CRON: z.string().url().optional(),
    DISCORD_HOOK_SUBSCRIBERS: z.string().url().optional(),
    DISCORD_HOOK_ERRORS: z.string().url().optional(),

    VERCEL_PROJECT_ID: z.string(),
    VERCEL_TEAM_ID: z.string(),
    VERCEL_API_TOKEN: z.string(),
  },
  client: {
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_SHORT_DOMAIN: process.env.NEXT_PUBLIC_APP_SHORT_DOMAIN,
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,

    DATABASE_URL: process.env.DATABASE_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,

    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,

    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,

    QSTASH_URL: process.env.QSTASH_URL,
    QSTASH_TOKEN: process.env.QSTASH_TOKEN,
    QSTASH_CURRENT_SIGNING_KEY: process.env.QSTASH_CURRENT_SIGNING_KEY,
    QSTASH_NEXT_SIGNING_KEY: process.env.QSTASH_NEXT_SIGNING_KEY,

    DEFAULT_OPENAI_API_KEY: process.env.DEFAULT_OPENAI_API_KEY,
    DEFAULT_OPENAI_MODEL: process.env.DEFAULT_OPENAI_MODEL,
    DEFAULT_OPENAI_EMBEDDING_MODEL: process.env.DEFAULT_OPENAI_EMBEDDING_MODEL,

    DEFAULT_PINECONE_API_KEY: process.env.DEFAULT_PINECONE_API_KEY,
    DEFAULT_PINECONE_HOST: process.env.DEFAULT_PINECONE_HOST,

    SECONDARY_PINECONE_API_KEY: process.env.SECONDARY_PINECONE_API_KEY,
    SECONDARY_PINECONE_HOST: process.env.SECONDARY_PINECONE_HOST,

    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

    PARTITION_API_KEY: process.env.PARTITION_API_KEY,
    PARTITION_API_URL: process.env.PARTITION_API_URL,

    DEFAULT_COHERE_API_KEY: process.env.DEFAULT_COHERE_API_KEY,

    UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN,
    UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,

    ASSETS_UPLOADTHING_TOKEN: process.env.ASSETS_UPLOADTHING_TOKEN,
    ASSETS_UPLOADTHING_APP_ID: process.env.ASSETS_UPLOADTHING_APP_ID,
    ASSETS_UPLOADTHING_URL: process.env.ASSETS_UPLOADTHING_URL,

    REDIS_URL: process.env.REDIS_URL,
    REDIS_TOKEN: process.env.REDIS_TOKEN,

    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,

    DISCORD_HOOK_ALERTS: process.env.DISCORD_HOOK_ALERTS,
    DISCORD_HOOK_CRON: process.env.DISCORD_HOOK_CRON,
    DISCORD_HOOK_SUBSCRIBERS: process.env.DISCORD_HOOK_SUBSCRIBERS,
    DISCORD_HOOK_ERRORS: process.env.DISCORD_HOOK_ERRORS,

    VERCEL_PROJECT_ID: process.env.VERCEL_PROJECT_ID,
    VERCEL_TEAM_ID: process.env.VERCEL_TEAM_ID,
    VERCEL_API_TOKEN: process.env.VERCEL_API_TOKEN,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
