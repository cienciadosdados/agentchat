module.exports = {

"[project]/apps/web/.next-internal/server/app/api/(internal-api)/trpc/[trpc]/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@opentelemetry/api", () => require("@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/apps/web/src/env.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "env": (()=>env)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEnv"])({
    shared: {
        NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
            "development",
            "test",
            "production"
        ]).default("development"),
        NEXT_PUBLIC_APP_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("Agentset"),
        NEXT_PUBLIC_APP_SHORT_DOMAIN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("agentset.ai"),
        NEXT_PUBLIC_VERCEL_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
            "development",
            "preview",
            "production"
        ]).optional().default("development")
    },
    server: {
        DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().url(),
        SUPABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().url().optional(),
        SUPABASE_ANON_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
        RESEND_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        BETTER_AUTH_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        BETTER_AUTH_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().url(),
        QSTASH_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().url().optional().default("https://qstash.upstash.io"),
        QSTASH_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        QSTASH_CURRENT_SIGNING_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        QSTASH_NEXT_SIGNING_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        DEFAULT_OPENAI_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        DEFAULT_OPENAI_MODEL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("gpt-4"),
        DEFAULT_OPENAI_EMBEDDING_MODEL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("text-embedding-3-large"),
        DEFAULT_PINECONE_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        DEFAULT_PINECONE_HOST: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        SECONDARY_PINECONE_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
        SECONDARY_PINECONE_HOST: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().url().optional(),
        GITHUB_CLIENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        GITHUB_CLIENT_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        GOOGLE_CLIENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        GOOGLE_CLIENT_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        PARTITION_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        PARTITION_API_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().url().optional().default("https://api.unstructuredapp.io"),
        DEFAULT_COHERE_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        UPLOADTHING_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        UPLOADTHING_APP_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        ASSETS_UPLOADTHING_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        ASSETS_UPLOADTHING_APP_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        ASSETS_UPLOADTHING_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().url().optional().default("https://utfs.io/f/"),
        REDIS_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        REDIS_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        STRIPE_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        STRIPE_WEBHOOK_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        DISCORD_HOOK_ALERTS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().url().optional(),
        DISCORD_HOOK_CRON: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().url().optional(),
        DISCORD_HOOK_SUBSCRIBERS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().url().optional(),
        DISCORD_HOOK_ERRORS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().url().optional(),
        VERCEL_PROJECT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        VERCEL_TEAM_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        VERCEL_API_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured")
    },
    client: {
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured")
    },
    runtimeEnv: {
        NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
        NEXT_PUBLIC_APP_SHORT_DOMAIN: process.env.NEXT_PUBLIC_APP_SHORT_DOMAIN,
        NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
        NODE_ENV: ("TURBOPACK compile-time value", "development"),
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
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY: ("TURBOPACK compile-time value", "pk_test_51Nb36rCTpYTBATrr7lLEaYCBLQVWe6rHnZJWrvHrVB2CcGat3HCkLor1LYZBdDCkXx21ifPPdLerRdL1AVQ13KnQBeLIQZJSX"),
        DISCORD_HOOK_ALERTS: process.env.DISCORD_HOOK_ALERTS,
        DISCORD_HOOK_CRON: process.env.DISCORD_HOOK_CRON,
        DISCORD_HOOK_SUBSCRIBERS: process.env.DISCORD_HOOK_SUBSCRIBERS,
        DISCORD_HOOK_ERRORS: process.env.DISCORD_HOOK_ERRORS,
        VERCEL_PROJECT_ID: process.env.VERCEL_PROJECT_ID,
        VERCEL_TEAM_ID: process.env.VERCEL_TEAM_ID,
        VERCEL_API_TOKEN: process.env.VERCEL_API_TOKEN
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
    emptyStringAsUndefined: true
});
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/packages/db/src/client.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$neon$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-neon/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
;
const createPrismaClient = ()=>{
    // Supabase pooled connection string (must use Supavisor)
    const connectionString = process.env.DATABASE_URL ?? "";
    if (connectionString.includes("@localhost")) {
        // Disable SSL for local connections
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neonConfig"].useSecureWebSocket = false;
        // WebSocket proxy is hosted on `4000` locally, so add port. Does not work in production.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neonConfig"].wsProxy = (host)=>`${host}:4000/v2`;
    }
    // Only Neon hosts support this -- non-deterministic errors otherwise
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neonConfig"].pipelineConnect = false;
    // So it can also work in Node.js
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neonConfig"].webSocketConstructor = WebSocket;
    const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$neon$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaNeon"]({
        connectionString
    });
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
        adapter,
        log: ("TURBOPACK compile-time truthy", 1) ? [
            "query",
            "error",
            "warn"
        ] : ("TURBOPACK unreachable", undefined)
    });
};
const globalForPrisma = globalThis;
const db = globalForPrisma.prisma ?? createPrismaClient();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = db;
}}),
"[project]/packages/db/src/types/prisma.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-namespace */ __turbopack_context__.s({});
;
}}),
"[project]/packages/db/src/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$types$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/types/prisma.ts [app-route] (ecmascript)");
;
;
;
}}),
"[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$types$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/types/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <locals>");
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:util [external] (node:util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}}),
"[externals]/node:http [external] (node:http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:http", () => require("node:http"));

module.exports = mod;
}}),
"[externals]/node:https [external] (node:https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:https", () => require("node:https"));

module.exports = mod;
}}),
"[externals]/node:events [external] (node:events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs) <export randomFillSync as default>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomFillSync"])
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
}}),
"[project]/packages/emails/src/components/footer.tsx [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Footer": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/hr/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/link/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/tailwind/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [app-route] (ecmascript)");
;
;
function Footer({ email, marketing, notificationSettingsUrl, domain }) {
    if (marketing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tailwind"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hr"], {
                    className: "mx-0 my-6 w-full border border-neutral-200"
                }, void 0, false, {
                    fileName: "[project]/packages/emails/src/components/footer.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                    className: "text-[12px] leading-6 text-neutral-500",
                    children: [
                        "We send out product update emails once a month – no spam, no nonsense. Don't want to get these emails?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Link"], {
                            className: "text-neutral-700 underline",
                            href: `${domain}/account/settings`,
                            children: "Unsubscribe here."
                        }, void 0, false, {
                            fileName: "[project]/packages/emails/src/components/footer.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/emails/src/components/footer.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                    className: "text-[12px] text-neutral-500",
                    children: "Agentset Inc."
                }, void 0, false, {
                    fileName: "[project]/packages/emails/src/components/footer.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/emails/src/components/footer.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tailwind"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hr"], {
                className: "mx-0 my-6 w-full border border-neutral-200"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/components/footer.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-[12px] leading-6 text-neutral-500",
                children: [
                    "This email was intended for ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-black",
                        children: email
                    }, void 0, false, {
                        fileName: "[project]/packages/emails/src/components/footer.tsx",
                        lineNumber: 39,
                        columnNumber: 37
                    }, this),
                    ". If you were not expecting this email, you can ignore this email. If you are concerned about your account's safety, please reply to this email to get in touch with us."
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/components/footer.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            notificationSettingsUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-[12px] leading-6 text-neutral-500",
                children: [
                    "Don’t want to get these emails?",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Link"], {
                        className: "text-neutral-700 underline",
                        href: notificationSettingsUrl,
                        children: "Adjust your notification settings"
                    }, void 0, false, {
                        fileName: "[project]/packages/emails/src/components/footer.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/components/footer.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-[12px] text-neutral-500",
                children: "Agentset Inc."
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/components/footer.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/emails/src/components/footer.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}}),
"[project]/packages/emails/src/components/logo.tsx [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Logo": (()=>Logo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$img$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/img/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/link/dist/index.mjs [app-route] (ecmascript)");
;
;
const Logo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Link"], {
        href: "https://agentset.ai",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$img$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Img"], {
            src: "https://assets.agentset.ai/logo-full.png",
            height: "40",
            alt: "Agentset"
        }, void 0, false, {
            fileName: "[project]/packages/emails/src/components/logo.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/emails/src/components/logo.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
}}),
"[project]/packages/emails/src/components/default-layout.tsx [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DefaultLayout": (()=>DefaultLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$body$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/body/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$container$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/container/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$head$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/head/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$html$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/html/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$preview$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/preview/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/tailwind/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$footer$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/components/footer.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/components/logo.tsx [app-route] (ecmascript)");
;
;
;
;
function DefaultLayout({ preview, children, footer }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$html$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Html"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$head$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Head"], {}, void 0, false, {
                fileName: "[project]/packages/emails/src/components/default-layout.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$preview$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Preview"], {
                children: preview
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/components/default-layout.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tailwind"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$body$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Body"], {
                    className: "mx-auto my-auto bg-white font-sans",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$container$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Container"], {
                        className: "mx-auto my-10 max-w-[600px] rounded border border-solid border-neutral-200 px-10 py-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Section"], {
                                className: "mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                                    fileName: "[project]/packages/emails/src/components/default-layout.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/emails/src/components/default-layout.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            children,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$footer$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Footer"], {
                                ...footer
                            }, void 0, false, {
                                fileName: "[project]/packages/emails/src/components/default-layout.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/emails/src/components/default-layout.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/emails/src/components/default-layout.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/components/default-layout.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/emails/src/components/default-layout.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}}),
"[project]/packages/emails/src/templates/invite-user.tsx [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OrganizationInvite": (()=>OrganizationInvite),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/button/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/heading/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/link/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$default$2d$layout$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/components/default-layout.tsx [app-route] (ecmascript)");
;
;
;
function OrganizationInvite({ email = "john@doe.com", url = "http://localhost:8888/api/auth/callback/email?callbackUrl=http%3A%2F%2Fapp.localhost%3A3000%2Flogin&token=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&email=youremail@gmail.com", organizationName = "Acme", organizationUser = "Brendon Urie", organizationUserEmail = "panic@thedis.co", domain = "https://app.agentset.ai" }) {
    const emailLink = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Link"], {
        className: "text-blue-600 no-underline",
        href: `mailto:${organizationUserEmail}`,
        children: organizationUserEmail
    }, void 0, false, {
        fileName: "[project]/packages/emails/src/templates/invite-user.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$default$2d$layout$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DefaultLayout"], {
        preview: `Join ${organizationName} on Agentset`,
        footer: {
            email,
            domain
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Heading"], {
                className: "mx-0 my-7 p-0 text-xl font-medium text-black",
                children: [
                    "Join ",
                    organizationName,
                    " on Agentset"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/templates/invite-user.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            organizationUser || organizationUserEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: [
                    organizationUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: organizationUser
                            }, void 0, false, {
                                fileName: "[project]/packages/emails/src/templates/invite-user.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            " (",
                            emailLink,
                            ")"
                        ]
                    }, void 0, true) : emailLink,
                    " ",
                    "has invited you to join the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: organizationName
                    }, void 0, false, {
                        fileName: "[project]/packages/emails/src/templates/invite-user.tsx",
                        lineNumber: 46,
                        columnNumber: 39
                    }, this),
                    " ",
                    "organization on Agentset!"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/templates/invite-user.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: [
                    "You have been invited to join the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: organizationName
                    }, void 0, false, {
                        fileName: "[project]/packages/emails/src/templates/invite-user.tsx",
                        lineNumber: 51,
                        columnNumber: 45
                    }, this),
                    " ",
                    "organization on Agentset!"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/templates/invite-user.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Section"], {
                className: "my-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Button"], {
                    className: "rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white no-underline",
                    href: url,
                    children: "Join Organization"
                }, void 0, false, {
                    fileName: "[project]/packages/emails/src/templates/invite-user.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/invite-user.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: "or copy and paste this URL into your browser:"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/invite-user.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "max-w-sm flex-wrap font-medium break-words text-purple-600 no-underline",
                children: url.replace(/^https?:\/\//, "")
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/invite-user.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/emails/src/templates/invite-user.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = OrganizationInvite;
}}),
"[project]/packages/emails/src/components/button.tsx [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/button/dist/index.mjs [app-route] (ecmascript)");
;
;
function Button(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Button"], {
        className: "rounded-full bg-black px-6 py-2.5 text-center text-sm font-semibold text-white no-underline",
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/emails/src/components/button.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}}),
"[project]/packages/emails/src/templates/login.tsx [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/components/button.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$default$2d$layout$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/components/default-layout.tsx [app-route] (ecmascript)");
;
;
;
;
const LoginEmail = ({ loginLink = "https://portal.example.com/login", email = "john@doe.com", domain = "https://app.agentset.ai" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$default$2d$layout$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DefaultLayout"], {
        preview: "Login to Agentset",
        footer: {
            email,
            domain
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: "Here's your requested login link."
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/login.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Section"], {
                className: "my-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Button"], {
                    href: loginLink,
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/packages/emails/src/templates/login.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/login.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: "or copy and paste this URL into your browser:"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/login.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "max-w-sm flex-wrap font-medium break-words text-purple-600 no-underline",
                children: loginLink.replace(/^https?:\/\//, "")
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/login.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: "Please note: This email contains a link that should only be used by you. Do not forward this email."
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/login.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/emails/src/templates/login.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LoginEmail;
}}),
"[project]/packages/emails/src/templates/failed-payment.tsx [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FailedPayment": (()=>FailedPayment),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/heading/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/components/button.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$default$2d$layout$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/components/default-layout.tsx [app-route] (ecmascript)");
;
;
;
;
function FailedPayment({ user = {
    name: "John Doe",
    email: "john@doe.com"
}, organization = {
    name: "Agentset",
    slug: "agentset"
}, amountDue = 49, attemptCount = 2, domain = "https://app.agentset.ai" }) {
    const title = `${attemptCount == 2 ? "2nd notice: " : attemptCount == 3 ? "3rd notice: " : ""}Your payment for Agentset failed`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$default$2d$layout$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DefaultLayout"], {
        preview: title,
        footer: {
            email: user.email,
            domain
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Heading"], {
                className: "mx-0 my-7 p-0 text-lg font-medium text-black",
                children: [
                    attemptCount == 2 ? "2nd " : attemptCount == 3 ? "3rd  " : "",
                    "Failed Payment for Agentset"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/templates/failed-payment.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: [
                    "Hey",
                    user.name ? `, ${user.name}` : "",
                    "!"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/templates/failed-payment.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: [
                    "Your payment of",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "text-purple-600",
                        children: [
                            "$",
                            amountDue / 100
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/emails/src/templates/failed-payment.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    " for your Agentset organization",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "text-purple-600",
                        children: organization.name
                    }, void 0, false, {
                        fileName: "[project]/packages/emails/src/templates/failed-payment.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    " has failed. Please update your payment information using the link below:"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/templates/failed-payment.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Section"], {
                className: "my-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Button"], {
                    href: `${domain}/${organization.slug}/settings/billing`,
                    children: "Update payment information"
                }, void 0, false, {
                    fileName: "[project]/packages/emails/src/templates/failed-payment.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/failed-payment.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: "If you have any questions, feel free to respond to this email – we're happy to help!"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/failed-payment.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/emails/src/templates/failed-payment.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = FailedPayment;
}}),
"[project]/packages/emails/src/templates/upgrade-email.tsx [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UpgradeEmail": (()=>UpgradeEmail),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/heading/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/link/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$default$2d$layout$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/components/default-layout.tsx [app-route] (ecmascript)");
;
;
;
function UpgradeEmail({ name = "John Doe", email = "john@doe.com", plan = {
    name: "Pro",
    features: []
}, domain = "https://app.agentset.ai" }) {
    const finalFeatures = plan.features ? plan.features.filter((feature)=>!feature.disabled) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$default$2d$layout$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DefaultLayout"], {
        preview: `Thank you for upgrading to Agentset ${plan.name}!`,
        footer: {
            email,
            domain
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Heading"], {
                className: "mx-0 my-7 p-0 text-xl font-medium text-black",
                children: [
                    "Thank you for upgrading to Agentset ",
                    plan.name,
                    "!"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/templates/upgrade-email.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: [
                    "Hey",
                    name && ` ${name}`,
                    "!"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/templates/upgrade-email.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: "My name is Abdellatif, and I'm the co-founder of Agentset."
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/upgrade-email.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: [
                    "I wanted to personally reach out to thank you for upgrading to",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: [
                            "Agentset ",
                            plan.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/emails/src/templates/upgrade-email.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    "! Your support means the world to us and helps us continue to build and improve Agentset."
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/templates/upgrade-email.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            finalFeatures.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                        className: "text-sm leading-6 text-black",
                        children: [
                            "On the ",
                            plan.name,
                            " plan, you now have access to:"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/emails/src/templates/upgrade-email.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    finalFeatures.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                            className: "ml-1 text-sm leading-4 text-black",
                            children: [
                                "◆",
                                " ",
                                feature.tooltip?.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Link"], {
                                    href: feature.tooltip.href,
                                    children: feature.text
                                }, void 0, false, {
                                    fileName: "[project]/packages/emails/src/templates/upgrade-email.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this) : feature.text
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/emails/src/templates/upgrade-email.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: "If you have any questions or feedback about Agentset, please don't hesitate to reach out – I'm always happy to help!"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/upgrade-email.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 font-light text-neutral-400",
                children: "Abdellatif from Agentset"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/upgrade-email.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/emails/src/templates/upgrade-email.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = UpgradeEmail;
}}),
"[project]/packages/emails/src/templates/welcome-email.tsx [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WelcomeEmail": (()=>WelcomeEmail),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/heading/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/link/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$default$2d$layout$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/components/default-layout.tsx [app-route] (ecmascript)");
;
;
;
function WelcomeEmail({ name = "John Doe", email = "john@doe.com", domain = "https://app.agentset.ai" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$components$2f$default$2d$layout$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DefaultLayout"], {
        preview: "Welcome to Agentset.ai",
        footer: {
            email,
            domain
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Heading"], {
                className: "mx-0 my-7 p-0 text-xl font-medium text-black",
                children: "Welcome to Agentset"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/welcome-email.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: [
                    "Thanks for signing up",
                    name && `, ${name}`,
                    "!"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/templates/welcome-email.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: "My name is Abdellatif, and I'm the co-founder of Agentset - the open source RAG platform. We're excited to have you on board!"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/welcome-email.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: "Here are a few things you can do:"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/welcome-email.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "ml-1 text-sm leading-4 text-black",
                children: "◆ Create a namespace"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/welcome-email.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "ml-1 text-sm leading-4 text-black",
                children: "◆ Ingest your first document"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/welcome-email.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "ml-1 text-sm leading-4 text-black",
                children: "◆ Chat with your documents in the playground"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/welcome-email.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "ml-1 text-sm leading-4 text-black",
                children: [
                    "◆ Check out our",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Link"], {
                        href: "https://docs.agentset.ai/",
                        className: "font-medium text-blue-600 no-underline",
                        children: "API documentation"
                    }, void 0, false, {
                        fileName: "[project]/packages/emails/src/templates/welcome-email.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/packages/emails/src/templates/welcome-email.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 text-black",
                children: "Let me know if you have any questions or feedback. I'm always happy to help!"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/welcome-email.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Text"], {
                className: "text-sm leading-6 font-light text-neutral-400",
                children: "Abdellatif from Agentset"
            }, void 0, false, {
                fileName: "[project]/packages/emails/src/templates/welcome-email.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/emails/src/templates/welcome-email.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = WelcomeEmail;
}}),
"[project]/packages/emails/src/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$invite$2d$user$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/invite-user.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$login$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/login.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$failed$2d$payment$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/failed-payment.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$upgrade$2d$email$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/upgrade-email.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$welcome$2d$email$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/welcome-email.tsx [app-route] (ecmascript)");
;
;
;
;
;
}}),
"[project]/packages/emails/src/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$invite$2d$user$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/invite-user.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$login$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/login.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$failed$2d$payment$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/failed-payment.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$upgrade$2d$email$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/upgrade-email.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$welcome$2d$email$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/welcome-email.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/emails/src/index.ts [app-route] (ecmascript) <locals>");
}}),
"[project]/packages/emails/src/templates/invite-user.tsx [app-route] (ecmascript) <export default as InviteUserEmail>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InviteUserEmail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$invite$2d$user$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$invite$2d$user$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/invite-user.tsx [app-route] (ecmascript)");
}}),
"[project]/packages/emails/src/templates/login.tsx [app-route] (ecmascript) <export default as LoginEmail>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LoginEmail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$login$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$login$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/login.tsx [app-route] (ecmascript)");
}}),
"[project]/packages/emails/src/templates/welcome-email.tsx [app-route] (ecmascript) <export default as WelcomeEmail>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WelcomeEmail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$welcome$2d$email$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$welcome$2d$email$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/welcome-email.tsx [app-route] (ecmascript)");
}}),
"[project]/apps/web/src/lib/constants.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_DOMAIN": (()=>API_DOMAIN),
    "API_HOSTNAMES": (()=>API_HOSTNAMES),
    "APP_DOMAIN": (()=>APP_DOMAIN),
    "APP_HOSTNAMES": (()=>APP_HOSTNAMES),
    "APP_NAME": (()=>APP_NAME),
    "HOSTING_PREFIX": (()=>HOSTING_PREFIX),
    "INFINITY_NUMBER": (()=>INFINITY_NUMBER),
    "SHORT_DOMAIN": (()=>SHORT_DOMAIN)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
;
const INFINITY_NUMBER = 1000000000;
const APP_NAME = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_APP_NAME;
const SHORT_DOMAIN = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_APP_SHORT_DOMAIN;
const localHost = `localhost:${process.env.PORT ?? 3000}`;
const APP_HOSTNAMES = new Set([
    `app.${SHORT_DOMAIN}`,
    `preview.${SHORT_DOMAIN}`,
    localHost
]);
const APP_DOMAIN = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_VERCEL_ENV === "production" ? `https://app.${SHORT_DOMAIN}` : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_VERCEL_ENV === "preview" ? `https://preview.${SHORT_DOMAIN}` : `http://${localHost}`;
const API_HOSTNAMES = new Set([
    `api.${SHORT_DOMAIN}`,
    `api-staging.${SHORT_DOMAIN}`,
    `api.${localHost}`
]);
const API_DOMAIN = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_VERCEL_ENV === "production" ? `https://api.${SHORT_DOMAIN}` : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_VERCEL_ENV === "preview" ? `https://api-staging.${SHORT_DOMAIN}` : `http://api.${localHost}`;
const HOSTING_PREFIX = "/a/";
}}),
"[externals]/node:stream [external] (node:stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}}),
"[project]/apps/web/src/lib/resend.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resend": (()=>resend),
    "sendEmail": (()=>sendEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/render/dist/node/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/constants.ts [app-route] (ecmascript)");
;
;
;
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].RESEND_API_KEY);
const VARIANT_TO_FROM_MAP = {
    primary: "Agentset.ai <system@agentset.ai>",
    notifications: "Agentset.ai <notifications@agentset.ai>",
    marketing: "Abdellatif from Agentset.ai <contact@agentset.ai>"
};
const sendEmail = async (opts)=>{
    const { email, from, variant = "primary", bcc, replyTo, subject, text, react, scheduledAt } = opts;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NODE_ENV === "development" && (text || react)) {
        const emailText = text || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["render"])(react, {
            plainText: true
        });
        // log to console
        console.log(`Sending email to ${email} from ${from || VARIANT_TO_FROM_MAP[variant]}`);
        console.log(emailText);
        return;
    }
    return await resend.emails.send({
        to: email,
        from: from || VARIANT_TO_FROM_MAP[variant],
        bcc: bcc,
        replyTo: replyTo || "support@agentset.ai",
        subject,
        text,
        react,
        scheduledAt,
        ...variant === "marketing" && {
            headers: {
                "List-Unsubscribe": `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APP_DOMAIN"]}/account/settings`
            }
        }
    });
};
}}),
"[project]/apps/web/src/lib/utils.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchWithTimeout": (()=>fetchWithTimeout),
    "formatDuration": (()=>formatDuration),
    "formatMs": (()=>formatMs),
    "formatNumber": (()=>formatNumber),
    "getBaseUrl": (()=>getBaseUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/constants.ts [app-route] (ecmascript)");
;
;
function getBaseUrl() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NODE_ENV === "production") return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APP_DOMAIN"];
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return `http://localhost:${process.env.PORT ?? 3000}`;
}
let formatter;
let compactFormatter;
let currencyFormatter;
function formatNumber(num, style = "decimal") {
    let formatterToUse;
    if (style === "decimal") {
        if (!formatter) {
            formatter = new Intl.NumberFormat("en-US", {
                style: "decimal",
                minimumFractionDigits: 0,
                maximumFractionDigits: 1
            });
        }
        formatterToUse = formatter;
    } else if (style === "currency") {
        if (!currencyFormatter) {
            currencyFormatter = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
            });
        }
        formatterToUse = currencyFormatter;
    } else {
        if (!compactFormatter) {
            compactFormatter = new Intl.NumberFormat("en-US", {
                notation: "compact",
                minimumFractionDigits: 0,
                maximumFractionDigits: 1
            });
        }
        formatterToUse = compactFormatter;
    }
    return formatterToUse.format(num);
}
function formatMs(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    if (hours > 0) {
        return `${hours}h ${minutes}m ${seconds}s`;
    }
    if (minutes > 0) {
        return `${minutes}m ${seconds}s`;
    }
    if (seconds > 0) {
        return `${seconds}s`;
    }
    return `${ms}ms`;
}
function formatDuration(start, end) {
    const duration = end.getTime() - start.getTime();
    return formatMs(duration);
}
function fetchWithTimeout(input, init, timeout = 5000) {
    return new Promise((resolve, reject)=>{
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>{
            controller.abort();
            reject(new Error("Request timed out"));
        }, timeout);
        fetch(input, {
            ...init,
            signal: controller.signal
        }).then((response)=>{
            clearTimeout(timeoutId);
            resolve(response);
        }).catch((error)=>{
            clearTimeout(timeoutId);
            reject(error);
        });
    });
}
}}),
"[project]/apps/web/src/lib/auth.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "auth": (()=>auth),
    "getSession": (()=>getSession),
    "makeAuth": (()=>makeAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/better-auth/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/better-auth/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$prisma$2d$adapter$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/better-auth/dist/adapters/prisma-adapter/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/better-auth/dist/plugins/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CDnTKHpI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__admin$3e$__ = __turbopack_context__.i("[project]/node_modules/better-auth/dist/shared/better-auth.CDnTKHpI.mjs [app-route] (ecmascript) <export a as admin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$magic$2d$link$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/better-auth/dist/plugins/magic-link/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B5gC5Szw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__organization$3e$__ = __turbopack_context__.i("[project]/node_modules/better-auth/dist/shared/better-auth.B5gC5Szw.mjs [app-route] (ecmascript) <export o as organization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/emails/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$invite$2d$user$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__InviteUserEmail$3e$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/invite-user.tsx [app-route] (ecmascript) <export default as InviteUserEmail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$login$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__LoginEmail$3e$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/login.tsx [app-route] (ecmascript) <export default as LoginEmail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$welcome$2d$email$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__WelcomeEmail$3e$__ = __turbopack_context__.i("[project]/packages/emails/src/templates/welcome-email.tsx [app-route] (ecmascript) <export default as WelcomeEmail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/constants.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$resend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/resend.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const makeAuth = (baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].BETTER_AUTH_URL, isHosting = false)=>{
    const isUsingDefaultUrl = baseUrl === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].BETTER_AUTH_URL;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["betterAuth"])({
        appName: "Agentset",
        baseURL: baseUrl,
        secret: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].BETTER_AUTH_SECRET,
        socialProviders: {
            github: {
                clientId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GITHUB_CLIENT_ID,
                clientSecret: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GITHUB_CLIENT_SECRET
            },
            google: {
                clientId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GOOGLE_CLIENT_ID,
                clientSecret: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GOOGLE_CLIENT_SECRET
            }
        },
        trustedOrigins: [
            baseUrl
        ],
        plugins: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CDnTKHpI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__admin$3e$__["admin"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B5gC5Szw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__organization$3e$__["organization"])({
                sendInvitationEmail: async ({ email, organization, id, inviter })=>{
                    const url = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/invitation/${id}`;
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$resend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
                        email,
                        subject: "You've been invited to join an organization on Agentset.ai",
                        react: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$invite$2d$user$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__InviteUserEmail$3e$__["InviteUserEmail"])({
                            email,
                            url,
                            organizationName: organization.name,
                            organizationUserEmail: inviter.user.email,
                            organizationUser: inviter.user.name || null,
                            domain: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APP_DOMAIN"]
                        })
                    });
                }
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$magic$2d$link$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["magicLink"])({
                sendMagicLink: async ({ email, url })=>{
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$resend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
                        email,
                        subject: "Your Agentset login link",
                        react: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$login$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__LoginEmail$3e$__["LoginEmail"])({
                            loginLink: url,
                            email,
                            domain: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APP_DOMAIN"]
                        })
                    });
                }
            })
        ],
        account: {
            accountLinking: {
                enabled: true,
                trustedProviders: [
                    "google",
                    "github"
                ],
                allowDifferentEmails: false
            }
        },
        user: {
            additionalFields: {
                referrerDomain: {
                    type: "string",
                    required: false
                }
            }
        },
        databaseHooks: {
            user: {
                create: {
                    // TODO: track the hosting id
                    before: !isUsingDefaultUrl ? async (user)=>{
                        const domain = new URL(baseUrl).host;
                        return {
                            data: {
                                ...user,
                                referrerDomain: domain
                            }
                        };
                    } : undefined,
                    // only send welcome email if using default url
                    after: isUsingDefaultUrl && !isHosting ? async (user)=>{
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$resend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
                            email: user.email,
                            subject: "Welcome to Agentset",
                            react: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$emails$2f$src$2f$templates$2f$welcome$2d$email$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__WelcomeEmail$3e$__["WelcomeEmail"])({
                                name: user.name || null,
                                email: user.email,
                                domain: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APP_DOMAIN"]
                            }),
                            variant: "marketing"
                        });
                    } : undefined
                }
            }
        },
        database: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$prisma$2d$adapter$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prismaAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"], {
            provider: "postgresql"
        }),
        session: {
            cookieCache: {
                enabled: true,
                maxAge: 5 * 60
            }
        }
    });
};
const auth = makeAuth();
const getSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const allHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headers"])();
    const session = await auth.api.getSession({
        headers: allHeaders
    }).catch(()=>null);
    return session;
});
}}),
"[project]/apps/web/src/server/api/auth.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getNamespaceByUser": (()=>getNamespaceByUser),
    "getServerAuthSession": (()=>getServerAuthSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth.ts [app-route] (ecmascript)");
;
;
;
const getServerAuthSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async (headersObj)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: headersObj ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headers"])()
    }));
const getNamespaceByUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async (ctx, idOrSlug)=>{
    return await ctx.db.namespace.findFirst({
        where: {
            ..."id" in idOrSlug ? {
                id: idOrSlug.id
            } : {
                slug: idOrSlug.slug
            },
            organization: {
                members: {
                    some: {
                        userId: ctx.session.user.id
                    }
                }
            }
        }
    });
});
}}),
"[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */ __turbopack_context__.s({
    "createCallerFactory": (()=>createCallerFactory),
    "createTRPCContext": (()=>createTRPCContext),
    "createTRPCRouter": (()=>createTRPCRouter),
    "protectedProcedure": (()=>protectedProcedure),
    "publicProcedure": (()=>publicProcedure)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$initTRPC$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/initTRPC.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/auth.ts [app-route] (ecmascript)");
;
;
;
;
;
const createTRPCContext = async (opts)=>{
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerAuthSession"])(opts.headers);
    return {
        db: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"],
        session,
        ...opts
    };
};
/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */ const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$initTRPC$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTRPC"].context().create({
    transformer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    errorFormatter ({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError: error.cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodError"] ? error.cause.flatten() : null
            }
        };
    }
});
const createCallerFactory = t.createCallerFactory;
const createTRPCRouter = t.router;
/**
 * Middleware for timing procedure execution and adding an artificial delay in development.
 *
 * You can remove this if you don't like it, but it can help catch unwanted waterfalls by simulating
 * network latency that would occur in production but not in local development.
 */ const timingMiddleware = t.middleware(async ({ next, path })=>{
    const start = Date.now();
    if (t._config.isDev) {
        // artificial delay in dev
        const waitMs = Math.floor(Math.random() * 400) + 100;
        await new Promise((resolve)=>setTimeout(resolve, waitMs));
    }
    const result = await next();
    const end = Date.now();
    console.log(`[TRPC] ${path} took ${end - start}ms to execute`);
    return result;
});
const publicProcedure = t.procedure.use(timingMiddleware);
const protectedProcedure = t.procedure.use(({ ctx, next })=>{
    if (!ctx.session) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "UNAUTHORIZED"
        });
    }
    return next({
        ctx: {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            session: ctx.session
        }
    });
});
}}),
"[project]/apps/web/src/server/api/routers/api-keys.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiKeysRouter": (()=>apiKeysRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
;
;
;
const keyGenerator = (prefix, length = 16)=>{
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let apiKey = `${prefix || ""}`;
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        apiKey += characters[randomIndex];
    }
    return apiKey;
};
const apiKeysRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    getApiKeys: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        orgId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        // make sure the user is a member of the org
        const member = await ctx.db.member.findFirst({
            where: {
                userId: ctx.session.user.id,
                organizationId: input.orgId
            },
            select: {
                id: true,
                role: true
            }
        });
        if (!member || member.role !== "admin" && member.role !== "owner") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "UNAUTHORIZED"
            });
        }
        const apiKeys = await ctx.db.organizationApiKey.findMany({
            where: {
                organizationId: input.orgId
            },
            omit: {
                key: true
            }
        });
        return apiKeys;
    }),
    createApiKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        orgId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        scope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
            "all"
        ])
    })).mutation(async ({ ctx, input })=>{
        const member = await ctx.db.member.findFirst({
            where: {
                userId: ctx.session.user.id,
                organizationId: input.orgId
            }
        });
        if (!member || member.role !== "admin" && member.role !== "owner") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "UNAUTHORIZED"
            });
        }
        const apiKey = await ctx.db.organizationApiKey.create({
            data: {
                label: input.label,
                scope: input.scope,
                organizationId: input.orgId,
                key: keyGenerator("agentset_")
            }
        });
        return apiKey;
    }),
    deleteApiKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        orgId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        const member = await ctx.db.member.findFirst({
            where: {
                userId: ctx.session.user.id,
                organizationId: input.orgId
            }
        });
        if (!member || member.role !== "admin" && member.role !== "owner") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "UNAUTHORIZED"
            });
        }
        await ctx.db.organizationApiKey.delete({
            where: {
                id: input.id
            }
        });
        return {
            success: true
        };
    })
});
}}),
"[project]/apps/web/src/lib/plans.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ENTERPRISE_PLAN": (()=>ENTERPRISE_PLAN),
    "FREE_ORGANIZATIONS_LIMIT": (()=>FREE_ORGANIZATIONS_LIMIT),
    "FREE_PLAN": (()=>FREE_PLAN),
    "PLANS": (()=>PLANS),
    "PRO_PLAN": (()=>PRO_PLAN),
    "PRO_PLAN_METERED": (()=>PRO_PLAN_METERED),
    "SELF_SERVE_PAID_PLANS": (()=>SELF_SERVE_PAID_PLANS),
    "getCurrentPlan": (()=>getCurrentPlan),
    "getNextPlan": (()=>getNextPlan),
    "getPlanDetails": (()=>getPlanDetails),
    "getPlanFromPriceId": (()=>getPlanFromPriceId),
    "getStripeEnvironment": (()=>getStripeEnvironment),
    "isDowngradePlan": (()=>isDowngradePlan),
    "isProPlan": (()=>isProPlan),
    "planToOrganizationFields": (()=>planToOrganizationFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/constants.ts [app-route] (ecmascript)");
;
;
const PLANS = [
    {
        name: "Free",
        description: "For personal use and small projects.",
        price: {
            monthly: 0,
            yearly: 0
        },
        limits: {
            pages: 1000,
            retrievals: 10_000,
            api: 60
        },
        features: [
            {
                id: "pages",
                text: "1,000 pages included"
            },
            {
                id: "retrievals",
                text: "10,000 retrievals /month"
            },
            {
                id: "api",
                text: "60 API calls /min"
            },
            {
                id: "support",
                text: "Basic support"
            },
            {
                id: "additional_pages",
                text: "$0.01 per additional page",
                disabled: true
            },
            {
                id: "connector",
                text: "$100 per connector",
                disabled: true
            }
        ]
    },
    {
        name: "Pro",
        description: "For production applications ready to scale.",
        price: {
            monthly: 49,
            yearly: 490,
            ids: [
                "price_1RE26ODPtsw7PNYQduDp19Gx",
                "price_1RE26ODPtsw7PNYQlDfyMYjV",
                "price_1RE25PDPtsw7PNYQXPwhPIAt",
                "price_1RE25PDPtsw7PNYQQjlEQbPf"
            ]
        },
        limits: {
            pages: 10_000,
            retrievals: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INFINITY_NUMBER"],
            api: 600
        },
        featureTitle: "Everything in Free, plus:",
        features: [
            {
                id: "pages",
                text: "10,000 pages included"
            },
            {
                id: "retrievals",
                text: "Unlimited retrievals"
            },
            {
                id: "additional_pages",
                text: "$0.01 per additional page"
            },
            {
                id: "connector",
                text: "$100 per connector"
            },
            {
                id: "api",
                text: "600 API calls /min"
            },
            {
                id: "support",
                text: "Email support"
            }
        ]
    }
];
const ENTERPRISE_PLAN = {
    name: "Enterprise",
    description: "For organizations with custom workflows.",
    price: "Custom",
    features: [
        {
            id: "pages",
            text: "Unlimited pages"
        },
        {
            id: "retrievals",
            text: "Unlimited retrievals"
        },
        {
            id: "connector",
            text: "Custom connector pricing"
        },
        {
            id: "integrations",
            text: "Custom integrations"
        },
        {
            id: "api",
            text: "Custom API rate limit"
        },
        {
            id: "support",
            text: "Dedicated account manager"
        }
    ]
};
const PRO_PLAN_METERED = {
    lookupKey: "pro_plan_metered",
    meterName: "ingested_pages",
    priceId: {
        test: "price_1RapvfDPtsw7PNYQvLZvqIpc",
        live: "price_1RaqhNDPtsw7PNYQ9lqtoORc"
    }
};
const getStripeEnvironment = ()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NODE_ENV === "production") return "live";
    return "test";
};
const FREE_PLAN = PLANS.find((plan)=>plan.name === "Free");
const PRO_PLAN = PLANS.find((plan)=>plan.name === "Pro");
const SELF_SERVE_PAID_PLANS = PLANS.filter((p)=>[
        "Pro"
    ].includes(p.name));
const FREE_ORGANIZATIONS_LIMIT = 2;
const getPlanFromPriceId = (priceId)=>{
    if (!priceId) return null;
    return PLANS.find((plan)=>plan.price.ids?.includes(priceId)) || null;
};
const getPlanDetails = (plan)=>{
    return SELF_SERVE_PAID_PLANS.find((p)=>p.name.toLowerCase() === plan.toLowerCase());
};
const getCurrentPlan = (plan)=>{
    return PLANS.find((p)=>p.name.toLowerCase() === plan.toLowerCase()) || FREE_PLAN;
};
const getNextPlan = (plan)=>{
    if (!plan) return PRO_PLAN;
    return PLANS[PLANS.findIndex((p)=>p.name.toLowerCase() === plan.toLowerCase()) + 1];
};
const isDowngradePlan = (currentPlan, newPlan)=>{
    const currentPlanIndex = PLANS.findIndex((p)=>p.name.toLowerCase() === currentPlan.toLowerCase());
    const newPlanIndex = PLANS.findIndex((p)=>p.name.toLowerCase() === newPlan.toLowerCase());
    return currentPlanIndex > newPlanIndex;
};
const planToOrganizationFields = (plan)=>{
    return {
        plan: plan.name.toLowerCase(),
        pagesLimit: plan.limits.pages,
        searchLimit: plan.limits.retrievals,
        apiRatelimit: plan.limits.api
    };
};
const isProPlan = (plan)=>{
    return plan.toLowerCase() === "pro";
};
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[project]/apps/web/src/lib/stripe/index.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "stripe": (()=>stripe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stripe/esm/stripe.esm.node.js [app-route] (ecmascript)");
;
;
const stripe = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].STRIPE_API_KEY, {
    // @ts-expect-error - Stripe only has the type of the latest version
    apiVersion: "2024-06-20",
    appInfo: {
        name: "Agentset.ai",
        version: "0.1.0"
    }
});
}}),
"[project]/apps/web/src/server/api/routers/billing.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "billingRouter": (()=>billingRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$plans$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/plans.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/stripe/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const organizationMiddleware = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    orgId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
})).use(async ({ ctx, next, input })=>{
    const organization = await ctx.db.organization.findUnique({
        where: {
            id: input.orgId,
            members: {
                some: {
                    userId: ctx.session.user.id
                }
            }
        },
        select: {
            id: true,
            slug: true,
            stripeId: true
        }
    });
    if (!organization) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "NOT_FOUND",
            message: "Organization not found"
        });
    }
    return next({
        ctx: {
            ...ctx,
            organization
        }
    });
});
const billingRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    getCurrentPlan: organizationMiddleware.query(async ({ ctx })=>{
        const org = await ctx.db.organization.findUnique({
            where: {
                id: ctx.organization.id
            },
            select: {
                plan: true,
                pagesLimit: true,
                totalPages: true,
                totalDocuments: true,
                totalIngestJobs: true,
                totalNamespaces: true,
                billingCycleStart: true,
                stripeId: true
            }
        });
        return org;
    }),
    upgrade: organizationMiddleware.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        plan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
            "free",
            "pro"
        ]),
        period: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
            "monthly",
            "yearly"
        ]),
        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        const { plan, period, baseUrl } = input;
        const planKey = plan.replace(" ", "+");
        const prices = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].prices.list({
            lookup_keys: [
                `${planKey}_${period}`
            ]
        });
        const priceId = prices.data[0].id;
        const activeSubscription = ctx.organization.stripeId ? await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].subscriptions.list({
            customer: ctx.organization.stripeId,
            status: "active"
        }).then((res)=>res.data[0]) : null;
        // if the user has an active subscription, create billing portal to upgrade
        if (ctx.organization.stripeId && activeSubscription) {
            const { url } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].billingPortal.sessions.create({
                customer: ctx.organization.stripeId,
                return_url: baseUrl,
                flow_data: {
                    type: "subscription_update",
                    subscription_update: {
                        subscription: activeSubscription.id
                    }
                }
            });
            return {
                url
            };
        } else {
            // For both new users and users with canceled subscriptions
            const stripeSession = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].checkout.sessions.create({
                ...ctx.organization.stripeId ? {
                    customer: ctx.organization.stripeId,
                    // need to pass this or Stripe will throw an error: https://git.new/kX4fi6B
                    customer_update: {
                        name: "auto",
                        address: "auto"
                    }
                } : {
                    customer_email: ctx.session.user.email
                },
                billing_address_collection: "required",
                success_url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/${ctx.organization.slug}?upgraded=true&plan=${planKey}&period=${period}`,
                cancel_url: baseUrl,
                line_items: [
                    {
                        price: priceId,
                        quantity: 1
                    },
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$plans$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProPlan"])(plan) ? [
                        {
                            price: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$plans$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PRO_PLAN_METERED"].priceId[(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$plans$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStripeEnvironment"])()]
                        }
                    ] : []
                ],
                allow_promotion_codes: true,
                automatic_tax: {
                    enabled: true
                },
                tax_id_collection: {
                    enabled: true
                },
                mode: "subscription",
                client_reference_id: ctx.organization.id,
                metadata: {
                    agentsetCustomerId: ctx.session.user.id
                }
            });
            return {
                sessionId: stripeSession.id
            };
        }
    }),
    invoices: organizationMiddleware.query(async ({ ctx })=>{
        if (!ctx.organization.stripeId) {
            return [];
        }
        try {
            const invoices = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].invoices.list({
                customer: ctx.organization.stripeId
            });
            return invoices.data.map((invoice)=>{
                return {
                    id: invoice.id,
                    total: invoice.amount_paid,
                    createdAt: new Date(invoice.created * 1000),
                    description: "Agentset subscription",
                    pdfUrl: invoice.invoice_pdf
                };
            });
        } catch (error) {
            console.log(error);
            return [];
        }
    }),
    manage: organizationMiddleware.mutation(async ({ ctx })=>{
        if (!ctx.organization.stripeId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "No Stripe customer ID"
            });
        }
        try {
            const { url } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].billingPortal.sessions.create({
                customer: ctx.organization.stripeId,
                return_url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/${ctx.organization.slug}/billing`
            });
            return url;
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: error?.raw?.message
            });
        }
    }),
    getPaymentMethods: organizationMiddleware.query(async ({ ctx })=>{
        if (!ctx.organization.stripeId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "No Stripe customer ID"
            });
        }
        try {
            const paymentMethods = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].paymentMethods.list({
                customer: ctx.organization.stripeId
            });
            // reorder to put ACH first
            const ach = paymentMethods.data.find((method)=>method.type === "us_bank_account");
            return [
                ...ach ? [
                    ach
                ] : [],
                ...paymentMethods.data.filter((method)=>method.id !== ach?.id)
            ];
        } catch (error) {
            console.error(error);
            return [];
        }
    }),
    addPaymentMethod: organizationMiddleware.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
            "card",
            "us_bank_account"
        ]).optional()
    })).mutation(async ({ ctx, input })=>{
        if (!ctx.organization.stripeId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "No Stripe customer ID"
            });
        }
        if (!input.method) {
            const { url } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].billingPortal.sessions.create({
                customer: ctx.organization.stripeId,
                return_url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/${ctx.organization.slug}/billing`,
                flow_data: {
                    type: "payment_method_update"
                }
            });
            return url;
        }
        const { url } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].checkout.sessions.create({
            mode: "setup",
            customer: ctx.organization.stripeId,
            payment_method_types: [
                input.method
            ],
            success_url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/${ctx.organization.slug}/billing`,
            cancel_url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/${ctx.organization.slug}/billing`
        });
        return url;
    }),
    cancel: organizationMiddleware.mutation(async ({ ctx })=>{
        if (!ctx.organization.stripeId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "No Stripe customer ID"
            });
        }
        try {
            const activeSubscription = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].subscriptions.list({
                customer: ctx.organization.stripeId,
                status: "active"
            }).then((res)=>res.data[0]);
            if (!activeSubscription) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "No active subscription"
            });
            const { url } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].billingPortal.sessions.create({
                customer: ctx.organization.stripeId,
                return_url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/${ctx.organization.slug}/billing`,
                flow_data: {
                    type: "subscription_cancel",
                    subscription_cancel: {
                        subscription: activeSubscription.id
                    }
                }
            });
            return url;
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: error.raw.message
            });
        }
    })
});
}}),
"[project]/apps/web/src/server/api/routers/connectors.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "connectorsRouter": (()=>connectorsRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/auth.ts [app-route] (ecmascript)");
;
;
;
;
const connectorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    connectorProvider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
        "s3",
        "google_drive",
        "notion",
        "dropbox",
        "onedrive"
    ]),
    clientId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
    clientSecret: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
    accessKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
    secretKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional()
});
const connectorsRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    create: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        connector: connectorSchema
    })).mutation(async ({ ctx, input })=>{
        const ns = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceByUser"])(ctx, {
            id: input.namespaceId
        });
        if (!ns) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Namespace not found"
            });
        }
        // TODO: Implementar lógica real de criação de conectores
        // Por enquanto, apenas simula a criação
        const connector = {
            id: `conn_${Date.now()}`,
            name: getConnectorName(input.connector.connectorProvider),
            type: input.connector.connectorProvider,
            status: "connected",
            lastSync: new Date().toISOString(),
            namespaceId: input.namespaceId
        };
        // TODO: Salvar no banco de dados
        console.log("Creating connector:", connector);
        return connector;
    }),
    list: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        const ns = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceByUser"])(ctx, {
            id: input.namespaceId
        });
        if (!ns) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Namespace not found"
            });
        }
        // TODO: Buscar conectores reais do banco de dados
        // Por enquanto, retorna dados mock
        return [
            {
                id: "1",
                name: "Google Drive",
                type: "google_drive",
                status: "connected",
                lastSync: "2024-03-20T10:00:00Z"
            },
            {
                id: "2",
                name: "AWS S3",
                type: "s3",
                status: "connected",
                lastSync: "2024-03-19T15:30:00Z"
            },
            {
                id: "3",
                name: "Dropbox",
                type: "dropbox",
                status: "disconnected",
                lastSync: "2024-03-18T12:00:00Z"
            }
        ];
    }),
    delete: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        connectorId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        const ns = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceByUser"])(ctx, {
            id: input.namespaceId
        });
        if (!ns) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Namespace not found"
            });
        }
        // TODO: Implementar lógica real de exclusão
        console.log("Deleting connector:", input.connectorId);
        return {
            success: true
        };
    })
});
function getConnectorName(provider) {
    const names = {
        s3: "AWS S3",
        google_drive: "Google Drive",
        notion: "Notion",
        dropbox: "Dropbox",
        onedrive: "OneDrive"
    };
    return names[provider] || provider;
}
}}),
"[project]/apps/web/src/lib/zod/index.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$openapi$2f$dist$2f$extendZod$2e$chunk$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-openapi/dist/extendZod.chunk.mjs [app-route] (ecmascript)");
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$openapi$2f$dist$2f$extendZod$2e$chunk$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendZodWithOpenApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__);
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__;
}}),
"[project]/packages/validation/src/zod.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$openapi$2f$dist$2f$extendZod$2e$chunk$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-openapi/dist/extendZod.chunk.mjs [app-route] (ecmascript)");
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$openapi$2f$dist$2f$extendZod$2e$chunk$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendZodWithOpenApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__);
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__;
}}),
"[project]/packages/validation/src/embedding-model/openai.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OpenAIEmbeddingConfigSchema": (()=>OpenAIEmbeddingConfigSchema),
    "openaiEmbeddingModelEnum": (()=>openaiEmbeddingModelEnum)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/zod.ts [app-route] (ecmascript)");
;
const openaiEmbeddingModelEnum = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enum([
    "text-embedding-3-small",
    "text-embedding-3-large"
]);
const OpenAIEmbeddingConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].literal("OPENAI"),
    model: openaiEmbeddingModelEnum,
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string()
}).openapi({
    title: "OpenAI Embedding Config"
});
}}),
"[project]/packages/validation/src/embedding-model/azure.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AzureEmbeddingConfigSchema": (()=>AzureEmbeddingConfigSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/zod.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/openai.ts [app-route] (ecmascript)");
;
;
const AzureEmbeddingConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].literal("AZURE_OPENAI"),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openaiEmbeddingModelEnum"],
    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().url().describe("The base URL of the Azure OpenAI API.").openapi({
        example: `https://example.openai.azure.com/openai/deployments`
    }),
    deployment: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().describe("The deployment name of the Azure OpenAI API."),
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().describe("The API key for the Azure OpenAI API."),
    apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().optional().describe("The API version for the Azure OpenAI API.")
}).openapi({
    title: "Azure Embedding Config"
});
}}),
"[project]/packages/validation/src/embedding-model/google.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GoogleEmbeddingConfigSchema": (()=>GoogleEmbeddingConfigSchema),
    "googleEmbeddingModelEnum": (()=>googleEmbeddingModelEnum)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/zod.ts [app-route] (ecmascript)");
;
const googleEmbeddingModelEnum = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enum([
    "text-embedding-004"
]);
const GoogleEmbeddingConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].literal("GOOGLE"),
    model: googleEmbeddingModelEnum,
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string()
}).openapi({
    title: "Google Embedding Config"
});
}}),
"[project]/packages/validation/src/embedding-model/voyage.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "VoyageEmbeddingConfigSchema": (()=>VoyageEmbeddingConfigSchema),
    "voyageEmbeddingModelEnum": (()=>voyageEmbeddingModelEnum)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/zod.ts [app-route] (ecmascript)");
;
const voyageEmbeddingModelEnum = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enum([
    "voyage-3-large",
    "voyage-3",
    "voyage-3-lite",
    "voyage-code-3",
    "voyage-finance-2",
    "voyage-law-2"
]);
const VoyageEmbeddingConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].literal("VOYAGE"),
    model: voyageEmbeddingModelEnum,
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string()
}).openapi({
    title: "Voyage Embedding Config"
});
}}),
"[project]/packages/validation/src/embedding-model/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EmbeddingConfigSchema": (()=>EmbeddingConfigSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/zod.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$azure$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/azure.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$google$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/google.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/openai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$voyage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/voyage.ts [app-route] (ecmascript)");
;
;
;
;
;
const EmbeddingConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].discriminatedUnion("provider", [
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OpenAIEmbeddingConfigSchema"],
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$azure$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AzureEmbeddingConfigSchema"],
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$voyage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VoyageEmbeddingConfigSchema"],
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$google$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleEmbeddingConfigSchema"]
]).describe("The embedding model config. If not provided, our managed embedding model will be used. Note: You can't change the embedding model config after the namespace is created.");
;
;
;
;
}}),
"[project]/packages/validation/src/embedding-model/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/zod.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$azure$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/azure.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$google$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/google.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/openai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$voyage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/voyage.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/index.ts [app-route] (ecmascript) <locals>");
}}),
"[project]/packages/validation/src/vector-store/pinecone.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PineconeVectorStoreConfigSchema": (()=>PineconeVectorStoreConfigSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/zod.ts [app-route] (ecmascript)");
;
const PineconeVectorStoreConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].literal("PINECONE"),
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().describe("The API key for the Pinecone index."),
    indexHost: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().url().describe("The host of the Pinecone index.").openapi({
        example: `https://example.svc.aped-1234-a56b.pinecone.io`
    })
}).openapi({
    title: "Pinecone Config"
});
}}),
"[project]/packages/validation/src/vector-store/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "VectorStoreSchema": (()=>VectorStoreSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/zod.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$vector$2d$store$2f$pinecone$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/vector-store/pinecone.ts [app-route] (ecmascript)");
;
;
const VectorStoreSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].discriminatedUnion("provider", [
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$vector$2d$store$2f$pinecone$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PineconeVectorStoreConfigSchema"]
]).describe("The vector store config. If not provided, our managed vector store will be used. Note: You can't change the vector store config after the namespace is created.");
;
}}),
"[project]/packages/validation/src/vector-store/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/zod.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$vector$2d$store$2f$pinecone$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/vector-store/pinecone.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/validation/src/vector-store/index.ts [app-route] (ecmascript) <locals>");
}}),
"[project]/packages/validation/src/ingest-payload/index.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "configSchema": (()=>configSchema),
    "filePayloadSchema": (()=>filePayloadSchema),
    "ingestJobPayloadSchema": (()=>ingestJobPayloadSchema),
    "managedFilePayloadSchema": (()=>managedFilePayloadSchema),
    "managedFilesPayloadSchema": (()=>managedFilesPayloadSchema),
    "textPayloadSchema": (()=>textPayloadSchema),
    "urlsPayloadSchema": (()=>urlsPayloadSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/zod.ts [app-route] (ecmascript)");
;
const nameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().nullable().optional().describe("The name of the ingest job.");
const fileNameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().nullable().optional().describe("The name of the file.");
const textPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].literal("TEXT"),
    text: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().describe("The text to ingest."),
    name: nameSchema
}).openapi({
    title: "Text Payload"
});
const filePayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].literal("FILE"),
    fileUrl: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().describe("The URL of the file to ingest."),
    name: nameSchema
}).openapi({
    title: "URL Payload"
});
const managedFilePayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].literal("MANAGED_FILE"),
    key: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().describe("The key of the managed file to ingest."),
    name: nameSchema
}).openapi({
    title: "Managed File Payload"
});
const managedFilesPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].literal("MANAGED_FILES"),
    files: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
        key: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().describe("The key of the managed file to ingest."),
        name: fileNameSchema
    })),
    name: nameSchema
}).openapi({
    title: "Managed Files Payload"
});
const urlsPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].literal("URLS"),
    urls: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().url()).describe("The URLs to ingest."),
    name: nameSchema
}).openapi({
    title: "URLs Payload"
});
const ingestJobPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].discriminatedUnion("type", [
    textPayloadSchema,
    filePayloadSchema,
    managedFilePayloadSchema,
    managedFilesPayloadSchema,
    urlsPayloadSchema
]).describe("The ingest job payload.");
const configSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    chunkSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].number().optional().describe("Custom chunk size."),
    chunkOverlap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].number().optional().describe("Custom chunk overlap."),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].record(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].unknown()).optional().describe("Custom metadata to be added to the ingested documents."),
    chunkingStrategy: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enum([
        "basic",
        "by_title"
    ]).optional().describe("The chunking strategy to use. Defaults to `basic`."),
    strategy: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enum([
        "auto",
        "fast",
        "hi_res",
        "ocr_only"
    ]).optional().describe("The strategy to use. Defaults to `auto`.")
}).describe("The ingest job config.");
}}),
"[project]/packages/validation/src/document-payload/index.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "documentPayloadSchema": (()=>documentPayloadSchema),
    "documentPropertiesSchema": (()=>documentPropertiesSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$ingest$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/ingest-payload/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/zod.ts [app-route] (ecmascript)");
;
;
const documentPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].discriminatedUnion("type", [
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$ingest$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["textPayloadSchema"].omit({
        name: true
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$ingest$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["filePayloadSchema"].omit({
        name: true
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$ingest$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["managedFilePayloadSchema"].omit({
        name: true
    })
]).describe("The source of the document.");
const documentPropertiesSchema = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    fileSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].number().describe("The size of the file in bytes."),
    mimeType: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$zod$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().nullable().default(null).describe("The MIME type of the file.")
}).describe("The properties of the document.");
}}),
"[project]/packages/validation/src/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/validation/src/vector-store/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$ingest$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/ingest-payload/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$document$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/document-payload/index.ts [app-route] (ecmascript)");
;
;
;
;
}}),
"[project]/packages/validation/src/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/validation/src/vector-store/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$ingest$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/ingest-payload/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$document$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/document-payload/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/validation/src/index.ts [app-route] (ecmascript) <locals>");
}}),
"[project]/apps/web/src/schemas/api/pagination.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "paginationResponseSchema": (()=>paginationResponseSchema),
    "paginationSchema": (()=>paginationSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/zod/index.ts [app-route] (ecmascript)");
;
const paginationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    cursor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().optional().describe("The cursor to paginate by."),
    cursorDirection: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enum([
        "forward",
        "backward"
    ]).default("forward").describe("The direction to paginate by."),
    perPage: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].coerce.number().min(1).max(100).optional().default(30).describe("The number of records to return per page.")
});
const paginationResponseSchema = (recordSchema)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
        records: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].array(recordSchema).describe("The records to return."),
        nextCursor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().nullable().describe("The next cursor to paginate by.")
    });
}}),
"[project]/apps/web/src/schemas/api/document.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DocumentSchema": (()=>DocumentSchema),
    "DocumentStatusSchema": (()=>DocumentStatusSchema),
    "DocumentsQuerySchema": (()=>DocumentsQuerySchema),
    "getDocumentsSchema": (()=>getDocumentsSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/zod/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/validation/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$document$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/document-payload/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$schemas$2f$api$2f$pagination$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/schemas/api/pagination.ts [app-route] (ecmascript)");
;
;
;
;
const nameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().nullable().default(null).describe("The name of the document.");
const DocumentStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DocumentStatus"]).describe("The status of the document.");
const DocumentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().describe("The unique ID of the document."),
    ingestJobId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().describe("The ingest job ID of the document."),
    externalId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().nullable().default(null).describe("A unique external ID."),
    name: nameSchema,
    tenantId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().nullable().default(null).describe("The tenant ID of the ingest job."),
    status: DocumentStatusSchema,
    error: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().nullable().default(null).describe("The error message of the document. Only exists when the status is failed."),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$document$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["documentPayloadSchema"],
    properties: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$document$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["documentPropertiesSchema"].nullable().default(null),
    totalChunks: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].number().describe("The total number of chunks."),
    totalTokens: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].number().describe("The total number of tokens."),
    totalCharacters: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].number().describe("The total number of characters."),
    totalPages: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].number().describe("The total number of pages. Will be 0 if the document is not paged (e.g. PDF)."),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].date().describe("The date and time the document was created."),
    queuedAt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].date().nullable().describe("The date and time the document was queued.").default(null),
    preProcessingAt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].date().nullable().describe("The date and time the document was pre-processed.").default(null),
    processingAt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].date().nullable().describe("The date and time the document was processed.").default(null),
    completedAt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].date().nullable().describe("The date and time the document was completed.").default(null),
    failedAt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].date().nullable().describe("The date and time the document failed.").default(null)
}).openapi({
    title: "Document"
});
const DocumentsQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    statuses: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].array(DocumentStatusSchema).optional().describe("Statuses to filter by."),
    orderBy: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enum([
        "createdAt"
    ]).optional().default("createdAt").describe("The field to order by. Default is `createdAt`."),
    order: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enum([
        "asc",
        "desc"
    ]).optional().default("desc").describe("The order to sort by. Default is `desc`."),
    ingestJobId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().optional().describe("The ingest job ID to filter documents by.")
});
const getDocumentsSchema = DocumentsQuerySchema.merge(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$schemas$2f$api$2f$pagination$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["paginationSchema"]);
}}),
"[project]/apps/web/src/lib/workflow.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cancelWorkflow": (()=>cancelWorkflow),
    "qstashClient": (()=>qstashClient),
    "qstashReceiver": (()=>qstashReceiver),
    "triggerDeleteDocumentJob": (()=>triggerDeleteDocumentJob),
    "triggerDeleteIngestJob": (()=>triggerDeleteIngestJob),
    "triggerDeleteNamespace": (()=>triggerDeleteNamespace),
    "triggerDocumentJob": (()=>triggerDocumentJob),
    "triggerIngestionJob": (()=>triggerIngestionJob),
    "triggerReIngestJob": (()=>triggerReIngestJob)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$qstash$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@upstash/qstash/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$qstash$2f$chunk$2d$SSGARCU5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@upstash/qstash/chunk-SSGARCU5.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$workflow$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@upstash/workflow/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$workflow$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@upstash/workflow/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-route] (ecmascript)");
;
;
;
;
const qstashClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$qstash$2f$chunk$2d$SSGARCU5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Client"]({
    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].QSTASH_URL,
    token: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].QSTASH_TOKEN
});
const workflowClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$workflow$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Client"]({
    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].QSTASH_URL,
    token: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].QSTASH_TOKEN
});
const qstashReceiver = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$qstash$2f$chunk$2d$SSGARCU5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Receiver"]({
    currentSigningKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].QSTASH_CURRENT_SIGNING_KEY,
    nextSigningKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].QSTASH_NEXT_SIGNING_KEY
});
const triggerIngestionJob = async (body)=>{
    return workflowClient.trigger({
        url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/api/workflows/ingest`,
        body
    });
};
const triggerDocumentJob = async (body)=>{
    return workflowClient.trigger({
        url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/api/workflows/process-document`,
        body
    });
};
const triggerDeleteDocumentJob = async (body)=>{
    return workflowClient.trigger({
        url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/api/workflows/delete-document`,
        body
    });
};
const triggerDeleteIngestJob = async (body)=>{
    return workflowClient.trigger({
        url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/api/workflows/delete-ingest-job`,
        body
    });
};
const triggerDeleteNamespace = async (body)=>{
    return workflowClient.trigger({
        url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/api/workflows/delete-namespace`,
        body
    });
};
const triggerReIngestJob = async (body)=>{
    return workflowClient.trigger({
        url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/api/workflows/re-ingest`,
        body
    });
};
const cancelWorkflow = async (args)=>{
    return workflowClient.cancel(args);
};
}}),
"[project]/apps/web/src/services/documents/delete.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deleteDocument": (()=>deleteDocument)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/workflow.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
const deleteDocument = async (documentId)=>{
    const updatedDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].document.update({
        where: {
            id: documentId
        },
        data: {
            status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DocumentStatus"].QUEUED_FOR_DELETE
        }
    });
    const { workflowRunId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["triggerDeleteDocumentJob"])({
        documentId: updatedDoc.id
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].document.update({
        where: {
            id: updatedDoc.id
        },
        data: {
            workflowRunsIds: {
                push: workflowRunId
            }
        }
    });
    return updatedDoc;
};
}}),
"[project]/apps/web/src/lib/api/ids.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "normalizeId": (()=>normalizeId),
    "prefixId": (()=>prefixId)
});
const _prefixes = [
    "ns_",
    "user_",
    "org_",
    "job_",
    "doc_"
];
const prefixId = (id, prefix)=>{
    return id.startsWith(prefix) ? id : `${prefix}${id}`;
};
const normalizeId = (id, prefix)=>{
    return id.startsWith(prefix) ? id.replace(prefix, "") : id;
};
}}),
"[project]/apps/web/src/services/pagination.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPaginationArgs": (()=>getPaginationArgs),
    "paginateResults": (()=>paginateResults)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$ids$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/ids.ts [app-route] (ecmascript)");
;
const getPaginationArgs = (input, cursorPrefix)=>{
    return {
        take: (input.perPage + 1) * (input.cursorDirection === "forward" ? 1 : -1),
        cursor: input.cursor ? {
            id: cursorPrefix ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$ids$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeId"])(input.cursor, cursorPrefix) : input.cursor
        } : undefined
    };
};
const paginateResults = (input, results)=>{
    return {
        records: results.slice(0, input.perPage),
        nextCursor: results.length > input.perPage ? results[results.length - 1]?.id ?? null : null
    };
};
}}),
"[project]/apps/web/src/server/api/routers/documents.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "documentsRouter": (()=>documentsRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/zod/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$schemas$2f$api$2f$document$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/schemas/api/document.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$documents$2f$delete$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/documents/delete.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$pagination$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/pagination.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/auth.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const documentsRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    all: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$schemas$2f$api$2f$document$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDocumentsSchema"].extend({
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string(),
        ingestJobId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().optional()
    })).query(async ({ ctx, input })=>{
        const namespace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceByUser"])(ctx, {
            id: input.namespaceId
        });
        if (!namespace) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND"
            });
        }
        const documents = await ctx.db.document.findMany({
            where: {
                ingestJob: {
                    namespaceId: namespace.id,
                    ...input.ingestJobId && {
                        id: input.ingestJobId
                    }
                },
                ...input.statuses && input.statuses.length > 0 && {
                    status: {
                        in: input.statuses
                    }
                }
            },
            orderBy: [
                {
                    [input.orderBy]: input.order
                }
            ],
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$pagination$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPaginationArgs"])(input, "doc_")
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$pagination$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["paginateResults"])(input, documents);
    }),
    delete: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
        documentId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string(),
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string()
    })).mutation(async ({ ctx, input })=>{
        const namespace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceByUser"])(ctx, {
            id: input.namespaceId
        });
        if (!namespace) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND"
            });
        }
        const document = await ctx.db.document.findUnique({
            where: {
                id: input.documentId,
                ingestJob: {
                    namespaceId: namespace.id
                }
            },
            select: {
                id: true,
                status: true
            }
        });
        if (!document) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND"
            });
        }
        if (document.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DocumentStatus"].QUEUED_FOR_DELETE || document.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DocumentStatus"].DELETING) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST"
            });
        }
        const updatedDocument = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$documents$2f$delete$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteDocument"])(input.documentId);
        return updatedDocument;
    })
});
}}),
"[project]/apps/web/src/lib/domains/constants.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SECOND_LEVEL_DOMAINS": (()=>SECOND_LEVEL_DOMAINS),
    "SPECIAL_APEX_DOMAINS": (()=>SPECIAL_APEX_DOMAINS),
    "ccTLDs": (()=>ccTLDs)
});
const ccTLDs = new Set([
    "af",
    "ax",
    "al",
    "dz",
    "as",
    "ad",
    "ao",
    "ai",
    "aq",
    "ag",
    "ar",
    "am",
    "aw",
    "ac",
    "au",
    "at",
    "az",
    "bs",
    "bh",
    "bd",
    "bb",
    "eus",
    "by",
    "be",
    "bz",
    "bj",
    "bm",
    "bt",
    "bo",
    "bq",
    "an",
    "nl",
    "ba",
    "bw",
    "bv",
    "br",
    "io",
    "vg",
    "bn",
    "bg",
    "bf",
    "mm",
    "bi",
    "kh",
    "cm",
    "ca",
    "cv",
    "cat",
    "ky",
    "cf",
    "td",
    "cl",
    "cn",
    "cx",
    "cc",
    "co",
    "km",
    "cd",
    "cg",
    "ck",
    "cr",
    "ci",
    "hr",
    "cu",
    "cw",
    "cy",
    "cz",
    "dk",
    "dj",
    "dm",
    "do",
    "tl",
    "tp",
    "ec",
    "eg",
    "sv",
    "gq",
    "er",
    "ee",
    "et",
    "eu",
    "fk",
    "fo",
    "fm",
    "fj",
    "fi",
    "fr",
    "gf",
    "pf",
    "tf",
    "ga",
    "gal",
    "gm",
    "ps",
    "ge",
    "de",
    "gh",
    "gi",
    "gr",
    "gl",
    "gd",
    "gp",
    "gu",
    "gt",
    "gg",
    "gn",
    "gw",
    "gy",
    "ht",
    "hm",
    "hn",
    "hk",
    "hu",
    "is",
    "in",
    "id",
    "ir",
    "iq",
    "ie",
    "im",
    "il",
    "it",
    "jm",
    "jp",
    "je",
    "jo",
    "kz",
    "ke",
    "ki",
    "kw",
    "kg",
    "la",
    "lv",
    "lb",
    "ls",
    "lr",
    "ly",
    "li",
    "lt",
    "lu",
    "mo",
    "mk",
    "mg",
    "mw",
    "my",
    "mv",
    "ml",
    "mt",
    "mh",
    "mq",
    "mr",
    "mu",
    "yt",
    "mx",
    "md",
    "mc",
    "mn",
    "me",
    "ms",
    "ma",
    "mz",
    "mm",
    "na",
    "nr",
    "np",
    "nl",
    "nc",
    "nz",
    "ni",
    "ne",
    "ng",
    "nu",
    "nf",
    "nc",
    "tr",
    "kp",
    "mp",
    "no",
    "om",
    "pk",
    "pw",
    "ps",
    "pa",
    "pg",
    "py",
    "pe",
    "ph",
    "pn",
    "pl",
    "pt",
    "pr",
    "qa",
    "ro",
    "ru",
    "rw",
    "re",
    "bq",
    "an",
    "bl",
    "gp",
    "fr",
    "sh",
    "kn",
    "lc",
    "mf",
    "gp",
    "fr",
    "pm",
    "vc",
    "ws",
    "sm",
    "st",
    "sa",
    "sn",
    "rs",
    "sc",
    "sl",
    "sg",
    "bq",
    "an",
    "nl",
    "sx",
    "an",
    "sk",
    "si",
    "sb",
    "so",
    "so",
    "za",
    "gs",
    "kr",
    "ss",
    "es",
    "lk",
    "sd",
    "sr",
    "sj",
    "sz",
    "se",
    "ch",
    "sy",
    "tw",
    "tj",
    "tz",
    "th",
    "tg",
    "tk",
    "to",
    "tt",
    "tn",
    "tr",
    "tm",
    "tc",
    "tv",
    "ug",
    "ua",
    "ae",
    "uk",
    "us",
    "vi",
    "uy",
    "uz",
    "vu",
    "va",
    "ve",
    "vn",
    "wf",
    "eh",
    "ma",
    "ye",
    "zm",
    "zw"
]);
const SECOND_LEVEL_DOMAINS = new Set([
    "com",
    "co",
    "net",
    "org",
    "edu",
    "gov",
    "in"
]);
const SPECIAL_APEX_DOMAINS = new Set([
    "my.id",
    "github.io",
    "vercel.app",
    "now.sh",
    "pages.dev",
    "webflow.io",
    "netlify.app",
    "fly.dev",
    "web.app"
]);
}}),
"[project]/apps/web/src/lib/domains/utils.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "callVercelApi": (()=>callVercelApi),
    "domainExists": (()=>domainExists),
    "getApexDomain": (()=>getApexDomain),
    "isValidDomain": (()=>isValidDomain),
    "validDomainRegex": (()=>validDomainRegex),
    "validateDomain": (()=>validateDomain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/domains/constants.ts [app-route] (ecmascript)");
;
;
;
const validDomainRegex = new RegExp(/^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/);
const isValidDomain = (domain)=>{
    return validDomainRegex.test(domain);
// return (
//   validDomainRegex.test(domain) &&
//   // make sure the domain isn't agentset.ai
//   !/^(agentset\.ai|.*\.agentset\.ai)$/i.test(domain)
// );
};
const domainExists = async (domain)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].domain.findFirst({
        where: {
            slug: domain
        },
        select: {
            slug: true
        }
    });
    return !!response;
};
const validateDomain = async (domain)=>{
    if (!domain || typeof domain !== "string") {
        return {
            error: "Missing domain",
            code: "unprocessable_entity"
        };
    }
    if (!isValidDomain(domain)) {
        return {
            error: "Invalid domain",
            code: "unprocessable_entity"
        };
    }
    const exists = await domainExists(domain);
    if (exists) {
        return {
            error: "Domain is already in use.",
            code: "conflict"
        };
    }
    return {
        error: null
    };
};
const getApexDomain = (url)=>{
    let domain;
    try {
        // replace any custom scheme (e.g. notion://) with https://
        // use the URL constructor to get the hostname
        domain = new URL(url.replace(/^[a-zA-Z]+:\/\//, "https://")).hostname;
    } catch  {
        return "";
    }
    if (domain === "youtu.be") return "youtube.com";
    const parts = domain.split(".");
    if (parts.length > 2) {
        if (// if this is a second-level TLD (e.g. co.uk, .com.ua, .org.tt), we need to return the last 3 parts
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECOND_LEVEL_DOMAINS"].has(parts[parts.length - 2]) && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ccTLDs"].has(parts[parts.length - 1]) || // if it's a special subdomain for website builders (e.g. weathergpt.vercel.app/)
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SPECIAL_APEX_DOMAINS"].has(parts.slice(-2).join("."))) {
            return parts.slice(-3).join(".");
        }
        // otherwise, it's a subdomain (e.g. agentset.vercel.app), so we return the last 2 parts
        return parts.slice(-2).join(".");
    }
    // if it's a normal domain (e.g. agentset.ai), we return the domain
    return domain;
};
const callVercelApi = async (path, method, body)=>{
    const url = new URL(`https://api.vercel.com${path}`);
    const searchParams = url.searchParams;
    searchParams.set("teamId", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].VERCEL_TEAM_ID);
    const response = await fetch(url.toString(), {
        method,
        headers: {
            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].VERCEL_API_TOKEN}`,
            ...method !== "DELETE" && {
                "Content-Type": "application/json"
            }
        },
        ...!!body && {
            body: JSON.stringify(body)
        }
    });
    return response.json();
};
}}),
"[project]/apps/web/src/lib/domains/add-domain.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addDomainToVercel": (()=>addDomainToVercel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/domains/utils.ts [app-route] (ecmascript)");
;
;
const addDomainToVercel = async (domain)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callVercelApi"])(`/v10/projects/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].VERCEL_PROJECT_ID}/domains`, "POST", {
        name: domain.toLowerCase()
    });
};
}}),
"[project]/apps/web/src/lib/domains/get-config-response.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getConfigResponse": (()=>getConfigResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/domains/utils.ts [app-route] (ecmascript)");
;
const getConfigResponse = async (domain)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callVercelApi"])(`/v6/domains/${domain.toLowerCase()}/config`, "GET");
};
}}),
"[project]/apps/web/src/lib/domains/get-domain-response.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDomainResponse": (()=>getDomainResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/domains/utils.ts [app-route] (ecmascript)");
;
;
const getDomainResponse = async (domain)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callVercelApi"])(`/v9/projects/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].VERCEL_PROJECT_ID}/domains/${domain.toLowerCase()}`, "GET");
};
}}),
"[project]/apps/web/src/lib/domains/remove-domain.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "removeDomainFromVercel": (()=>removeDomainFromVercel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/domains/utils.ts [app-route] (ecmascript)");
;
;
const removeDomainFromVercel = async (domain)=>{
    // if there are other subdomains or the apex domain itself is in use
    // so we should only remove it from our Vercel project
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callVercelApi"])(`/v9/projects/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].VERCEL_PROJECT_ID}/domains/${domain.toLowerCase()}`, "DELETE");
};
}}),
"[project]/apps/web/src/lib/domains/verify-domain.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "verifyDomain": (()=>verifyDomain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/domains/utils.ts [app-route] (ecmascript)");
;
;
const verifyDomain = async (domain)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callVercelApi"])(`/v9/projects/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].VERCEL_PROJECT_ID}/domains/${domain.toLowerCase()}/verify`, "POST");
};
}}),
"[project]/apps/web/src/server/api/routers/domains.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "domainsRouter": (()=>domainsRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$add$2d$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/domains/add-domain.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$get$2d$config$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/domains/get-config-response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$get$2d$domain$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/domains/get-domain-response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$remove$2d$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/domains/remove-domain.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/domains/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$verify$2d$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/domains/verify-domain.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
const commonInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
});
const getHosting = async (ctx, input)=>{
    const hosting = await ctx.db.hosting.findFirst({
        where: {
            namespace: {
                id: input.namespaceId,
                organization: {
                    members: {
                        some: {
                            userId: ctx.session.user.id
                        }
                    }
                }
            }
        }
    });
    return hosting ?? null;
};
const domainsRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    add: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(commonInput.extend({
        domain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        const hosting = await getHosting(ctx, input);
        if (!hosting) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Hosting not found"
            });
        }
        // get domain from hosting
        const domain = await ctx.db.domain.findUnique({
            where: {
                hostingId: hosting.id
            }
        });
        if (domain) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "CONFLICT",
                message: "You already set a domain"
            });
        }
        const validDomain = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateDomain"])(input.domain);
        if (validDomain.error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: validDomain.error
            });
        }
        const vercelResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$add$2d$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addDomainToVercel"])(input.domain);
        if (vercelResponse.error && vercelResponse.error.code !== "domain_already_in_use" // ignore this error
        ) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "UNPROCESSABLE_CONTENT",
                message: vercelResponse.error.message
            });
        }
        return ctx.db.domain.create({
            data: {
                hostingId: hosting.id,
                slug: input.domain
            }
        });
    }),
    checkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(commonInput).query(async ({ ctx, input })=>{
        const hosting = await getHosting(ctx, input);
        if (!hosting) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Hosting not found"
            });
        }
        const domain = await ctx.db.domain.findUnique({
            where: {
                hostingId: hosting.id
            }
        });
        if (!domain) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Domain not found"
            });
        }
        let status = "Valid Configuration";
        const [domainJson, configJson] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$get$2d$domain$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDomainResponse"])(domain.slug),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$get$2d$config$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getConfigResponse"])(domain.slug)
        ]);
        if (domainJson.error?.code === "not_found") {
            // domain not found on Vercel project
            status = "Domain Not Found";
            return {
                status,
                response: {
                    configJson,
                    domainJson
                }
            };
        } else if (domainJson.error) {
            status = "Unknown Error";
            return {
                status,
                response: {
                    configJson,
                    domainJson
                }
            };
        }
        /**
       * Domain has DNS conflicts
       */ if (configJson.conflicts && configJson.conflicts.length > 0) {
            status = "Conflicting DNS Records";
            return {
                status,
                response: {
                    configJson,
                    domainJson
                }
            };
        }
        /**
       * If domain is not verified, we try to verify now
       */ if (!domainJson.verified) {
            status = "Pending Verification";
            const verificationJson = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$verify$2d$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyDomain"])(domain.slug);
            if (verificationJson.verified) {
                /**
           * Domain was just verified
           */ status = "Valid Configuration";
            }
            return {
                status,
                response: {
                    configJson,
                    domainJson,
                    verificationJson
                }
            };
        }
        let prismaResponse = null;
        if (!configJson.misconfigured) {
            prismaResponse = await ctx.db.domain.update({
                where: {
                    id: domain.id
                },
                data: {
                    verified: true,
                    lastChecked: new Date()
                }
            });
        } else {
            status = "Invalid Configuration";
            prismaResponse = await ctx.db.domain.update({
                where: {
                    id: domain.id
                },
                data: {
                    verified: false,
                    lastChecked: new Date()
                }
            });
        }
        return {
            status,
            response: {
                configJson,
                domainJson,
                prismaResponse
            }
        };
    }),
    remove: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(commonInput).mutation(async ({ ctx, input })=>{
        const hosting = await getHosting(ctx, input);
        if (!hosting) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Hosting not found"
            });
        }
        const domain = await ctx.db.domain.findUnique({
            where: {
                hostingId: hosting.id
            }
        });
        if (!domain) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Domain not found"
            });
        }
        const vercelResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$domains$2f$remove$2d$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removeDomainFromVercel"])(domain.slug);
        // ignore not_found error
        if (vercelResponse.error && vercelResponse.error.code !== "not_found") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "UNPROCESSABLE_CONTENT",
                message: vercelResponse.error.message
            });
        }
        return ctx.db.domain.delete({
            where: {
                id: domain.id
            }
        });
    })
});
}}),
"[project]/apps/web/src/lib/prompt.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "prmpt": (()=>prmpt)
});
const prmpt = (strings, ...keys)=>{
    if (keys.length === 0) {
        return {
            compile: ()=>strings[0]?.trim()
        };
    }
    return {
        compile: (variables)=>{
            let result = strings[0];
            for(let i = 0; i < keys.length; i++){
                const key = keys[i];
                if (key !== undefined) {
                    result += variables[key] + (strings[i + 1] ?? "");
                }
            }
            return result?.trim();
        }
    };
};
}}),
"[project]/apps/web/src/lib/prompts.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CONDENSE_SYSTEM_PROMPT": (()=>CONDENSE_SYSTEM_PROMPT),
    "CONDENSE_USER_PROMPT": (()=>CONDENSE_USER_PROMPT),
    "DEFAULT_SYSTEM_PROMPT": (()=>DEFAULT_SYSTEM_PROMPT),
    "NEW_MESSAGE_PROMPT": (()=>NEW_MESSAGE_PROMPT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/prompt.ts [app-route] (ecmascript)");
;
const DEFAULT_SYSTEM_PROMPT = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prmpt"]`
You are an AI assistant powered by Agentset. Your primary task is to provide accurate, factual responses based STRICTLY on the provided search results. You must ONLY answer questions using information explicitly found in the search results - do not make assumptions or add information from outside knowledge.

Follow these STRICT guidelines:
1. If the search results do not contain information to fully answer the query, state clearly: "I cannot fully answer this question based on the available information." Then explain what specific aspects cannot be answered.
2. Only use information directly stated in the search results - do not infer, assume, or add external knowledge.
3. Your response must match the language of the user's query.
4. Citations are MANDATORY for every factual statement. Format citations by placing the chunk number in brackets immediately after the relevant statement with no space, like this: "The temperature is 20 degrees[3]"
5. When possible, include relevant direct quotes from the search results with proper citations.
6. Do not preface responses with phrases like "based on the search results" - simply provide the cited answer.
7. Maintain a clear, professional tone focused on accuracy and fidelity to the source material.

If the search results are completely irrelevant or insufficient to address any part of the query, respond: "I cannot answer this question as the search results do not contain relevant information about [specific topic]."
`;
const NEW_MESSAGE_PROMPT = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prmpt"]`
Most relevant search results:
${"chunks"}

User's query:
${"query"}
`;
const CONDENSE_SYSTEM_PROMPT = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prmpt"]`
Given a conversation history between Human and Assistant and a follow-up question from Human, rewrite the question into a standalone query that:

1. Incorporates all relevant context from the prior conversation
2. Preserves specific details, names, and technical terms mentioned earlier
3. Maintains the original language and tone of the user's question
4. Focuses on searchable keywords and concepts to optimize vector database retrieval
5. Removes conversational elements like "as mentioned before" or "following up on"
6. Expands pronouns and references to their full form (e.g. "it" → "the database schema")

Your task is to create a clear, context-rich query that will yield the most relevant search results from the vector database.


Question: ${"question"}

History:
${"chatHistory"}
`;
const CONDENSE_USER_PROMPT = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prmpt"]`
Chat History:
${"chatHistory"}

Follow Up Message:
${"query"}
`;
}}),
"[project]/apps/web/src/lib/uploadthing/server.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deleteAsset": (()=>deleteAsset),
    "deleteFile": (()=>deleteFile),
    "extractKeyFromUrl": (()=>extractKeyFromUrl),
    "getFileMetadata": (()=>getFileMetadata),
    "uploadAsset": (()=>uploadAsset),
    "uploadFile": (()=>uploadFile)
});
async function uploadFile(file, key) {
    try {
        const formData = new FormData();
        formData.append("files", file);
        const response = await fetch("/api/uploadthing", {
            method: "POST",
            body: formData
        });
        if (!response.ok) {
            throw new Error("Upload failed");
        }
        const result = await response.json();
        return {
            url: result[0]?.url || "",
            key: result[0]?.key || ""
        };
    } catch (error) {
        console.error("Upload error:", error);
        throw error;
    }
}
async function deleteFile(key) {
    try {
        // Uploadthing delete logic would go here
        console.log("Deleting file:", key);
        return true;
    } catch (error) {
        console.error("Delete error:", error);
        throw error;
    }
}
async function uploadAsset(file, key) {
    try {
        const formData = new FormData();
        formData.append("files", file);
        const response = await fetch("/api/uploadthing", {
            method: "POST",
            body: formData
        });
        if (!response.ok) {
            throw new Error("Asset upload failed");
        }
        const result = await response.json();
        return {
            url: result[0]?.url || "",
            key: result[0]?.key || ""
        };
    } catch (error) {
        console.error("Asset upload error:", error);
        throw error;
    }
}
async function deleteAsset(key) {
    try {
        // Uploadthing delete logic would go here
        console.log("Deleting asset:", key);
        return true;
    } catch (error) {
        console.error("Asset delete error:", error);
        throw error;
    }
}
function extractKeyFromUrl(url) {
    const parts = url.split("/");
    return parts[parts.length - 1] || "";
}
async function getFileMetadata(key) {
    // Uploadthing doesn't provide metadata API like S3
    // Return basic metadata structure
    return {
        ContentLength: 0,
        ContentType: "application/octet-stream",
        LastModified: new Date()
    };
}
}}),
"[project]/apps/web/src/server/api/routers/hosting.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hostingRouter": (()=>hostingRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$ids$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/ids.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/prompts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$uploadthing$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/uploadthing/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
;
;
;
;
;
;
;
const commonInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
});
// Helper function to replace uploadImage from S3
const uploadImage = async (buffer, key, contentType)=>{
    // Convert buffer to File for Uploadthing
    const file = new File([
        buffer
    ], key, {
        type: contentType
    });
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$uploadthing$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uploadAsset"])(file);
};
const getHosting = async (ctx, input)=>{
    const hosting = await ctx.db.hosting.findFirst({
        where: {
            namespace: {
                id: input.namespaceId,
                organization: {
                    members: {
                        some: {
                            userId: ctx.session.user.id
                        }
                    }
                }
            }
        },
        include: {
            domain: true
        }
    });
    return hosting ?? null;
};
const hostingRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    get: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(commonInput).query(async ({ ctx, input })=>{
        return getHosting(ctx, input);
    }),
    enable: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(commonInput).mutation(async ({ ctx, input })=>{
        const namespace = await ctx.db.namespace.findUnique({
            where: {
                id: input.namespaceId,
                organization: {
                    members: {
                        some: {
                            userId: ctx.session.user.id
                        }
                    }
                }
            },
            select: {
                id: true,
                slug: true,
                name: true,
                hosting: true,
                organization: {
                    select: {
                        id: true,
                        slug: true
                    }
                }
            }
        });
        if (!namespace) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Namespace not found"
            });
        }
        if (namespace.hosting) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "Hosting already enabled"
            });
        }
        let slug = `${namespace.slug}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10)}`;
        while(await ctx.db.hosting.count({
            where: {
                slug
            }
        }) > 0){
            slug = `${namespace.slug}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10)}`;
        }
        return ctx.db.hosting.create({
            data: {
                // set default values
                namespaceId: namespace.id,
                title: namespace.name,
                slug,
                systemPrompt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_SYSTEM_PROMPT"].compile()
            }
        });
    }),
    update: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(commonInput.extend({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        logo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].instanceof(Blob).nullish(),
        protected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
        allowedEmails: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().email().trim().toLowerCase()).optional(),
        allowedEmailDomains: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().trim().toLowerCase()).optional(),
        systemPrompt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
        examplesQuestions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()).max(4).optional(),
        exampleSearchQueries: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()).max(4).optional(),
        welcomeMessage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
        citationMetadataPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
        searchEnabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean().optional()
    })).mutation(async ({ ctx, input })=>{
        const hosting = await getHosting(ctx, input);
        if (!hosting) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Hosting not found"
            });
        }
        const newLogo = input.logo ? await uploadImage(Buffer.from(await input.logo.arrayBuffer()), `namespaces/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$ids$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prefixId"])(hosting.namespaceId, "ns_")}/hosting/logo_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(7)}`, input.logo.type) : input.logo === null ? null : undefined;
        try {
            const updatedHosting = await ctx.db.hosting.update({
                where: {
                    id: hosting.id
                },
                data: {
                    title: input.title,
                    ...input.slug && {
                        slug: input.slug
                    },
                    ...newLogo !== undefined && {
                        logo: newLogo ? newLogo.url : null
                    },
                    protected: input.protected,
                    allowedEmails: input.allowedEmails ?? [],
                    allowedEmailDomains: input.allowedEmailDomains ?? [],
                    systemPrompt: input.systemPrompt,
                    exampleQuestions: input.examplesQuestions,
                    exampleSearchQueries: input.exampleSearchQueries,
                    welcomeMessage: input.welcomeMessage,
                    citationMetadataPath: input.citationMetadataPath,
                    searchEnabled: input.searchEnabled
                }
            });
            // Delete old logo if it exists
            if ((newLogo || newLogo === null) && hosting.logo) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$uploadthing$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteAsset"])(hosting.logo.replace(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].ASSETS_UPLOADTHING_URL}/`, ""));
            }
            return updatedHosting;
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].PrismaClientKnownRequestError && error.code === "P2002") {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                    code: "CONFLICT",
                    message: `The slug "${input.slug}" is already in use.`
                });
            } else {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                    code: "INTERNAL_SERVER_ERROR",
                    message: error instanceof Error ? error.message : "An unknown error occurred"
                });
            }
        }
    })
});
}}),
"[project]/apps/web/src/schemas/api/ingest-job.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IngestJobSchema": (()=>IngestJobSchema),
    "IngestJobStatusSchema": (()=>IngestJobStatusSchema),
    "IngestJobsQuerySchema": (()=>IngestJobsQuerySchema),
    "createIngestJobSchema": (()=>createIngestJobSchema),
    "getIngestionJobsSchema": (()=>getIngestionJobsSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/zod/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/validation/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$ingest$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/validation/src/ingest-payload/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$schemas$2f$api$2f$pagination$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/schemas/api/pagination.ts [app-route] (ecmascript)");
;
;
;
;
const IngestJobStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["IngestJobStatus"]).describe("The status of the ingest job.");
const IngestJobSchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().describe("The unique ID of the ingest job."),
    namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().describe("The namespace ID of the ingest job."),
    tenantId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().nullable().default(null).describe("The tenant ID of the ingest job."),
    status: IngestJobStatusSchema,
    error: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().nullable().default(null).describe("The error message of the ingest job. Only exists when the status is failed."),
    payload: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$ingest$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ingestJobPayloadSchema"],
    config: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$ingest$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["configSchema"].nullable().default(null),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].date().describe("The date and time the namespace was created."),
    queuedAt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].date().nullable().describe("The date and time the ingest job was queued.").default(null),
    preProcessingAt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].date().nullable().describe("The date and time the ingest job was pre-processed.").default(null),
    processingAt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].date().nullable().describe("The date and time the ingest job was processed.").default(null),
    completedAt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].date().nullable().describe("The date and time the ingest job was completed.").default(null),
    failedAt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].date().nullable().describe("The date and time the ingest job failed.").default(null)
}).openapi({
    title: "Ingest Job"
});
const IngestJobsQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    statuses: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].array(IngestJobStatusSchema).optional().describe("Statuses to filter by."),
    orderBy: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enum([
        "createdAt"
    ]).optional().default("createdAt").describe("The field to order by. Default is `createdAt`."),
    order: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enum([
        "asc",
        "desc"
    ]).optional().default("desc").describe("The sort order. Default is `desc`.")
});
const getIngestionJobsSchema = IngestJobsQuerySchema.merge(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$schemas$2f$api$2f$pagination$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["paginationSchema"]);
const createIngestJobSchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    payload: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$ingest$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ingestJobPayloadSchema"],
    config: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$ingest$2d$payload$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["configSchema"].optional()
});
}}),
"[project]/apps/web/src/services/ingest-jobs/create.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createIngestJob": (()=>createIngestJob)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/workflow.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
// Helper function - Uploadthing doesn't have file existence check
// Files are assumed to exist if they have a valid key/URL
const checkFileExists = async (key)=>{
    // For Uploadthing, we assume files exist if they have a valid key
    // In a production app, you might want to store file metadata in your database
    return Boolean(key);
};
const createIngestJob = async ({ namespaceId, organizationId, tenantId, config, payload })=>{
    let finalPayload = null;
    if (payload.type === "FILE") {
        finalPayload = {
            type: "FILE",
            ...payload.name && {
                name: payload.name
            },
            fileUrl: payload.fileUrl
        };
    } else if (payload.type === "TEXT") {
        finalPayload = {
            type: "TEXT",
            ...payload.name && {
                name: payload.name
            },
            text: payload.text
        };
    } else if (payload.type === "URLS") {
        const deduplicatedUrls = [
            ...new Set(payload.urls)
        ];
        finalPayload = {
            type: "URLS",
            ...payload.name && {
                name: payload.name
            },
            urls: deduplicatedUrls
        };
    } else if (payload.type === "MANAGED_FILE") {
        const exists = await checkFileExists(payload.key);
        if (!exists) {
            throw new Error("FILE_NOT_FOUND");
        }
        finalPayload = {
            type: "MANAGED_FILE",
            ...payload.name && {
                name: payload.name
            },
            key: payload.key
        };
    } else if (payload.type === "MANAGED_FILES") {
        const deduplicatedFiles = [];
        for (const file of payload.files){
            if (deduplicatedFiles.find((f)=>f.key === file.key)) {
                continue;
            }
            deduplicatedFiles.push(file);
        }
        const results = await Promise.all(deduplicatedFiles.map((file)=>checkFileExists(file.key)));
        const missingKeys = results.filter((result)=>!result);
        if (missingKeys.length > 0) {
            throw new Error("FILE_NOT_FOUND");
        }
        finalPayload = {
            type: "MANAGED_FILES",
            ...payload.name && {
                name: payload.name
            },
            files: deduplicatedFiles
        };
    }
    if (!finalPayload) {
        throw new Error("INVALID_PAYLOAD");
    }
    const [job] = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].$transaction([
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].ingestJob.create({
            data: {
                namespace: {
                    connect: {
                        id: namespaceId
                    }
                },
                tenantId,
                status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["IngestJobStatus"].QUEUED,
                payload: finalPayload,
                config
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].namespace.update({
            where: {
                id: namespaceId
            },
            data: {
                totalIngestJobs: {
                    increment: 1
                },
                organization: {
                    update: {
                        totalIngestJobs: {
                            increment: 1
                        }
                    }
                }
            },
            select: {
                id: true
            }
        })
    ]);
    const { workflowRunId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["triggerIngestionJob"])({
        jobId: job.id
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].ingestJob.update({
        where: {
            id: job.id
        },
        data: {
            workflowRunsIds: {
                push: workflowRunId
            }
        },
        select: {
            id: true
        }
    });
    return job;
};
}}),
"[project]/apps/web/src/services/ingest-jobs/delete.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deleteIngestJob": (()=>deleteIngestJob)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/workflow.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
const deleteIngestJob = async (jobId)=>{
    const job = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].ingestJob.update({
        where: {
            id: jobId
        },
        data: {
            status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["IngestJobStatus"].QUEUED_FOR_DELETE
        }
    });
    const { workflowRunId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["triggerDeleteIngestJob"])({
        jobId: job.id
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].ingestJob.update({
        where: {
            id: job.id
        },
        data: {
            workflowRunsIds: {
                push: workflowRunId
            }
        },
        select: {
            id: true
        }
    });
    return job;
};
}}),
"[project]/apps/web/src/server/api/routers/ingest-jobs.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ingestJobRouter": (()=>ingestJobRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$plans$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/plans.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/workflow.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$schemas$2f$api$2f$ingest$2d$job$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/schemas/api/ingest-job.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$ingest$2d$jobs$2f$create$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/ingest-jobs/create.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$ingest$2d$jobs$2f$delete$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/ingest-jobs/delete.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$pagination$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/pagination.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/auth.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const ingestJobRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    all: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$schemas$2f$api$2f$ingest$2d$job$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getIngestionJobsSchema"].extend({
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        const namespace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceByUser"])(ctx, {
            id: input.namespaceId
        });
        if (!namespace) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND"
            });
        }
        const ingestJobs = await ctx.db.ingestJob.findMany({
            where: {
                namespaceId: input.namespaceId,
                ...input.statuses && input.statuses.length > 0 && {
                    status: {
                        in: input.statuses
                    }
                }
            },
            orderBy: [
                {
                    [input.orderBy]: input.order
                }
            ],
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$pagination$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPaginationArgs"])(input)
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$pagination$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["paginateResults"])(input, ingestJobs);
    }),
    ingest: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$schemas$2f$api$2f$ingest$2d$job$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createIngestJobSchema"].extend({
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        const namespace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceByUser"])(ctx, {
            id: input.namespaceId
        });
        if (!namespace) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND"
            });
        }
        const organization = await ctx.db.organization.findUnique({
            where: {
                id: namespace.organizationId
            }
        });
        if (!organization) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND"
            });
        }
        // if it's not a pro plan, check if the user has exceeded the limit
        // pro plan is unlimited with usage based billing
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$plans$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProPlan"])(organization.plan) && organization.totalPages >= organization.pagesLimit) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "You've reached the maximum number of pages."
            });
        }
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$ingest$2d$jobs$2f$create$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createIngestJob"])({
            payload: input.payload,
            namespaceId: input.namespaceId,
            organizationId: namespace.organizationId,
            config: input.config
        });
    }),
    delete: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        jobId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        const namespace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceByUser"])(ctx, {
            id: input.namespaceId
        });
        if (!namespace) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND"
            });
        }
        const ingestJob = await ctx.db.ingestJob.findUnique({
            where: {
                id: input.jobId,
                namespaceId: namespace.id
            },
            select: {
                id: true,
                status: true
            }
        });
        if (!ingestJob) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND"
            });
        }
        if (ingestJob.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["IngestJobStatus"].QUEUED_FOR_DELETE || ingestJob.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["IngestJobStatus"].DELETING) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST"
            });
        }
        const updatedIngestJob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$ingest$2d$jobs$2f$delete$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteIngestJob"])(ingestJob.id);
        return updatedIngestJob;
    }),
    reIngest: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        jobId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        const namespace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceByUser"])(ctx, {
            id: input.namespaceId
        });
        if (!namespace) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND"
            });
        }
        const ingestJob = await ctx.db.ingestJob.findUnique({
            where: {
                id: input.jobId,
                namespaceId: namespace.id
            },
            select: {
                id: true,
                status: true
            }
        });
        if (!ingestJob) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND"
            });
        }
        if (ingestJob.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["IngestJobStatus"].PRE_PROCESSING || ingestJob.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["IngestJobStatus"].PROCESSING) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "Job is already being processed"
            });
        }
        const { workflowRunId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["triggerReIngestJob"])({
            jobId: ingestJob.id
        });
        await ctx.db.ingestJob.update({
            where: {
                id: ingestJob.id
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["IngestJobStatus"].QUEUED_FOR_RESYNC,
                queuedAt: new Date(),
                workflowRunsIds: {
                    push: workflowRunId
                }
            },
            select: {
                id: true
            }
        });
        return ingestJob;
    })
});
}}),
"[project]/apps/web/src/lib/embedding.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getNamespaceEmbeddingModel": (()=>getNamespaceEmbeddingModel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
;
const getNamespaceEmbeddingModel = async (namespace, type)=>{
    const config = namespace.embeddingConfig;
    if (!config) {
        const { createOpenAI } = await __turbopack_context__.r("[project]/node_modules/@ai-sdk/openai/dist/index.mjs [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
        const defaultOpenAI = createOpenAI({
            apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DEFAULT_OPENAI_API_KEY
        });
        return defaultOpenAI.textEmbeddingModel(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DEFAULT_OPENAI_EMBEDDING_MODEL || "text-embedding-3-large");
    }
    switch(config.provider){
        case "AZURE_OPENAI":
            {
                const { createAzure } = await __turbopack_context__.r("[project]/node_modules/@ai-sdk/azure/dist/index.mjs [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
                const { apiKey, baseUrl, deployment, apiVersion } = config;
                const azure = createAzure({
                    apiKey,
                    apiVersion,
                    baseURL: baseUrl
                });
                return azure.textEmbeddingModel(deployment);
            }
        case "OPENAI":
            {
                const { createOpenAI } = await __turbopack_context__.r("[project]/node_modules/@ai-sdk/openai/dist/index.mjs [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
                const { apiKey, model } = config;
                const openai = createOpenAI({
                    apiKey
                });
                return openai.textEmbeddingModel(model);
            }
        case "VOYAGE":
            {
                const { createVoyage } = await __turbopack_context__.r("[project]/node_modules/voyage-ai-provider/dist/index.js [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
                const { apiKey, model } = config;
                const voyage = createVoyage({
                    apiKey
                });
                return voyage.textEmbeddingModel(model, {
                    inputType: type === "document" ? "document" : "query"
                });
            }
        case "GOOGLE":
            {
                const { createGoogleGenerativeAI } = await __turbopack_context__.r("[project]/node_modules/@ai-sdk/google/dist/index.mjs [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
                const { apiKey, model } = config;
                const google = createGoogleGenerativeAI({
                    apiKey
                });
                return google.textEmbeddingModel(model);
            }
        default:
            {
                // This exhaustive check ensures TypeScript will error if a new provider
                // is added without handling it in the switch statement
                const _exhaustiveCheck = config;
                throw new Error(`Unknown vector store provider: ${_exhaustiveCheck}`);
            }
    }
};
}}),
"[externals]/node:assert [external] (node:assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:assert", () => require("node:assert"));

module.exports = mod;
}}),
"[externals]/node:os [external] (node:os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}}),
"[externals]/node:url [external] (node:url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}}),
"[externals]/node:fs [external] (node:fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs) <export default as path>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "path": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}}),
"[externals]/node:module [external] (node:module, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:module", () => require("node:module"));

module.exports = mod;
}}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs) <export default as fs>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fs": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
}}),
"[project]/apps/web/src/lib/vector-store/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DIGNA_NAMESPACE_ID": (()=>DIGNA_NAMESPACE_ID),
    "getNamespaceVectorStore": (()=>getNamespaceVectorStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$parse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/parse.ts [app-route] (ecmascript)");
;
const DIGNA_NAMESPACE_ID = "cm7zzvk4w0001ri45hfl7lkyo";
const getNamespaceVectorStore = async (namespace, tenant)=>{
    const config = namespace.vectorStoreConfig;
    const tenantId = tenant ? `agentset:${namespace.id}:${tenant}` : `agentset:${namespace.id === DIGNA_NAMESPACE_ID ? "digna" : namespace.id}`;
    // TODO: handle different embedding models
    if (!config) {
        const { Pinecone } = await __turbopack_context__.r("[project]/apps/web/src/lib/vector-store/pinecone.ts [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
        const shouldUseSecondary = namespace.createdAt && (typeof namespace.createdAt === "string" ? new Date(namespace.createdAt) : namespace.createdAt).getTime() > 1747418241190 && !!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].SECONDARY_PINECONE_API_KEY && !!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].SECONDARY_PINECONE_HOST;
        return new Pinecone({
            apiKey: shouldUseSecondary ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].SECONDARY_PINECONE_API_KEY : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DEFAULT_PINECONE_API_KEY,
            indexHost: shouldUseSecondary ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].SECONDARY_PINECONE_HOST : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DEFAULT_PINECONE_HOST,
            namespace: tenantId
        });
    }
    switch(config.provider){
        case "PINECONE":
            {
                const { Pinecone } = await __turbopack_context__.r("[project]/apps/web/src/lib/vector-store/pinecone.ts [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
                const { apiKey, indexHost } = config;
                return new Pinecone({
                    apiKey,
                    indexHost,
                    namespace: tenantId
                });
            }
        default:
            {
                // This exhaustive check ensures TypeScript will error if a new provider
                // is added without handling it in the switch statement
                const _exhaustiveCheck = config.provider;
                throw new Error(`Unknown vector store provider: ${_exhaustiveCheck}`);
            }
    }
};
;
}}),
"[project]/apps/web/src/lib/functions.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// chunk an array into smaller arrays of a given size
__turbopack_context__.s({
    "chunkArray": (()=>chunkArray),
    "filterFalsy": (()=>filterFalsy)
});
const chunkArray = (array, size)=>{
    return Array.from({
        length: Math.ceil(array.length / size)
    }, (_, i)=>array.slice(i * size, i * size + size));
};
const filterFalsy = (arr)=>arr.filter(Boolean);
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http2 [external] (http2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}}),
"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[project]/apps/web/src/lib/error.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "tryCatch": (()=>tryCatch)
});
function tryCatch(arg) {
    if (typeof arg === "function") {
        try {
            const result = arg();
            if (result instanceof Promise) {
                return tryCatch(result);
            }
            return {
                data: result,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error: error
            };
        }
    }
    return arg.then((data)=>({
            data,
            error: null
        })).catch((error)=>({
            data: null,
            error: error
        }));
}
}}),
"[project]/apps/web/src/lib/rerank/cohere.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "rerankResults": (()=>rerankResults)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cohere$2d$ai$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cohere-ai/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$llamaindex$2f$dist$2f$index$2e$react$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/llamaindex/dist/index.react-server.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$llamaindex$2f$core$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@llamaindex/core/schema/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/error.ts [app-route] (ecmascript)");
;
;
;
;
async function rerankResults(results, options) {
    if (!results.length) return results;
    const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cohere$2d$ai$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CohereClient"]({
        token: options.cohereApiKey || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DEFAULT_COHERE_API_KEY
    });
    const { data: rerankResults, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tryCatch"])(client.v2.rerank({
        documents: results.map((doc)=>doc.node.getContent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$llamaindex$2f$core$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MetadataMode"].NONE)),
        query: options.query,
        topN: options.limit,
        model: "rerank-v3.5",
        returnDocuments: false
    }));
    if (error) {
        console.error("Cohere rerank failed:", error);
        return results;
    }
    // TODO: track usage with rerankResults.meta
    return rerankResults.results.map((result)=>{
        // Use the index from the result to find the original document
        const originalIndex = result.index;
        const originalDoc = results[originalIndex];
        if (!originalDoc) {
            return null;
        }
        return {
            ...originalDoc,
            rerankScore: result.relevanceScore
        };
    }).filter(Boolean);
}
}}),
"[project]/apps/web/src/lib/vector-store/parse.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatResults": (()=>formatResults),
    "queryVectorStore": (()=>queryVectorStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$llamaindex$2f$core$2f$vector$2d$store$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@llamaindex/core/vector-store/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$llamaindex$2f$dist$2f$index$2e$react$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/llamaindex/dist/index.react-server.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$llamaindex$2f$core$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@llamaindex/core/schema/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$embedding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/embedding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/functions.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rerank$2f$cohere$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rerank/cohere.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
const formatResults = (results, { includeMetadata, includeRelationships })=>{
    return results.map((result)=>{
        return {
            id: result.id,
            text: result.node.getContent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$llamaindex$2f$core$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MetadataMode"].NONE),
            metadata: includeMetadata ? result.node.metadata : undefined,
            relationships: includeRelationships ? result.node.relationships : undefined,
            score: result.score,
            rerankScore: result.rerankScore
        };
    });
};
const queryVectorStore = async (namespace, options)=>{
    // TODO: if the embedding model is managed, track the usage
    const [embeddingModel, vectorStore] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$embedding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceEmbeddingModel"])(namespace, "query"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getNamespaceVectorStore"])(namespace, options.tenantId)
    ]);
    const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["embed"])({
        model: embeddingModel,
        value: options.query
    });
    // TODO: track usage
    let { matches } = await vectorStore.query({
        vector: embedding.embedding,
        topK: options.topK,
        filter: options.filter,
        includeMetadata: true
    });
    if (options.minScore !== undefined) {
        matches = matches.filter((match)=>match.score && match.score >= options.minScore);
    }
    const parsedResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["filterFalsy"])(matches.map((match)=>{
        const nodeContent = match.metadata?._node_content;
        if (!nodeContent) return null;
        try {
            return {
                id: match.id,
                score: match.score,
                node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$llamaindex$2f$core$2f$vector$2d$store$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["metadataDictToNode"])(match.metadata)
            };
        } catch (e) {
            console.error(e);
            return null;
        }
    }));
    if (matches.length > 0 && parsedResults.length === 0) {
        return null;
    }
    // If re-ranking is enabled and we have a query, perform reranking
    let rerankedResults = null;
    if (options.rerank) {
        rerankedResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rerank$2f$cohere$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rerankResults"])(parsedResults, {
            limit: options.rerankLimit || options.topK,
            query: options.query
        });
    }
    return {
        query: options.query,
        unorderedIds: rerankedResults ? parsedResults.map((result)=>result.id) : null,
        results: formatResults(rerankedResults ?? parsedResults, {
            includeMetadata: options.includeMetadata,
            includeRelationships: options.includeRelationships
        })
    };
};
}}),
"[project]/apps/web/src/lib/vector-store/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$parse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/parse.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/index.ts [app-route] (ecmascript) <locals>");
}}),
"[project]/apps/web/src/services/namespaces/validate.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateEmbeddingModel": (()=>validateEmbeddingModel),
    "validateVectorStoreConfig": (()=>validateVectorStoreConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$embedding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/embedding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
;
;
;
const modelToDimensions = {
    // openai
    "text-embedding-3-large": 3072,
    "text-embedding-3-small": 1536,
    // google
    "text-embedding-004": 768,
    // voyage
    "voyage-3-large": 1024,
    "voyage-3": 1024,
    "voyage-3-lite": 512,
    "voyage-code-3": 1024,
    "voyage-finance-2": 1024,
    "voyage-law-2": 1024
};
const validateVectorStoreConfig = async (vectorStoreConfig, embeddingConfig)=>{
    if (!vectorStoreConfig) {
        return {
            success: true
        };
    }
    const v = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getNamespaceVectorStore"])({
        id: "",
        vectorStoreConfig,
        createdAt: new Date()
    });
    try {
        const dimensions = await v.getDimensions();
        if (embeddingConfig) {
            const embeddingDimensions = modelToDimensions[embeddingConfig.model];
            if (dimensions !== embeddingDimensions) {
                return {
                    success: false,
                    error: `Embedding dimensions mismatch: ${dimensions} !== ${embeddingDimensions}`
                };
            }
        }
        return {
            success: true
        };
    } catch  {
        return {
            success: false,
            error: "Failed to validate vector store config, make sure the API key is valid"
        };
    }
};
const validateEmbeddingModel = async (embeddingConfig)=>{
    if (!embeddingConfig) {
        return {
            success: true
        };
    }
    const model = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$embedding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceEmbeddingModel"])({
        embeddingConfig
    });
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["embed"])({
            model,
            value: "Hello, world!"
        });
        return {
            success: true
        };
    } catch  {
        return {
            success: false,
            error: "Failed to validate embedding model, make sure the API key is valid"
        };
    }
};
}}),
"[project]/apps/web/src/server/api/routers/namespaces.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "namespaceRouter": (()=>namespaceRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$namespaces$2f$validate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/namespaces/validate.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/validation/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/validation/src/embedding-model/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/validation/src/vector-store/index.ts [app-route] (ecmascript) <locals>");
;
;
;
;
;
const validateIsMember = async (ctx, orgId, roles)=>{
    const member = await ctx.db.member.findFirst({
        where: {
            userId: ctx.session.user.id,
            organizationId: orgId
        },
        select: {
            id: true,
            role: true
        }
    });
    if (!member) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "UNAUTHORIZED"
        });
    }
    if (roles && !roles.includes(member.role)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "UNAUTHORIZED"
        });
    }
};
const namespaceRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    getOrgNamespaces: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        orgId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        await validateIsMember(ctx, input.orgId);
        const namespaces = await ctx.db.namespace.findMany({
            where: {
                organizationId: input.orgId
            }
        });
        return namespaces;
    }),
    getNamespaceBySlug: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        orgSlug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        const namespace = await ctx.db.namespace.findFirst({
            where: {
                slug: input.slug,
                organization: {
                    slug: input.orgSlug,
                    members: {
                        some: {
                            userId: ctx.session.user.id
                        }
                    }
                }
            }
        });
        return namespace;
    }),
    getOnboardingStatus: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        orgSlug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        const namespace = await ctx.db.namespace.findFirst({
            where: {
                slug: input.slug,
                organization: {
                    slug: input.orgSlug,
                    members: {
                        some: {
                            userId: ctx.session.user.id
                        }
                    }
                }
            },
            select: {
                totalIngestJobs: true,
                totalPlaygroundUsage: true,
                organization: {
                    select: {
                        apiKeys: {
                            take: 1,
                            select: {
                                id: true
                            }
                        }
                    }
                }
            }
        });
        if (!namespace) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND"
            });
        }
        return {
            ingestDocuments: namespace.totalIngestJobs > 0,
            playground: namespace.totalPlaygroundUsage > 0,
            createApiKey: namespace.organization.apiKeys.length > 0
        };
    }),
    checkSlug: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        orgId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        const namespace = await ctx.db.namespace.findUnique({
            where: {
                organizationId_slug: {
                    slug: input.slug,
                    organizationId: input.orgId
                }
            }
        });
        return !!namespace;
    }),
    createNamespace: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        orgId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        embeddingConfig: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$embedding$2d$model$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EmbeddingConfigSchema"].optional(),
        vectorStoreConfig: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$validation$2f$src$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["VectorStoreSchema"].optional()
    })).mutation(async ({ ctx, input })=>{
        await validateIsMember(ctx, input.orgId, [
            "admin",
            "owner"
        ]);
        const { success: isValidEmbedding, error: embeddingError } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$namespaces$2f$validate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateEmbeddingModel"])(input.embeddingConfig);
        if (!isValidEmbedding) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: embeddingError
            });
        }
        const { success: isValidVectorStore, error: vectorStoreError } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$namespaces$2f$validate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateVectorStoreConfig"])(input.vectorStoreConfig, input.embeddingConfig);
        if (!isValidVectorStore) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: vectorStoreError
            });
        }
        const [namespace] = await ctx.db.$transaction([
            ctx.db.namespace.create({
                data: {
                    name: input.name,
                    slug: input.slug,
                    organizationId: input.orgId,
                    embeddingConfig: input.embeddingConfig,
                    vectorStoreConfig: input.vectorStoreConfig
                }
            }),
            ctx.db.organization.update({
                where: {
                    id: input.orgId
                },
                data: {
                    totalNamespaces: {
                        increment: 1
                    }
                }
            })
        ]);
        return namespace;
    })
});
}}),
"[project]/apps/web/src/lib/stripe/cancel-subscription.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cancelSubscription": (()=>cancelSubscription)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/stripe/index.ts [app-route] (ecmascript)");
;
async function cancelSubscription(customer) {
    if (!customer) return;
    try {
        const subscriptionId = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].subscriptions.list({
            customer
        }).then((res)=>res.data[0]?.id);
        if (subscriptionId) {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripe"].subscriptions.update(subscriptionId, {
                cancel_at_period_end: true,
                cancellation_details: {
                    comment: "Customer deleted their Agentset organization."
                }
            });
        }
    } catch (error) {
        console.log("Error cancelling Stripe subscription", error);
        return;
    }
}
}}),
"[project]/apps/web/src/services/organizations/delete.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deleteOrganization": (()=>deleteOrganization)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$cancel$2d$subscription$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/stripe/cancel-subscription.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/workflow.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
;
async function deleteOrganization({ organizationId }) {
    const org = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].organization.update({
        where: {
            id: organizationId
        },
        data: {
            status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["OrganizationStatus"].DELETING
        },
        select: {
            id: true,
            stripeId: true,
            namespaces: {
                select: {
                    id: true
                }
            }
        }
    });
    if (org.stripeId) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$stripe$2f$cancel$2d$subscription$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cancelSubscription"])(org.stripeId);
    }
    if (org.namespaces.length > 0) {
        await Promise.all(org.namespaces.map((namespace)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["triggerDeleteNamespace"])({
                namespaceId: namespace.id,
                deleteOrgWhenDone: true
            })));
    }
}
}}),
"[project]/apps/web/src/server/api/routers/organizations.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "organizationsRouter": (()=>organizationsRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$organizations$2f$delete$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/organizations/delete.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
;
;
;
;
;
const organizationsRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    all: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].query(async ({ ctx })=>{
        const orgs = await ctx.db.organization.findMany({
            where: {
                members: {
                    some: {
                        userId: ctx.session.user.id
                    }
                },
                status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["OrganizationStatus"].ACTIVE
            },
            select: {
                id: true,
                name: true,
                slug: true,
                plan: true,
                logo: true,
                namespaces: {
                    select: {
                        id: true,
                        name: true,
                        slug: true
                    }
                }
            },
            orderBy: {
                createdAt: "asc"
            }
        });
        return orgs;
    }),
    members: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        organizationId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        const members = await ctx.db.organization.findUnique({
            where: {
                id: input.organizationId,
                members: {
                    some: {
                        userId: ctx.session.user.id
                    }
                }
            },
            select: {
                members: {
                    include: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                                image: true
                            }
                        }
                    },
                    orderBy: {
                        createdAt: "asc"
                    }
                },
                invitations: {
                    where: {
                        status: "pending"
                    }
                }
            }
        });
        return members;
    }),
    delete: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        organizationId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        const org = await ctx.db.organization.findUnique({
            where: {
                id: input.organizationId,
                members: {
                    some: {
                        userId: ctx.session.user.id,
                        role: {
                            in: [
                                "admin",
                                "owner"
                            ]
                        }
                    }
                }
            }
        });
        if (!org) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "UNAUTHORIZED",
                message: "You are not authorized to delete this organization"
            });
        }
        if (org.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["OrganizationStatus"].DELETING) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "Organization is already being deleted"
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$organizations$2f$delete$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteOrganization"])({
            organizationId: org.id
        });
    })
});
}}),
"[project]/apps/web/src/lib/keyword-store/index.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KeywordStore": (()=>KeywordStore)
});
const topLevelMetadataKeys = [
    "namespaceId",
    "documentId",
    "tenantId"
];
const safeParse = (json)=>{
    try {
        return JSON.parse(json);
    } catch (error) {
        return null;
    }
};
class KeywordStore {
    namespaceId;
    tenantId;
    constructor(namespaceId, tenantId){
        this.namespaceId = namespaceId;
        this.tenantId = tenantId;
    }
    encodeId(id) {
        return id.replaceAll("#", "_");
    }
    decodeId(id) {
        return id.replaceAll("_", "#");
    }
    async search(query, { documentId, page = 1, limit = 10, includeMetadata, includeRelationships } = {}) {
        // Temporary implementation - returns empty results
        // TODO: Implement proper semantic search with Pinecone
        console.log("KeywordStore.search called - returning empty results (Azure Search disabled)");
        return {
            total: 0,
            totalPages: 1,
            perPage: limit,
            currentPage: page,
            hasNextPage: false,
            hasPreviousPage: false,
            results: []
        };
    }
    async listIds({ page = 1, limit = 1000, documentId } = {}) {
        // Temporary implementation - returns empty array
        console.log("KeywordStore.listIds called - returning empty array (Azure Search disabled)");
        return {
            total: 0,
            totalPages: 1,
            perPage: limit,
            currentPage: page,
            hasNextPage: false,
            hasPreviousPage: false,
            ids: []
        };
    }
    async deleteByIds(ids) {
        // No-op implementation
        console.log("KeywordStore.deleteByIds called - no-op (Azure Search disabled):", ids.length, "ids");
    }
    async upsert(chunks) {
        // No-op implementation
        console.log("KeywordStore.upsert called - no-op (Azure Search disabled):", chunks.length, "chunks");
    }
}
}}),
"[project]/apps/web/src/lib/agentic/prompts.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EVALUATE_QUERIES_PROMPT": (()=>EVALUATE_QUERIES_PROMPT),
    "GENERATE_QUERIES_PROMPT": (()=>GENERATE_QUERIES_PROMPT)
});
const GENERATE_QUERIES_PROMPT = `
Given a user question (or a chat history), list the appropriate search queries to find answers. 

There are two apis to use: keyword search and semantic search. You should return a maximum of 10 queries.

A good keyword search query contains one (or max two) words that are key to finding the result.

The results should be returned in the format: 
{"queries": [{"type": "keyword", "query": "..."}, ...]}
`;
const EVALUATE_QUERIES_PROMPT = `
You are a research assistant, you will be provided with a chat history, and a list of sources, and you will need to evaluate if the sources are able to answer the user's question.

The result should be returned in the format:
{ "canAnswer": true | false }
`;
}}),
"[project]/apps/web/src/lib/agentic/utils.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "evaluateQueries": (()=>evaluateQueries),
    "formatChatHistory": (()=>formatChatHistory),
    "formatSources": (()=>formatSources),
    "generateQueries": (()=>generateQueries)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/agentic/prompts.ts [app-route] (ecmascript)");
;
;
;
const formatChatHistory = (messages)=>{
    return messages.map((m)=>`${m.role}: ${m.content}`).join("\n\n");
};
const formatSources = (sources)=>{
    return sources.map((s, idx)=>`<source_${idx + 1}>\n${s.text}\n</source_${idx + 1}>`).join("\n\n");
};
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    queries: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
            "keyword",
            "semantic"
        ]),
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    }))
});
const generateQueries = async (model, messages, oldQueries)=>{
    const queriesResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
        model,
        temperature: 0,
        system: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GENERATE_QUERIES_PROMPT"],
        prompt: `
${oldQueries.length > 0 ? "The queries you return should be different from these ones that were tried so far:\n" + oldQueries.map((q)=>`- ${q.query}`).join("\n") : ""}

Chat history:
${formatChatHistory(messages)}
`.trim()
    });
    return {
        queries: schema.parse(JSON.parse(queriesResult.text)).queries,
        totalTokens: queriesResult.usage.totalTokens || 0
    };
};
const evalSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    canAnswer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean()
});
const evaluateQueries = async (model, messages, sources)=>{
    const evaluateQueriesResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
        model,
        temperature: 0,
        system: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EVALUATE_QUERIES_PROMPT"],
        prompt: `
Chat history:
${formatChatHistory(messages)}

Retrieved sources:
${formatSources(sources)}
 `
    });
    return {
        canAnswer: evalSchema.parse(JSON.parse(evaluateQueriesResult.text)).canAnswer,
        totalTokens: evaluateQueriesResult.usage.totalTokens || 0
    };
};
}}),
"[project]/apps/web/src/lib/agentic/search.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "agenticSearch": (()=>agenticSearch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$keyword$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/keyword-store/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$parse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/parse.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/agentic/utils.ts [app-route] (ecmascript)");
;
;
;
async function agenticSearch(namespace, { model, messages, queryOptions, maxEvals = 3, tokenBudget = 4096, onQueries }) {
    const queries = [];
    const chunks = {};
    const queryToResult = {};
    let totalQueries = 0;
    let totalTokens = 0;
    const lastMessage = messages[messages.length - 1].content;
    for(let i = 0; i < maxEvals; i++){
        console.log(`[EVAL LOOP] ${i + 1} / ${maxEvals}`);
        console.dir(messages, {
            depth: null
        });
        console.dir(queries, {
            depth: null
        });
        const { queries: newQueries, totalTokens: queriesTokens } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateQueries"])(model, messages, queries);
        if (i === 0) {
            newQueries.unshift({
                query: lastMessage,
                type: "semantic"
            });
        }
        newQueries.forEach((q)=>{
            if (queries.includes(q)) return;
            queries.push(q);
        });
        totalTokens += queriesTokens;
        if (onQueries) onQueries(newQueries);
        const data = (await Promise.all(newQueries.map(async (query)=>{
            if (namespace.keywordEnabled && query.type === "keyword") {
                const keywordStore = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$keyword$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KeywordStore"](namespace.id, queryOptions?.tenantId);
                const keywordResult = await keywordStore.search(query.query, {
                    limit: 15,
                    includeMetadata: true
                });
                totalQueries++;
                return {
                    query: query.query,
                    unorderedIds: keywordResult.results.map((r)=>r.id),
                    results: keywordResult.results
                };
            }
            const queryResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$parse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryVectorStore"])(namespace, {
                query: query.query,
                topK: 50,
                rerankLimit: 15,
                rerank: true,
                includeMetadata: true,
                ...queryOptions
            });
            totalQueries++;
            return queryResult;
        }))).filter((d)=>d !== null);
        data.forEach((d)=>{
            queryToResult[d.query] = d;
            d.results.forEach((r)=>{
                if (chunks[r.id]) return;
                chunks[r.id] = r;
            });
        });
        const { canAnswer, totalTokens: evalsTokens } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateQueries"])(model, messages, Object.values(chunks));
        totalTokens += evalsTokens;
        if (canAnswer || totalTokens >= tokenBudget) break;
    }
    return {
        queries,
        chunks,
        queryToResult,
        totalQueries
    };
}
}}),
"[project]/apps/web/src/lib/api/usage.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "incrementSearchUsage": (()=>incrementSearchUsage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$functions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/functions/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
;
;
const incrementSearchUsage = (namespaceId, queries)=>{
    // track usage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$functions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["waitUntil"])((async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].namespace.update({
            where: {
                id: namespaceId
            },
            data: {
                organization: {
                    update: {
                        searchUsage: {
                            increment: queries
                        }
                    }
                }
            }
        });
    })());
};
}}),
"[project]/apps/web/src/lib/llm.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getNamespaceLanguageModel": (()=>getNamespaceLanguageModel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
;
const getNamespaceLanguageModel = async (config)=>{
    if (!config) {
        const { createOpenAI } = await __turbopack_context__.r("[project]/node_modules/@ai-sdk/openai/dist/index.mjs [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
        const defaultOpenAI = createOpenAI({
            apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DEFAULT_OPENAI_API_KEY
        });
        return defaultOpenAI.languageModel(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DEFAULT_OPENAI_MODEL || "gpt-4");
    }
    switch(config.provider){
        case "OPENAI":
            {
                const { createOpenAI } = await __turbopack_context__.r("[project]/node_modules/@ai-sdk/openai/dist/index.mjs [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
                const { apiKey, model } = config;
                const openai = createOpenAI({
                    apiKey
                });
                return openai.languageModel(model);
            }
        case "AZURE_OPENAI":
            {
                const { createOpenAI } = await __turbopack_context__.r("[project]/node_modules/@ai-sdk/openai/dist/index.mjs [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
                const { apiKey, model } = config;
                const openai = createOpenAI({
                    apiKey
                });
                return openai.languageModel(model);
            }
        default:
            {
                // This exhaustive check ensures TypeScript will error if a new provider
                // is added without handling it in the switch statement
                const _exhaustiveCheck = config;
                throw new Error(`Unknown vector store provider: ${_exhaustiveCheck}`);
            }
    }
};
}}),
"[project]/apps/web/src/server/api/routers/search.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "searchRouter": (()=>searchRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/agentic/search.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$usage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/usage.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$llm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/llm.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/auth.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
const searchRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    search: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        const namespace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceByUser"])(ctx, {
            id: input.namespaceId
        });
        if (!namespace) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND"
            });
        }
        const model = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$llm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceLanguageModel"])();
        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["agenticSearch"])(namespace, {
            model,
            messages: [
                {
                    role: "user",
                    content: input.query
                }
            ]
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$usage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["incrementSearchUsage"])(namespace.id, results.totalQueries);
        const chunks = Object.values(results.chunks);
        return {
            results: chunks,
            queries: results.queries
        };
    })
});
}}),
"[project]/apps/web/src/lib/slug.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "toSlug": (()=>toSlug),
    "validSlugRegex": (()=>validSlugRegex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/slugify/slugify.js [app-route] (ecmascript)");
;
const validSlugRegex = new RegExp(/^[a-zA-Z0-9\-]+$/);
const toSlug = (text, suffix)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(text, {
        lower: true,
        strict: true,
        trim: true
    }) + (suffix ? `-${suffix}` : "");
};
}}),
"[project]/apps/web/src/lib/string-utils.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "camelCaseToWords": (()=>camelCaseToWords),
    "capitalize": (()=>capitalize),
    "filenamize": (()=>filenamize),
    "generateToken": (()=>generateToken),
    "sanitizeText": (()=>sanitizeText),
    "truncate": (()=>truncate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$slug$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/slug.ts [app-route] (ecmascript)");
;
const tokenCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const tokenCharactersLength = tokenCharacters.length;
function generateToken(length) {
    let result = "";
    for(let i = 0; i < length; i++)result += tokenCharacters.charAt(Math.floor(Math.random() * tokenCharactersLength));
    return result;
}
function truncate(str, length) {
    if (str.length <= length) return str;
    return str.slice(0, length);
}
function filenamize(value, length = 20) {
    const token = generateToken(4);
    const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$slug$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toSlug"])(value, token);
    const hyphenCount = (slug.match(/-/g) || []).length;
    length = length + hyphenCount + token.length;
    return truncate(slug, length);
}
function capitalize(str) {
    if (!str || typeof str !== "string") return str;
    return str.split(" ").map((word)=>word.charAt(0).toUpperCase() + (word.length > 1 ? word.slice(1).toLowerCase() : "")).join(" ");
}
function camelCaseToWords(str) {
    return str.split(/(?=[A-Z])/).map(capitalize).join(" ");
}
function sanitizeText(text) {
    return text.replaceAll("<has_function_call>", "");
}
}}),
"[project]/apps/web/src/lib/upload.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MAX_UPLOAD_SIZE": (()=>MAX_UPLOAD_SIZE)
});
const MAX_UPLOAD_SIZE = 200 * 1024 * 1024; // 200MB
}}),
"[project]/apps/web/src/server/api/routers/uploads.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "uploadsRouter": (()=>uploadsRouter)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/error.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$string$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/string-utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/upload.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/auth.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const supportedExtensions = [
    ".bmp",
    ".csv",
    ".doc",
    ".docx",
    ".eml",
    ".epub",
    ".heic",
    ".html",
    ".jpeg",
    ".png",
    ".md",
    ".msg",
    ".odt",
    ".org",
    ".p7s",
    ".pdf",
    ".png",
    ".ppt",
    ".pptx",
    ".rst",
    ".rtf",
    ".tiff",
    ".txt",
    ".tsv",
    ".xls",
    ".xlsx",
    ".xml"
];
// Helper function to generate upload URL for Uploadthing
const presignUploadUrl = async (key, contentType, fileSize)=>{
    try {
        // Retornar o endpoint do Uploadthing com o slug correto para documentos
        return {
            data: `/api/uploadthing?slug=documentUploader`,
            error: null
        };
    } catch (error) {
        console.error("Error generating presigned URL:", error);
        return {
            data: null,
            error: "Failed to generate upload URL"
        };
    }
};
const uploadsRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    getPresignedUrl: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        fileName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        contentType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        fileSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().min(1).max(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAX_UPLOAD_SIZE"])
    })).mutation(async ({ ctx, input })=>{
        const ext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["extname"])(input.fileName);
        const filename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$string$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["filenamize"])(input.fileName.replace(ext, ""));
        if (!supportedExtensions.includes(ext)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "Unsupported file type"
            });
        }
        const ns = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceByUser"])(ctx, {
            id: input.namespaceId
        });
        if (!ns) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Namespace not found"
            });
        }
        const key = `namespaces/${ns.id}/${filename}${ext}`;
        const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tryCatch"])(presignUploadUrl(key, input.contentType, input.fileSize));
        if (url.error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "INTERNAL_SERVER_ERROR"
            });
        }
        return {
            url: url.data,
            key
        };
    }),
    getPresignedUrls: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        files: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            fileName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
            fileSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().min(1).max(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAX_UPLOAD_SIZE"])
        })).min(1, {
            message: "At least one file is required"
        }).max(100, {
            message: "Maximum 100 files"
        })
    })).mutation(async ({ ctx, input })=>{
        const ns = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceByUser"])(ctx, {
            id: input.namespaceId
        });
        if (!ns) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Namespace not found"
            });
        }
        const preparedFiles = input.files.map((file)=>{
            const ext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["extname"])(file.fileName);
            const filename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$string$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["filenamize"])(file.fileName.replace(ext, ""));
            return {
                ext,
                contentType: file.contentType,
                fileSize: file.fileSize,
                key: `namespaces/${ns.id}/${filename}${ext}`
            };
        });
        if (preparedFiles.some((file)=>!supportedExtensions.includes(file.ext))) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "Unsupported file type"
            });
        }
        const urls = await Promise.all(preparedFiles.map(async (file)=>{
            const urlResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tryCatch"])(presignUploadUrl(file.key, file.contentType, file.fileSize));
            return {
                url: urlResult,
                key: file.key
            };
        }));
        if (urls.some((url)=>url.url.error)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "INTERNAL_SERVER_ERROR"
            });
        }
        return urls.map((url)=>({
                url: url.url.data,
                key: url.key
            }));
    })
});
}}),
"[project]/apps/web/src/server/api/root.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "appRouter": (()=>appRouter),
    "createCaller": (()=>createCaller)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$api$2d$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/routers/api-keys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$billing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/routers/billing.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$connectors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/routers/connectors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$documents$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/routers/documents.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$domains$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/routers/domains.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$hosting$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/routers/hosting.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$ingest$2d$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/routers/ingest-jobs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$namespaces$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/routers/namespaces.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$organizations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/routers/organizations.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/routers/search.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$uploads$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/routers/uploads.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const appRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    namespace: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$namespaces$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["namespaceRouter"],
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$api$2d$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiKeysRouter"],
    ingestJob: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$ingest$2d$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ingestJobRouter"],
    document: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$documents$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["documentsRouter"],
    upload: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$uploads$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uploadsRouter"],
    billing: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$billing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["billingRouter"],
    organization: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$organizations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["organizationsRouter"],
    hosting: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$hosting$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hostingRouter"],
    domain: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$domains$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainsRouter"],
    search: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["searchRouter"],
    connector: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$routers$2f$connectors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectorsRouter"]
});
const createCaller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCallerFactory"])(appRouter);
}}),
"[project]/apps/web/src/app/api/(internal-api)/trpc/[trpc]/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>handler),
    "POST": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$root$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/root.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/adapters/fetch/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$fetchRequestHandler$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/adapters/fetch/fetchRequestHandler.mjs [app-route] (ecmascript)");
;
;
;
;
/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */ const createContext = async (req)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCContext"])({
        headers: req.headers
    });
};
const handler = (req)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$fetchRequestHandler$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchRequestHandler"])({
        endpoint: "/api/trpc",
        req,
        router: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$api$2f$root$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appRouter"],
        createContext: ()=>createContext(req),
        onError: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NODE_ENV === "development" ? ({ path, error })=>{
            console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
        } : undefined
    });
;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d6634356._.js.map