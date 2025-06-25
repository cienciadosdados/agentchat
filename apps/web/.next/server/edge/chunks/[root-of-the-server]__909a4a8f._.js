(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__909a4a8f._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/apps/web/src/env.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "env": (()=>env)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [middleware-edge] (ecmascript)");
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createEnv"])({
    shared: {
        NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].enum([
            "development",
            "test",
            "production"
        ]).default("development"),
        NEXT_PUBLIC_APP_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("Agentset"),
        NEXT_PUBLIC_APP_SHORT_DOMAIN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("agentset.ai"),
        NEXT_PUBLIC_VERCEL_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].enum([
            "development",
            "preview",
            "production"
        ]).optional().default("development")
    },
    server: {
        DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().url(),
        SUPABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().url().optional(),
        SUPABASE_ANON_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional(),
        RESEND_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        BETTER_AUTH_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string(),
        BETTER_AUTH_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().url(),
        QSTASH_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().url().optional().default("https://qstash.upstash.io"),
        QSTASH_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        QSTASH_CURRENT_SIGNING_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        QSTASH_NEXT_SIGNING_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        DEFAULT_OPENAI_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        DEFAULT_OPENAI_MODEL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("gpt-4"),
        DEFAULT_OPENAI_EMBEDDING_MODEL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("text-embedding-3-large"),
        DEFAULT_PINECONE_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        DEFAULT_PINECONE_HOST: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        SECONDARY_PINECONE_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional(),
        SECONDARY_PINECONE_HOST: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().url().optional(),
        GITHUB_CLIENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        GITHUB_CLIENT_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        GOOGLE_CLIENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        GOOGLE_CLIENT_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        PARTITION_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        PARTITION_API_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().url().optional().default("https://api.unstructuredapp.io"),
        DEFAULT_COHERE_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        UPLOADTHING_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        UPLOADTHING_APP_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        ASSETS_UPLOADTHING_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        ASSETS_UPLOADTHING_APP_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        ASSETS_UPLOADTHING_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().url().optional().default("https://utfs.io/f/"),
        REDIS_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        REDIS_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        STRIPE_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        STRIPE_WEBHOOK_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        DISCORD_HOOK_ALERTS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().url().optional(),
        DISCORD_HOOK_CRON: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().url().optional(),
        DISCORD_HOOK_SUBSCRIBERS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().url().optional(),
        DISCORD_HOOK_ERRORS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().url().optional(),
        VERCEL_PROJECT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        VERCEL_TEAM_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured"),
        VERCEL_API_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured")
    },
    client: {
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().optional().default("not_configured")
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
"[project]/apps/web/src/lib/constants.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [middleware-edge] (ecmascript)");
;
const INFINITY_NUMBER = 1000000000;
const APP_NAME = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_APP_NAME;
const SHORT_DOMAIN = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_APP_SHORT_DOMAIN;
const localHost = `localhost:${process.env.PORT ?? 3000}`;
const APP_HOSTNAMES = new Set([
    `app.${SHORT_DOMAIN}`,
    `preview.${SHORT_DOMAIN}`,
    localHost
]);
const APP_DOMAIN = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_VERCEL_ENV === "production" ? `https://app.${SHORT_DOMAIN}` : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_VERCEL_ENV === "preview" ? `https://preview.${SHORT_DOMAIN}` : `http://${localHost}`;
const API_HOSTNAMES = new Set([
    `api.${SHORT_DOMAIN}`,
    `api-staging.${SHORT_DOMAIN}`,
    `api.${localHost}`
]);
const API_DOMAIN = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_VERCEL_ENV === "production" ? `https://api.${SHORT_DOMAIN}` : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_VERCEL_ENV === "preview" ? `https://api-staging.${SHORT_DOMAIN}` : `http://api.${localHost}`;
const HOSTING_PREFIX = "/a/";
}}),
"[project]/apps/web/src/lib/middleware/utils.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parse": (()=>parse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/constants.ts [middleware-edge] (ecmascript)");
;
const parse = (req)=>{
    let domain = req.headers.get("host");
    // path is the path of the URL (e.g. agentset.ai/stats/github -> /stats/github)
    const path = req.nextUrl.pathname;
    // remove www. from domain and convert to lowercase
    domain = domain.replace(/^www./, "").toLowerCase();
    // if (domain === "agentset.localhost:8888" || domain.endsWith(".vercel.app")) {
    if (domain.endsWith(".vercel.app")) {
        // for local development and preview URLs
        domain = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHORT_DOMAIN"];
    }
    // fullPath is the full URL path (along with search params)
    const searchParams = req.nextUrl.searchParams.toString();
    const searchParamsObj = Object.fromEntries(req.nextUrl.searchParams);
    const searchParamsString = searchParams.length > 0 ? `?${searchParams}` : "";
    const fullPath = `${path}${searchParamsString}`;
    // Here, we are using decodeURIComponent to handle foreign languages like Hebrew
    const key = decodeURIComponent(path.split("/")[1]); // key is the first part of the path (e.g. agentset.ai/stats/github -> stats)
    const fullKey = decodeURIComponent(path.slice(1)); // fullKey is the full path without the first slash (to account for multi-level subpaths, e.g. d.to/github/repo -> github/repo)
    return {
        domain,
        path,
        fullPath,
        key,
        fullKey,
        searchParamsObj,
        searchParamsString
    };
};
}}),
"[project]/apps/web/src/lib/middleware/api.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ApiMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/middleware/utils.ts [middleware-edge] (ecmascript)");
;
;
function ApiMiddleware(req) {
    const { fullPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(req);
    // Note: we don't have to account for paths starting with `/api`
    // since they're automatically excluded via our middleware matcher
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(new URL(`/api${fullPath}`, req.url));
}
}}),
"[project]/packages/db/src/client.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@neondatabase/serverless/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$neon$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-neon/dist/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/client/default.js [middleware-edge] (ecmascript)");
;
;
;
const createPrismaClient = ()=>{
    // Supabase pooled connection string (must use Supavisor)
    const connectionString = process.env.DATABASE_URL ?? "";
    if (connectionString.includes("@localhost")) {
        // Disable SSL for local connections
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["neonConfig"].useSecureWebSocket = false;
        // WebSocket proxy is hosted on `4000` locally, so add port. Does not work in production.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["neonConfig"].wsProxy = (host)=>`${host}:4000/v2`;
    }
    // Only Neon hosts support this -- non-deterministic errors otherwise
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["neonConfig"].pipelineConnect = false;
    // So it can also work in Node.js
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["neonConfig"].webSocketConstructor = WebSocket;
    const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$neon$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PrismaNeon"]({
        connectionString
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PrismaClient"]({
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
"[project]/packages/db/src/types/prisma.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-namespace */ __turbopack_context__.s({});
;
}}),
"[project]/packages/db/src/index.ts [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$types$2f$prisma$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/types/prisma.ts [middleware-edge] (ecmascript)");
;
;
;
}}),
"[project]/packages/db/src/index.ts [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$types$2f$prisma$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/types/prisma.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/apps/web/src/lib/middleware/get-session.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getMiddlewareSession": (()=>getMiddlewareSession)
});
const getMiddlewareSession = async (req)=>{
    const url = `${req.nextUrl.origin}/api/auth/get-session`;
    const response = await fetch(url, {
        headers: {
            cookie: req.headers.get("cookie") ?? "",
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        return null;
    }
    try {
        const data = await response.json();
        return data;
    } catch  {
        return null;
    }
};
}}),
"[project]/apps/web/src/lib/middleware/hosting.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HostingMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/middleware/utils.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/constants.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$get$2d$session$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/middleware/get-session.ts [middleware-edge] (ecmascript)");
;
;
;
;
;
async function HostingMiddleware(req, mode = "domain") {
    const { domain, path, fullPath: _fullPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(req);
    let filter = {};
    let fullPath = _fullPath;
    if (mode === "domain") {
        filter = {
            domain: {
                slug: domain
            }
        };
    } else {
        // fullPath will looks like this: /a/my-slug/...
        // we need to get the slug and the rest of the path
        const slug = path.replace(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HOSTING_PREFIX"], "").split("/")[0];
        fullPath = fullPath.replace(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HOSTING_PREFIX"]}${slug}`, "");
        if (fullPath === "") fullPath = "/";
        filter = {
            slug
        };
    }
    const hosting = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["db"].hosting.findFirst({
        where: filter,
        select: {
            id: true,
            slug: true,
            protected: true,
            allowedEmailDomains: true,
            allowedEmails: true,
            namespaceId: true
        }
    });
    // 404
    if (!hosting) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].error();
    }
    if (fullPath === "/login") {
        const homeUrl = new URL(mode === "domain" ? "/" : `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HOSTING_PREFIX"]}${hosting.slug}`, req.url);
        // if the domain is not protected and the path is /login, redirect to /
        if (!hosting.protected) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(homeUrl);
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$get$2d$session$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getMiddlewareSession"])(req);
        if (session) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(homeUrl);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(new URL(`/${hosting.id}${fullPath}`, req.url));
    }
    if (hosting.protected) {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$get$2d$session$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getMiddlewareSession"])(req);
        // if not session, redirect to login
        if (!session) {
            const loginUrl = new URL(`/login${mode === "path" ? `?r=${encodeURIComponent(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HOSTING_PREFIX"]}${hosting.slug}`)}` : ""}`, req.url);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
        }
        // if user is not allowed to access this domain, error
        const email = session.user.email;
        const emailDomain = email.split("@")[1] ?? "";
        const allowedEmailDomains = hosting.allowedEmailDomains;
        const allowedEmails = hosting.allowedEmails;
        if (!allowedEmails.includes(email) && !allowedEmailDomains.includes(emailDomain)) {
            // check if they're members
            const member = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["db"].member.findFirst({
                where: {
                    userId: session.user.id,
                    organization: {
                        namespaces: {
                            some: {
                                id: hosting.namespaceId
                            }
                        }
                    }
                },
                select: {
                    id: true
                }
            });
            // if they're not a member, rewrite to not-allowed
            if (!member) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(new URL(`/${hosting.id}/not-allowed`, req.url));
            }
        }
    }
    // rewrite to the custom domain
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(new URL(`/${hosting.id}${fullPath}`, req.url));
}
}}),
"[project]/apps/web/src/lib/middleware/app.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AppMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/middleware/utils.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/better-auth/dist/cookies/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/constants.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$hosting$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/middleware/hosting.ts [middleware-edge] (ecmascript)");
;
;
;
;
;
function AppMiddleware(req) {
    const { path, fullPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(req);
    if (path.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HOSTING_PREFIX"])) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$hosting$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(req, "path");
    }
    const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionCookie"])(req);
    // if the user is logged in, and is trying to access the login page, redirect to dashboard
    if (cookies && path.startsWith("/login")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", req.url));
    }
    // if the user is not logged in, and is trying to access a dashboard page, redirect to login
    if (!cookies && !(path.startsWith("/login") || path.startsWith("/invitation"))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", req.url));
    }
    // otherwise, rewrite the path to /app
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(new URL(`/app.agentset.ai${fullPath}`, req.url));
}
}}),
"[project]/apps/web/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/constants.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/middleware/api.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$app$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/middleware/app.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$hosting$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/middleware/hosting.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/middleware/utils.ts [middleware-edge] (ecmascript)");
;
;
;
;
;
const config = {
    matcher: [
        /*
     * Match all paths except for:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_proxy/ (proxies for third-party services)
     * 4. Metadata files: favicon.ico, sitemap.xml, robots.txt, manifest.webmanifest
     */ "/((?!api/|_next/|_proxy/|favicon.ico|sitemap.xml|openapi.json|robots.txt|manifest.webmanifest).*)"
    ]
};
function middleware(request) {
    const { domain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(request);
    // for App
    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APP_HOSTNAMES"].has(domain)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$app$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(request);
    }
    // for API
    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["API_HOSTNAMES"].has(domain)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(request);
    }
    // for Custom Domain
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$hosting$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(request);
}
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__909a4a8f._.js.map