module.exports = {

"[project]/apps/web/.next-internal/server/app/api/(internal-api)/chat/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
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
"[externals]/node:assert [external] (node:assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:assert", () => require("node:assert"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

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
"[externals]/node:stream [external] (node:stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

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
"[project]/apps/web/src/lib/vector-store/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$parse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/parse.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/index.ts [app-route] (ecmascript) <locals>");
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
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

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
"[project]/apps/web/src/lib/agentic/index.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "generateAgenticResponse": (()=>generateAgenticResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/prompts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/agentic/search.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/agentic/utils.ts [app-route] (ecmascript)");
;
;
;
;
const agenticPipeline = (namespace, { model, queryOptions, headers, systemPrompt, temperature, messagesWithoutQuery, lastMessage, afterQueries, maxEvals = 3, tokenBudget = 4096, includeLogs = true })=>{
    const messages = [
        ...messagesWithoutQuery,
        {
            role: "user",
            content: lastMessage
        }
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDataStreamResponse"])({
        execute: async (dataStream)=>{
            dataStream.writeMessageAnnotation({
                type: "status",
                value: "generating-queries"
            });
            // step 1. generate queries
            const { chunks, queryToResult, totalQueries } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["agenticSearch"])(namespace, {
                model,
                messages,
                queryOptions,
                maxEvals,
                tokenBudget,
                onQueries: (newQueries)=>{
                    dataStream.writeMessageAnnotation({
                        type: "status",
                        value: "searching",
                        queries: newQueries
                    });
                }
            });
            afterQueries?.(totalQueries);
            dataStream.writeMessageAnnotation({
                type: "status",
                value: "generating-answer"
            });
            // TODO: shrink chunks and only select relevant ones to pass to the LLM
            const dedupedData = Object.values(chunks);
            const newMessages = [
                ...messagesWithoutQuery,
                {
                    role: "user",
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEW_MESSAGE_PROMPT"].compile({
                        chunks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatSources"])(dedupedData),
                        // put the original query in the message to help with context
                        query: `<query>${lastMessage}</query>`
                    })
                }
            ];
            const messageStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
                model,
                system: systemPrompt,
                messages: newMessages,
                temperature,
                onError: (error)=>{
                    console.error(error);
                }
            });
            dataStream.writeMessageAnnotation({
                type: "agentset_sources",
                value: {
                    results: dedupedData
                },
                ...includeLogs && {
                    logs: Object.values(queryToResult)
                }
            });
            messageStream.mergeIntoDataStream(dataStream);
        },
        onError (error) {
            console.error(error);
            return "An error occurred";
        },
        headers
    });
};
const generateAgenticResponse = async (namespace, { model, queryOptions, systemPrompt, temperature, messagesWithoutQuery, lastMessage, afterQueries, maxEvals = 3, tokenBudget = 4096 })=>{
    const messages = [
        ...messagesWithoutQuery,
        {
            role: "user",
            content: lastMessage
        }
    ];
    // step 1. generate queries
    const { chunks, totalQueries } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["agenticSearch"])(namespace, {
        model,
        messages,
        queryOptions,
        maxEvals,
        tokenBudget
    });
    afterQueries?.(totalQueries);
    // TODO: shrink chunks and only select relevant ones to pass to the LLM
    const dedupedData = Object.values(chunks);
    const newMessages = [
        ...messagesWithoutQuery,
        {
            role: "user",
            content: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEW_MESSAGE_PROMPT"].compile({
                chunks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatSources"])(dedupedData),
                // put the original query in the message to help with context
                query: `<query>${lastMessage}</query>`
            })
        }
    ];
    const answer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
        model: model,
        system: systemPrompt,
        messages: newMessages,
        temperature: temperature
    });
    return {
        answer: answer.text,
        sources: dedupedData
    };
};
const __TURBOPACK__default__export__ = agenticPipeline;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
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
"[project]/apps/web/src/lib/api/errors.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AgentsetApiError": (()=>AgentsetApiError),
    "ErrorCode": (()=>ErrorCode),
    "errorSchemaFactory": (()=>errorSchemaFactory),
    "exceededLimitError": (()=>exceededLimitError),
    "fromZodError": (()=>fromZodError),
    "handleAndReturnErrorResponse": (()=>handleAndReturnErrorResponse),
    "handleApiError": (()=>handleApiError),
    "httpStatusToErrorCode": (()=>httpStatusToErrorCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/zod/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$error$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-error/lib/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$string$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/string-utils.ts [app-route] (ecmascript)");
;
;
;
;
;
const ErrorCode = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enum([
    "bad_request",
    "not_found",
    "internal_server_error",
    "unauthorized",
    "forbidden",
    "rate_limit_exceeded",
    "invite_expired",
    "invite_pending",
    "exceeded_limit",
    "conflict",
    "unprocessable_entity"
]);
const docsBase = "https://docs.agentset.com";
const errorCodeToHttpStatus = {
    bad_request: 400,
    unauthorized: 401,
    forbidden: 403,
    exceeded_limit: 403,
    not_found: 404,
    conflict: 409,
    invite_pending: 409,
    invite_expired: 410,
    unprocessable_entity: 422,
    rate_limit_exceeded: 429,
    internal_server_error: 500
};
const httpStatusToErrorCode = Object.fromEntries(Object.entries(errorCodeToHttpStatus).map(([code, status])=>[
        status,
        code
    ]));
const speakeasyErrorOverrides = {
    bad_request: "BadRequest",
    unauthorized: "Unauthorized",
    forbidden: "Forbidden",
    exceeded_limit: "ExceededLimit",
    not_found: "NotFound",
    conflict: "Conflict",
    invite_pending: "InvitePending",
    invite_expired: "InviteExpired",
    unprocessable_entity: "UnprocessableEntity",
    rate_limit_exceeded: "RateLimitExceeded",
    internal_server_error: "InternalServerError"
};
const _ErrorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].literal(false),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
        code: ErrorCode.openapi({
            description: "A short code indicating the error code returned.",
            example: "not_found"
        }),
        message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().openapi({
            description: "A human readable error message.",
            example: "The requested resource was not found."
        }),
        doc_url: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().optional().openapi({
            description: "A URL to more information about the error code reported.",
            example: `${docsBase}/api-reference`
        })
    })
});
class AgentsetApiError extends Error {
    code;
    docUrl;
    constructor({ code, message, docUrl }){
        super(message);
        this.code = code;
        this.docUrl = docUrl ?? `${docErrorUrl}#${code.replace("_", "-")}`;
    }
}
const docErrorUrl = `${docsBase}/api-reference/errors`;
function fromZodError(error) {
    return {
        error: {
            code: "unprocessable_entity",
            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$error$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateErrorMessage"])(error.issues, {
                maxErrors: 1,
                delimiter: {
                    component: ": "
                },
                path: {
                    enabled: true,
                    type: "objectNotation",
                    label: ""
                },
                code: {
                    enabled: true,
                    label: ""
                },
                message: {
                    enabled: true,
                    label: ""
                }
            }),
            doc_url: `${docErrorUrl}#unprocessable-entity`
        }
    };
}
function handleApiError(error) {
    console.error("API error occurred", error.message);
    // Zod errors
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodError"]) {
        return {
            ...fromZodError(error),
            status: errorCodeToHttpStatus.unprocessable_entity
        };
    }
    // AgentsetApiError errors
    if (error instanceof AgentsetApiError) {
        return {
            error: {
                code: error.code,
                message: error.message,
                doc_url: error.docUrl
            },
            status: errorCodeToHttpStatus[error.code]
        };
    }
    // Prisma record not found error
    if (error.code === "P2025") {
        return {
            error: {
                code: "not_found",
                message: error?.meta?.cause || error.message || "The requested resource was not found.",
                doc_url: `${docErrorUrl}#not-found`
            },
            status: 404
        };
    }
    // Fallback
    // Unhandled errors are not user-facing, so we don't expose the actual error
    return {
        error: {
            code: "internal_server_error",
            message: "An internal server error occurred. Please contact our support if the problem persists.",
            doc_url: `${docErrorUrl}#internal-server-error`
        },
        status: 500
    };
}
function handleAndReturnErrorResponse(err, headers) {
    const { error, status } = handleApiError(err);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        error
    }, {
        headers,
        status
    });
}
const errorSchemaFactory = (code, description)=>{
    return {
        description,
        content: {
            "application/json": {
                schema: {
                    "x-speakeasy-name-override": speakeasyErrorOverrides[code],
                    type: "object",
                    properties: {
                        success: {
                            type: "boolean",
                            example: false
                        },
                        error: {
                            type: "object",
                            properties: {
                                code: {
                                    type: "string",
                                    enum: [
                                        code
                                    ],
                                    description: "A short code indicating the error code returned.",
                                    example: code
                                },
                                message: {
                                    "x-speakeasy-error-message": true,
                                    type: "string",
                                    description: "A human readable explanation of what went wrong.",
                                    example: "The requested resource was not found."
                                },
                                doc_url: {
                                    type: "string",
                                    description: "A link to our documentation with more details about this error code",
                                    example: `${docErrorUrl}#${code.replace("_", "-")}`
                                }
                            },
                            required: [
                                "code",
                                "message"
                            ]
                        }
                    },
                    required: [
                        "success",
                        "error"
                    ]
                }
            }
        }
    };
};
const exceededLimitError = ({ plan, limit, type })=>{
    return `You've reached your ${type === "retrievals" ? "monthly" : ""} limit of ${limit} ${limit === 1 ? type.slice(0, -1) : type} on the ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$string$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["capitalize"])(plan)} plan. Please upgrade to add more ${type}.`;
};
}}),
"[project]/apps/web/src/lib/redis.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "redis": (()=>redis)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@upstash/redis/nodejs.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@upstash/redis/nodejs.mjs [app-route] (ecmascript) <locals>");
;
;
const redis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Redis"]({
    url: "https://flowing-fish-11567.upstash.io",
    token: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].REDIS_TOKEN
});
}}),
"[project]/apps/web/src/lib/api/rate-limit.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ratelimit": (()=>ratelimit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$ratelimit$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@upstash/ratelimit/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/redis.ts [app-route] (ecmascript)");
;
;
const ratelimit = (requests = 10, seconds = "10 s")=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$ratelimit$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Ratelimit"]({
        redis: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"],
        limiter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$ratelimit$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Ratelimit"].slidingWindow(requests, seconds),
        analytics: true,
        prefix: "agentset"
    });
};
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
"[project]/apps/web/src/lib/middleware/get-session.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/apps/web/src/lib/api/session.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authenticateRequestSession": (()=>authenticateRequestSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$get$2d$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/middleware/get-session.ts [app-route] (ecmascript)");
;
;
;
const authenticateRequestSession = async (request, namespaceId)=>{
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$middleware$2f$get$2d$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMiddlewareSession"])(request);
    if (!session) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
            code: "unauthorized",
            message: "Unauthorized"
        });
    }
    if (!namespaceId) {
        return {
            session
        };
    }
    const namespace = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].namespace.findUnique({
        where: {
            id: namespaceId,
            organization: {
                members: {
                    some: {
                        userId: session.user.id
                    }
                }
            }
        }
    });
    if (!namespace) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
            code: "not_found",
            message: "Namespace not found"
        });
    }
    // TODO: check role
    return {
        namespace,
        session
    };
};
}}),
"[project]/apps/web/src/lib/api/tenant.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTenantFromRequest": (()=>getTenantFromRequest)
});
const getTenantFromRequest = (request)=>{
    const tenantId = request.headers.get("x-tenant-id");
    return tenantId?.trim() ?? undefined;
};
}}),
"[project]/apps/web/src/lib/api/utils.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSearchParams": (()=>getSearchParams),
    "parseRequestBody": (()=>parseRequestBody)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/errors.ts [app-route] (ecmascript)");
;
const getSearchParams = (req)=>{
    // Create a params object
    const params = {};
    new URL(req.url).searchParams.forEach(function(val, key) {
        params[key] = val;
    });
    return params;
};
const parseRequestBody = async (req)=>{
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return await req.json();
    } catch (e) {
        console.error(e);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
            code: "bad_request",
            message: "Invalid JSON format in request body. Please ensure the request body is a valid JSON object."
        });
    }
};
}}),
"[project]/apps/web/src/lib/api/handler/auth.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "withAuthApiHandler": (()=>withAuthApiHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/rate-limit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/session.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$tenant$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/tenant.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/utils.ts [app-route] (ecmascript)");
;
;
;
;
;
const withAuthApiHandler = (handler, { requireNamespace = true } = {})=>{
    return async (req, { params })=>{
        const routeParams = await params;
        const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSearchParams"])(req);
        const namespaceId = searchParams.namespaceId;
        let headers = {};
        try {
            if (requireNamespace && !namespaceId) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
                    code: "bad_request",
                    message: "Namespace ID is required"
                });
            }
            const tenantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$tenant$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTenantFromRequest"])(req);
            const { namespace, session } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authenticateRequestSession"])(req, namespaceId);
            const rateLimit = 600;
            const { success, limit, reset, remaining } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ratelimit"])(rateLimit, "1 m").limit(`user:${session.user.id}`);
            headers = {
                "Retry-After": reset.toString(),
                "X-RateLimit-Limit": limit.toString(),
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": reset.toString()
            };
            if (!success) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
                    code: "rate_limit_exceeded",
                    message: "Too many requests."
                });
            }
            return await handler({
                req,
                params: routeParams ?? {},
                searchParams,
                namespace,
                session,
                tenantId
            });
        } catch (error) {
            console.error(error);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleAndReturnErrorResponse"])(error, headers);
        }
    };
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
"[project]/apps/web/src/lib/api/api-key.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getApiKeyInfo": (()=>getApiKeyInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
;
;
const getApiKeyInfo = (apiKey)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].organizationApiKey.findUnique({
            where: {
                key: apiKey
            },
            select: {
                scope: true,
                organizationId: true,
                organization: {
                    select: {
                        plan: true,
                        apiRatelimit: true,
                        searchLimit: true,
                        searchUsage: true,
                        totalPages: true,
                        pagesLimit: true
                    }
                }
            }
        });
        return data;
    }, [
        "apiKey",
        apiKey
    ], {
        tags: [
            `apiKey:${apiKey}`
        ],
        revalidate: 60 * 1
    })();
};
}}),
"[project]/apps/web/src/lib/api/handler/base.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "withApiHandler": (()=>withApiHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/error.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$api$2d$key$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/api-key.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/rate-limit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$tenant$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/tenant.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/utils.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const withApiHandler = (handler)=>{
    return async (req, { params })=>{
        const routeParams = await params;
        const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSearchParams"])(req);
        let apiKey = undefined;
        let headers = {};
        try {
            const authorizationHeader = req.headers.get("Authorization");
            if (authorizationHeader) {
                if (!authorizationHeader.includes("Bearer ")) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
                        code: "bad_request",
                        message: "Misconfigured authorization header. Did you forget to add 'Bearer '?"
                    });
                }
                apiKey = authorizationHeader.replace("Bearer ", "");
            }
            if (!apiKey) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
                    code: "unauthorized",
                    message: "Unauthorized: Invalid API key."
                });
            }
            const orgApiKey = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$error$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tryCatch"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$api$2d$key$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getApiKeyInfo"])(apiKey));
            if (!orgApiKey.data) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
                    code: "unauthorized",
                    message: "Unauthorized: Invalid API key."
                });
            }
            const rateLimit = orgApiKey.data.organization.apiRatelimit;
            const { success, limit, reset, remaining } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ratelimit"])(rateLimit, "1 m").limit(orgApiKey.data.organizationId);
            headers = {
                "Retry-After": reset.toString(),
                "X-RateLimit-Limit": limit.toString(),
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": reset.toString()
            };
            if (!success) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
                    code: "rate_limit_exceeded",
                    message: "Too many requests."
                });
            }
            const tenantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$tenant$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTenantFromRequest"])(req);
            return await handler({
                req,
                params: routeParams ?? {},
                searchParams,
                organization: {
                    id: orgApiKey.data.organizationId,
                    ...orgApiKey.data.organization
                },
                apiScope: orgApiKey.data.scope,
                headers,
                tenantId
            });
        } catch (error) {
            console.error(error);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleAndReturnErrorResponse"])(error, headers);
        }
    };
};
}}),
"[project]/apps/web/src/lib/api/handler/namespace.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "withNamespaceApiHandler": (()=>withNamespaceApiHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$ids$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/ids.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$handler$2f$base$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/handler/base.ts [app-route] (ecmascript)");
;
;
;
;
const withNamespaceApiHandler = (handler)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$handler$2f$base$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withApiHandler"])(async (params)=>{
        const namespaceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$ids$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeId"])(params.params.namespaceId ?? "", "ns_");
        if (!namespaceId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
                code: "bad_request",
                message: "Invalid namespace ID."
            });
        }
        const namespace = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].namespace.findUnique({
            where: {
                id: namespaceId
            }
        });
        if (!namespace || namespace.organizationId !== params.organization.id) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
                code: "unauthorized",
                message: "Unauthorized: You don't have access to this namespace."
            });
        }
        return await handler({
            ...params,
            namespace
        });
    });
};
}}),
"[project]/apps/web/src/lib/api/handler/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$handler$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/handler/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$handler$2f$namespace$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/handler/namespace.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$handler$2f$base$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/handler/base.ts [app-route] (ecmascript)");
;
;
;
}}),
"[project]/apps/web/src/lib/api/handler/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$handler$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/handler/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$handler$2f$namespace$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/handler/namespace.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$handler$2f$base$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/handler/base.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$handler$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/handler/index.ts [app-route] (ecmascript) <locals>");
}}),
"[project]/apps/web/src/lib/deep-research/classes.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Data models for the Deep Research Cookbook
 */ /**
 * Structured representation of a research plan with search queries.
 * Used to parse the LLM's planning output into a structured format
 * that can be easily processed by the research pipeline.
 */ __turbopack_context__.s({
    "SearchResult": (()=>SearchResult),
    "SearchResults": (()=>SearchResults)
});
class SearchResult {
    id;
    metadata;
    content;
    constructor(params){
        this.id = params.id;
        this.metadata = params.metadata;
        this.content = params.content;
    }
    /**
   * (For Report Generation and Completeness Evaluation) String representation with title, link and refined content.
   */ toString() {
        return `ID: ${this.id}\nMetadata: ${JSON.stringify(this.metadata)}\nContent: ${this.content.substring(0, 1000)}`;
    }
    /**
   * (For Filtering ONLY) Abbreviated string representation with truncated raw content.
   */ shortStr() {
        return `ID: ${this.id}\nMetadata: ${JSON.stringify(this.metadata)}\nContent: ${this.content.substring(0, 1000)}`;
    }
}
class SearchResults {
    results;
    constructor(results){
        this.results = results;
    }
    /**
   * Detailed string representation of all search results with indices.
   */ toString() {
        return this.results.map((result, i)=>`[${i + 1}] ${result.toString()}`).join("\n\n");
    }
    /**
   * Combine two SearchResults objects by concatenating their result lists.
   */ add(other) {
        return new SearchResults([
            ...this.results,
            ...other.results
        ]);
    }
    /**
   * Abbreviated string representation of all search results with indices.
   */ shortStr() {
        return this.results.map((result, i)=>`[${i + 1}] ${result.shortStr()}`).join("\n\n");
    }
    /**
   * Remove duplicate search results based on ID.
   * Returns a new SearchResults object with unique entries.
   */ dedup() {
        const seenIds = new Set();
        const uniqueResults = [];
        for (const result of this.results){
            if (!seenIds.has(result.id)) {
                seenIds.add(result.id);
                uniqueResults.push(result);
            }
        }
        return new SearchResults(uniqueResults);
    }
}
}}),
"[project]/apps/web/src/lib/deep-research/config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Configuration for the Deep Research Cookbook
 */ /**
 * Research Configuration Parameters
 *
 * These parameters control the Deep Research process, allowing customization
 * of research behavior, model selection, and output format.
 */ // Resource Allocation
// Parameters controlling research depth and breadth
__turbopack_context__.s({
    "PROMPTS": (()=>PROMPTS),
    "RESEARCH_CONFIG": (()=>RESEARCH_CONFIG),
    "getCurrentDateContext": (()=>getCurrentDateContext)
});
const RESEARCH_CONFIG = {
    budget: 2,
    maxQueries: 2,
    maxSources: 5,
    maxTokens: 8192
};
const getCurrentDateContext = ()=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // JavaScript months are 0-indexed
    const day = now.getDate();
    const monthName = now.toLocaleString("default", {
        month: "long"
    });
    return `Current date is ${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")} (${monthName} ${day}, ${year}).
When searching for recent information, prioritize results from the current year (${year}) and month (${monthName} ${year}).
For queries about recent developments, include the current year (${year}) in your search terms.
When ranking search results, consider recency as a factor - newer information is generally more relevant for current topics.`;
};
const PROMPTS = {
    // Planning: Generates initial research queries
    planningPrompt: `${getCurrentDateContext()}
You are a strategic research planner with expertise in breaking down complex questions into logical search steps. When given a research topic or question, you'll analyze what specific information is needed and develop a sequential research plan.

    First, identify the core components of the question and any implicit information needs.

    Then provide a numbered list of 3-5 sequential search queries

    Your queries should be:
    - Specific and focused (avoid broad queries that return general information)
    - Written in natural language without Boolean operators (no AND/OR)
    - Designed to progress logically from foundational to specific information

    It's perfectly acceptable to start with exploratory queries to "test the waters" before diving deeper. Initial queries can help establish baseline information or verify assumptions before proceeding to more targeted searches.`,
    // Plan Parsing: Extracts structured data from planning output
    planParsingPrompt: `${getCurrentDateContext()}
    You are a research assistant, you will be provided with a plan of action to research a topic, identify the queries that we should run to search for the topic. Look carefully
    at the general plan provided and identify the key queries that we should run. For dependent queries (those requiring results from earlier searches), leave them for later execution and focus only on the self-contained queries that can be run immediately.`,
    // Content Processing: Identifies relevant information from search results
    rawContentSummarizerPrompt: `${getCurrentDateContext()}
    You are a research extraction specialist. Given a research topic and raw web content, create a thoroughly detailed synthesis as a cohesive narrative that flows naturally between key concepts.

    Extract the most valuable information related to the research topic, including relevant facts, statistics, methodologies, claims, and contextual information. Preserve technical terminology and domain-specific language from the source material.

    Structure your synthesis as a coherent document with natural transitions between ideas. Begin with an introduction that captures the core thesis and purpose of the source material. Develop the narrative by weaving together key findings and their supporting details, ensuring each concept flows logically to the next.

    Integrate specific metrics, dates, and quantitative information within their proper context. Explore how concepts interconnect within the source material, highlighting meaningful relationships between ideas. Acknowledge limitations by noting where information related to aspects of the research topic may be missing or incomplete.

    Important guidelines:
    - Maintain original data context (e.g., "2024 study of 150 patients" rather than generic "recent study")
    - Preserve the integrity of information by keeping details anchored to their original context
    - Create a cohesive narrative rather than disconnected bullet points or lists
    - Use paragraph breaks only when transitioning between major themes

    Critical Reminder: If content lacks a specific aspect of the research topic, clearly state that in the synthesis, and you should NEVER make up information and NEVER rely on external knowledge.`,
    // Completeness Evaluation: Determines if more research is needed
    evaluationPrompt: `${getCurrentDateContext()}
You are a research query optimizer. Your task is to analyze search results against the original research goal and generate follow-up queries to fill in missing information.

    PROCESS:
    1. Identify ALL information explicitly requested in the original research goal
    2. Analyze what specific information has been successfully retrieved in the search results
    3. Identify ALL information gaps between what was requested and what was found
    4. For entity-specific gaps: Create targeted queries for each missing attribute of identified entities
    5. For general knowledge gaps: Create focused queries to find the missing conceptual information

    QUERY GENERATION RULES:
    - IF specific entities were identified AND specific attributes are missing:
    * Create direct queries for each entity-attribute pair (e.g., "LeBron James height")
    - IF general knowledge gaps exist:
    * Create focused queries to address each conceptual gap (e.g., "criteria for ranking basketball players")
    - Queries must be constructed to directly retrieve EXACTLY the missing information
    - Avoid tangential or merely interesting information not required by the original goal
    - Prioritize queries that will yield the most critical missing information first

    OUTPUT FORMAT:
    First, briefly state:
    1. What specific information was found
    2. What specific information is still missing
    3. What type of knowledge gaps exist (entity-specific or general knowledge)

    Then provide up to 5 targeted queries that directly address the identified gaps, ordered by importance. Please consider that you
    need to generate queries that tackle a single goal at a time (searching for A AND B will return bad results). Be specific!`,
    // Evaluation Parsing: Extracts structured data from evaluation output
    evaluationParsingPrompt: `${getCurrentDateContext()}
        You are a research assistant, you will be provided with a some reasoning and a list of queries, and you will need to parse the list into a list of queries.
`,
    // Source Filtering: Selects most relevant sources
    filterPrompt: `${getCurrentDateContext()}
You are a web-search filter assistant. Your task is to filter and rank search results based on the research topic, to help your colleague create a comprehensive, in-depth, and detailed research report.

    You will be given the research topic, and the current search results: their titles, links, and contents. Your goal is to:
    1. Rank ALL results that have ANY relevance to the topic, even if the connection is indirect
    2. Use the following relevance categories:
        - High relevance: Directly addresses the main topic
        - Medium relevance: Contains useful supporting information or related concepts
        - Low relevance: Has tangential or contextual information that might be valuable for background or broader perspective
        - No relevance: Completely unrelated or irrelevant (only these should be excluded)

    Remember:
    - Keep sources that might provide valuable context or supporting information, even if not directly focused on the main topic
    - Sources with partial relevance should be ranked lower rather than excluded
    - Consider how each source might contribute to different aspects of the research report (background, context, examples, etc.)

    At the end of your response, return a LIST of source numbers in order of relevance, including ALL sources that have any potential value (high, medium, or low relevance). Only exclude sources that are completely irrelevant to the topic.`,
    // Source Filtering: Selects most relevant sources
    sourceParsingPrompt: `${getCurrentDateContext()}
    You are a research assistant, you will be provided with a relevance analysis of the search results.

    You need to return a list of source numbers corresponding to the search results, in the order of relevance to the research topic.`,
    // Answer Generation: Creates final research report
    answerPrompt: `${getCurrentDateContext()} 
  You are a senior research analyst tasked with creating a professional, publication-ready report.
    Using ONLY the provided sources, produce a markdown document (at least 5 pages) following these exact requirements:

    # Structure Guidelines

    1. **Abstract**
    - Provide a concise (250-300 words) summary of the entire research
    - State the main research question/objective
    - Highlight key findings and their significance
    - Summarize major conclusions and implications
    - Write in a self-contained manner that can stand alone
    2. **Introduction**
    - Contextualize the research topic
    - State the report's scope and objectives
    - Preview key themes
    3. **Analysis**
    - Group findings into thematic categories
    - Compare/contrast different sources' perspectives
    - Highlight patterns, contradictions, and evidence quality
    - MUST include numbered citations [1][2]... to support all key claims and analysis. Never make factual statements without providing the corresponding citation. Format citations as [n] directly after the relevant text.
    4. **Conclusion**
    - Synthesize overarching insights
    - Discuss practical implications
    - Identify knowledge gaps and research limitations
    - Suggest areas for further investigation
    5. **References**
    - MUST be included in the report to improve the readability and credibility.
    - Include ALL sources in the references section, even those not directly cited in the report
    - Number references consecutively (1, 2, 3...) without gaps

    # Composition Rules
        * Strict source adherence: Every claim must cite sources using [n] notation
        * Analytical depth: Prioritize insight generation over mere information listing
        * Objective framing: Present conflicting evidence without bias
        * Information hierarchy: Use H2 headers for main sections, H3 for subsections
        * Visual clarity: Format tables with | delimiters and alignment markers
        * Citation integrity: Include numbered references with full source metadata

    # Prohibitions
        * Bullet points/listicles
        * Unsupported assertions
        * Informal language
        * Repetitive content
        * Source aggregation without analysis
        * External knowledge beyond provided sources

    # Formatting Requirements

    [Research Topic]

    ## Abstract
    [Abstract content...]

    ## Introduction
    [Cohesive opening paragraph...]
    [More details about the research topic...]
    [General overview of the report...]

    ## [Primary Theme]
    [Detailed analysis with integrated citations [1][3]. Compare multiple sources...]
    [Additional details)]

    ### [Subtheme]
    [Specific insights...]

    ### [Subtheme Where Table or Chart is Helpful]

    [Table Analysis in full paragraphs, avoid bullet points...]

    *Table X: Caption...[citation] (MUST be put above the table and seperated by a blank line)*

    | Comparison Aspect | Source A [2] | Source B [4] |
    |--------------------|--------------|--------------|
    | Key metric         | xx%          | xx%          |
    

    [Chart Analysis in full paragraphs, avoid bullet points...]
    \`\`\`mermaid
    %% Choose one: flowchart, sequenceDiagram, classDiagram, stateDiagram, gantt, pie, xychart-beta
    %% DO NOT PUT TITLE in MERMAID CODE! titles should be put in THE FIGURE CAPTION
    %% To reduce the rendering difficulty, avoid multiple series, stacked charts, or complex features. 
    %% DATA ARRAYS and AXIS RANGES MUST CONTAIN NUMBERS ONLY [10, 20, 30], e.g. for units like heights, use inches (74) instead of feet inches (6'2")
    %% NEVER include values that are null, n/a, or undefined in the data series.
    [CHART_TYPE]
        %% For xy/bar charts:
        xlabel "[X_AXIS_LABEL]"
        ylabel "[Y_AXIS_LABEL]"

        %% For data series, use one of these formats:
        %% Format 1 - Simple bar/line:
        "[LABEL1]" [VALUE1]
        "[LABEL2]" [VALUE2]

        %% Format 2 - Array style (xychart-beta):
        %% For measurements with special units (feet/inches, degrees°, minutes', arc-seconds''), you MUST use double single-quotes ('') to escape, e.g., ["6'2''", "45°2''", "23'45''"] NOT ["6'2\"", "45°2\""]
        xychart-beta
        x-axis "[X_AXIS_LABEL]" ["Label1", "Label2", "Label3"]
        y-axis "[Y_AXIS_LABEL]" MIN_VALUE --> MAX_VALUE
        bar [value1, value2, value3]
    \`\`\`
    *Figure X: Caption...[citation] (MUST be put below the figure and seperated by a blank line)*
    
    ## Conclusion
    [Synthesized takeaways...] [5][6]
    [Explicit limitations discussion...]
    [Overall summary with 5/6 paragraphs]

    ### References
    1. [Title of Source](https://url-of-source)
    2. [Complete Source Title](https://example.com/full-url)

    # Reference Rules
    * Number all citations consecutively: [1], [2], [3], etc.
    * Include ALL sources in the reference list, whether cited in the report or not
    * No gaps allowed in the reference numbering
    * Format each reference as: [Title](URL)
    * For consecutive citations in text, use ranges: [1-3] instead of [1][2][3]
    
    # Example
    If your research report mentioned sources 1, 3, list ALL of them in references including 2 to avoid gaps:
    1. [First Source](https://example.com/first)
    2. [Second Source](https://example.com/second)
    3. [Third Source](https://example.com/third)
    
    Begin by analyzing source relationships before writing. Verify all citations match reference numbers. Maintain academic tone throughout.
    While you think, consider that the sections you need to write should be 3/4 paragraphs each. We do not want to end up with a list of bullet points. Or very short sections.
    Think like a writer, you are optimizing coherence and readability.
    In terms of content is like you are writing the chapter of a book, with a few headings and lots of paragraphs. Plan to write at least 3 paragraphs for each heading you want to
    include in the report.`
};
}}),
"[project]/apps/web/src/lib/deep-research/index.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Deep Research Pipeline Implementation
 */ __turbopack_context__.s({
    "DeepResearchPipeline": (()=>DeepResearchPipeline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$parse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/parse.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$deep$2d$research$2f$classes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/deep-research/classes.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$deep$2d$research$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/deep-research/config.ts [app-route] (ecmascript)");
;
;
;
;
;
class DeepResearchPipeline {
    namespace;
    queryOptions;
    modelConfig;
    researchConfig;
    prompts;
    currentSpending = 0;
    researchPlanSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        queries: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().array().describe("A list of search queries to thoroughly research the topic")
    });
    sourceListSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        sources: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number()).describe("List of source indices to keep")
    });
    constructor(namespace, { researchConfig = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$deep$2d$research$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESEARCH_CONFIG"], prompts = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$deep$2d$research$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PROMPTS"], modelConfig, queryOptions, ...options }){
        this.namespace = namespace;
        this.modelConfig = modelConfig;
        this.queryOptions = queryOptions;
        this.researchConfig = researchConfig;
        this.prompts = prompts;
        // Override config with options
        if (options.maxQueries !== undefined) {
            this.researchConfig.maxQueries = options.maxQueries;
        }
        if (options.maxSources !== undefined) {
            this.researchConfig.maxSources = options.maxSources;
        }
        if (options.maxCompletionTokens !== undefined) {
            this.researchConfig.maxTokens = options.maxCompletionTokens;
        }
    }
    /**
   * Generate initial research queries based on the topic
   *
   * @param topic The research topic
   * @returns List of search queries
   */ async generateInitialQueries({ topic }) {
        let allQueries = await this.generateResearchQueries(topic);
        if (this.researchConfig.maxQueries > 0) {
            allQueries = allQueries.slice(0, this.researchConfig.maxQueries);
        }
        console.log(`\n\n\x1b[36m🔍 Initial queries: ${allQueries}\x1b[0m`);
        if (allQueries.length === 0) {
            console.error("ERROR: No initial queries generated");
            return [];
        }
        return allQueries;
    }
    /**
   * Generate research queries for a given topic using LLM
   *
   * @param topic The research topic
   * @returns List of search queries
   */ async generateResearchQueries(topic) {
        const parsedPlan = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateObject"])({
            model: this.modelConfig.json,
            system: this.prompts.planningPrompt,
            prompt: `Research Topic: ${topic}`,
            schema: this.researchPlanSchema
        });
        console.log(`\x1b[35m📋 Research queries generated: \n - ${parsedPlan.object.queries.join("\n - ")}\x1b[0m`);
        return parsedPlan.object.queries;
    }
    /**
   * Perform a single web search
   */ async webSearch(query) {
        console.log(`\x1b[34m🔎 Perform web search with query: ${query}\x1b[0m`);
        // Truncate long queries to avoid issues (like in the Python version)
        if (query.length > 400) {
            query = query.substring(0, 400);
            console.log(`\x1b[33m⚠️ Truncated query to 400 characters: ${query}\x1b[0m`);
        }
        const searchResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$parse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryVectorStore"])(this.namespace, {
            ...this.queryOptions ?? {
                topK: 10
            },
            query
        });
        const results = (searchResults?.results ?? []).map((result)=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$deep$2d$research$2f$classes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SearchResult"]({
                id: result.id,
                metadata: result.metadata,
                content: result.text
            });
        });
        console.log(`\x1b[32m📊 Web Search Responded with ${results.length} results\x1b[0m`);
        // Process and summarize raw content if available
        const processedResults = await this.processSearchResultsWithSummarization(query, results);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$deep$2d$research$2f$classes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SearchResults"](processedResults);
    }
    /**
   * Process search results with content summarization
   *
   * @param query The search query
   * @param results The search results to process
   * @returns Processed search results with summarized content
   */ async processSearchResultsWithSummarization(query, results) {
        // Create tasks for summarization
        const summarizationTasks = [];
        const resultInfo = [];
        for (const result of results){
            if (!result.content) {
                continue;
            }
            // Create a task for summarization
            const task = this._summarize_content_async({
                result,
                query
            });
            summarizationTasks.push(task);
            resultInfo.push(result);
        }
        // Wait for all summarization tasks to complete
        const summarizedContents = await Promise.all(summarizationTasks);
        // Combine results with summarized content
        const formattedResults = [];
        for(let i = 0; i < resultInfo.length; i++){
            const result = resultInfo[i];
            const summarizedContent = summarizedContents[i];
            formattedResults.push(new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$deep$2d$research$2f$classes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SearchResult"]({
                id: result.id,
                metadata: result.metadata,
                content: summarizedContent
            }));
        }
        return formattedResults;
    }
    /**
   * Summarize content asynchronously using the LLM
   *
   * @param props The props object containing searchResult and query
   * @returns The summarized content
   */ async _summarize_content_async(props) {
        console.log(`\x1b[36m📝 Summarizing content from ID: ${props.result.id}\x1b[0m`);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
            model: this.modelConfig.summary,
            system: this.prompts.rawContentSummarizerPrompt,
            prompt: `<Raw Content>${props.result.content}</Raw Content>\n\n<Research Topic>${props.query}</Research Topic>`
        });
        return result.text;
    }
    /**
   * Execute searches for all queries in parallel
   *
   * @param queries List of search queries
   * @returns Combined search results
   */ async performSearch({ queries }) {
        const tasks = queries.map(async (query)=>{
            // Perform search
            const results = await this.webSearch(query);
            return results;
        });
        const resultsList = await Promise.all(tasks);
        let combinedResults = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$deep$2d$research$2f$classes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SearchResults"]([]);
        for (const results of resultsList){
            combinedResults = combinedResults.add(results);
        }
        const combinedResultsDedup = combinedResults.dedup();
        console.log(`Search complete, found ${combinedResultsDedup.results.length} results after deduplication`);
        return combinedResultsDedup;
    }
    /**
   * Evaluate if the current search results are sufficient or if more research is needed
   *
   * @param topic The research topic
   * @param results Current search results
   * @param queries List of queries already used
   * @returns List of additional queries needed or empty list if research is complete
   */ async evaluateResearchCompleteness(topic, results, queries) {
        const formattedResults = results.toString();
        // context length issue here!
        const evaluation = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
            model: this.modelConfig.planning,
            system: this.prompts.evaluationPrompt,
            prompt: `<Research Topic>${topic}</Research Topic>\n\n` + `<Search Queries Used>${queries}</Search Queries Used>\n\n` + `<Current Search Results>${formattedResults}</Current Search Results>`
        });
        // console.log(
        //   "\x1b[43m🔄 ================================================\x1b[0m\n\n"
        // );
        // console.log(`\x1b[36m📝 Evaluation:\n\n ${evaluation.text}\x1b[0m`);
        const parsedEvaluation = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateObject"])({
            model: this.modelConfig.json,
            system: this.prompts.evaluationParsingPrompt,
            prompt: `Evaluation to be parsed: ${evaluation.text}`,
            schema: this.researchPlanSchema
        });
        return parsedEvaluation.object.queries;
    }
    /**
   * Process search results by deduplicating and filtering
   *
   * @param topic The research topic
   * @param results Search results to process
   * @returns Filtered search results
   */ async processSearchResults({ topic, results }) {
        // Deduplicate results
        results = results.dedup();
        console.log(`Search complete, found ${results.results.length} results after deduplication`);
        return results;
    }
    /**
   * Filter search results based on relevance to the topic
   *
   * @param topic The research topic
   * @param results Search results to filter
   * @returns Tuple of (filtered results, source list)
   */ async filterResults({ topic, results }) {
        const formattedResults = results.toString();
        const filterResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
            model: this.modelConfig.planning,
            system: this.prompts.filterPrompt,
            prompt: `<Research Topic>${topic}</Research Topic>\n\n<Current Search Results>${formattedResults}</Current Search Results>`
        });
        // console.log(`\x1b[36m📝 Filter response: ${filterResponse.text}\x1b[0m`);
        const parsedFilter = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateObject"])({
            model: this.modelConfig.json,
            system: this.prompts.sourceParsingPrompt,
            prompt: `Filter response to be parsed: ${filterResponse.text}`,
            schema: this.sourceListSchema
        });
        const sources = parsedFilter.object.sources;
        console.log(`\x1b[36m📊 Filtered sources: ${sources}\x1b[0m`);
        // Limit sources if needed
        let limitedSources = sources;
        if (this.researchConfig.maxSources > 0) {
            limitedSources = sources.slice(0, this.researchConfig.maxSources);
        }
        // Filter the results based on the source list
        const filteredResults = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$deep$2d$research$2f$classes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SearchResults"](limitedSources.filter((i)=>i > 0 && i <= results.results.length).map((i)=>results.results[i - 1]));
        return {
            filteredResults,
            sourceIndices: limitedSources
        };
    }
    /**
   * Conduct iterative research within budget to refine results
   *
   * @param topic The research topic
   * @param initialResults Results from initial search
   * @param allQueries List of all queries used so far
   * @returns Tuple of (final results, all queries used)
   */ async conductIterativeResearch({ topic, initialResults, allQueries }) {
        let results = initialResults;
        for(let i = 0; i < this.researchConfig.budget; i++){
            // Evaluate if more research is needed
            const additionalQueries = await this.evaluateResearchCompleteness(topic, results, allQueries);
            // Exit if research is complete
            if (additionalQueries.length === 0) {
                console.log("\x1b[33m✅ No need for additional research\x1b[0m");
                break;
            }
            // Limit the number of queries if needed
            let queriesToUse = additionalQueries;
            if (this.researchConfig.maxQueries > 0) {
                queriesToUse = additionalQueries.slice(0, this.researchConfig.maxQueries);
            }
            // console.log(
            //   "\x1b[43m🔄 ================================================\x1b[0m\n\n"
            // );
            console.log(`\x1b[36m📋 Additional queries from evaluation parser: ${queriesToUse}\n\n\x1b[0m`);
            // console.log(
            //   "\x1b[43m🔄 ================================================\x1b[0m\n\n"
            // );
            // Expand research with new queries
            const newResults = await this.performSearch({
                queries: queriesToUse
            });
            results = results.add(newResults);
            allQueries.push(...queriesToUse);
        }
        return {
            finalSearchResults: results,
            queriesUsed: allQueries
        };
    }
    /**
   * Run the complete research pipeline
   *
   * @param topic The research topic
   * @returns The research answer
   */ async runResearch(topic) {
        console.log(`\x1b[36m🔍 Researching topic: ${topic}\x1b[0m`);
        // Step 1: Generate initial queries
        const initialQueries = await this.generateInitialQueries({
            topic
        });
        // Step 2: Perform initial search
        const initialResults = await this.performSearch({
            queries: initialQueries
        });
        // Step 3: Conduct iterative research
        const { finalSearchResults, queriesUsed } = await this.conductIterativeResearch({
            topic,
            initialResults,
            allQueries: initialQueries
        });
        // Step 4: Process search results
        const processedResults = await this.processSearchResults({
            topic,
            results: finalSearchResults
        });
        // Step 4.5: Filter results based on relevance
        const { filteredResults, sourceIndices } = await this.filterResults({
            topic,
            results: processedResults
        });
        console.log(`\x1b[32m📊 Filtered results: ${filteredResults.results.length} sources kept\x1b[0m`);
        // Step 5: Generate research answer with feedback loop
        const answer = this.generateResearchAnswer({
            topic,
            results: filteredResults
        });
        return answer;
    }
    /**
   * Generate a comprehensive answer to the research topic based on the search results
   *
   * @param topic The research topic
   * @param results Filtered search results to use for answer generation
   * @returns Detailed research answer as a string
   */ generateResearchAnswer({ topic, results }) {
        const formattedResults = results.toString();
        const enhancedModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["wrapLanguageModel"])({
            model: this.modelConfig.answer,
            middleware: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extractReasoningMiddleware"])({
                tagName: "think"
            })
        });
        const answer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
            model: enhancedModel,
            system: this.prompts.answerPrompt,
            prompt: `Research Topic: ${topic}\n\nSearch Results:\n${formattedResults}`,
            maxTokens: this.researchConfig.maxTokens
        });
        return answer;
    }
}
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
"[project]/apps/web/src/schemas/api/query.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "baseQueryVectorStoreSchema": (()=>baseQueryVectorStoreSchema),
    "queryVectorStoreSchema": (()=>queryVectorStoreSchema),
    "refineRereankLimit": (()=>refineRereankLimit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/zod/index.ts [app-route] (ecmascript)");
;
const baseQueryVectorStoreSchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
    query: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().describe("The query to search for."),
    topK: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].number().min(1).max(100).optional().default(10).describe("The number of results to fetch from the vector store. Defaults to `10`."),
    rerank: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].boolean().optional().default(true).describe("Whether to rerank the results. Defaults to `true`."),
    rerankLimit: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].number().min(1).max(100).optional().describe("The number of results to return after reranking. Defaults to `topK`."),
    filter: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].record(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].any()).optional().describe("A filter to apply to the results."),
    minScore: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].number().min(0).max(1).optional().describe("The minimum score to return."),
    includeRelationships: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].boolean().optional().default(false).describe("Whether to include relationships in the results. Defaults to `false`."),
    includeMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].boolean().optional().default(true).describe("Whether to include metadata in the results. Defaults to `true`.")
});
const refineRereankLimit = (schema)=>{
    return schema.superRefine((val, ctx)=>{
        if (val.rerankLimit && val.rerankLimit > val.topK) {
            ctx.addIssue({
                path: [
                    "rerankLimit"
                ],
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].ZodIssueCode.too_big,
                message: "rerankLimit cannot be larger than topK",
                inclusive: true,
                type: "number",
                maximum: val.topK
            });
            return false;
        }
        return true;
    });
};
const queryVectorStoreSchema = refineRereankLimit(baseQueryVectorStoreSchema);
}}),
"[project]/apps/web/src/app/api/(internal-api)/chat/schema.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "chatSchema": (()=>chatSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/prompts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/zod/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$schemas$2f$api$2f$query$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/schemas/api/query.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
;
;
;
;
const chatSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$schemas$2f$api$2f$query$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineRereankLimit"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$schemas$2f$api$2f$query$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["baseQueryVectorStoreSchema"].omit({
    query: true
}).extend({
    systemPrompt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().optional().default(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_SYSTEM_PROMPT"].compile()).describe("The system prompt to use for the chat. Defaults to the default system prompt."),
    messages: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["coreMessageSchema"]),
    temperature: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].number().optional(),
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$zod$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enum([
        "normal",
        "agentic",
        "deepResearch"
    ]).optional()
}));
}}),
"[project]/apps/web/src/app/api/(internal-api)/chat/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST),
    "maxDuration": (()=>maxDuration),
    "preferredRegion": (()=>preferredRegion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/agentic/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$handler$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/handler/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$handler$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/handler/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$deep$2d$research$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/deep-research/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$llm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/llm.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/prompts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$parse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vector-store/parse.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$functions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/functions/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/db/src/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/db/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$api$2f28$internal$2d$api$292f$chat$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/api/(internal-api)/chat/schema.ts [app-route] (ecmascript)");
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
const incrementUsage = (namespaceId, queries)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$functions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["waitUntil"])((async ()=>{
        // track usage
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].namespace.update({
            where: {
                id: namespaceId
            },
            data: {
                totalPlaygroundUsage: {
                    increment: 1
                },
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
const preferredRegion = "iad1"; // make this closer to the DB
const maxDuration = 60;
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$handler$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAuthApiHandler"])(async ({ req, namespace, tenantId, headers })=>{
    const body = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$api$2f28$internal$2d$api$292f$chat$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chatSchema"].parseAsync(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseRequestBody"])(req));
    const messagesWithoutQuery = body.messages.slice(0, -1);
    const lastMessage = body.messages.length > 0 ? body.messages[body.messages.length - 1].content : null;
    if (!lastMessage) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
            code: "bad_request",
            message: "Messages must contain at least one message"
        });
    }
    // TODO: pass namespace config
    const languageModel = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$llm$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamespaceLanguageModel"])();
    let query;
    if (messagesWithoutQuery.length === 0 || body.mode === "agentic") {
        query = lastMessage;
    } else {
        // limit messagesWithoutQuery to the last 10 messages
        const messagesToCondense = messagesWithoutQuery.slice(-10);
        // we need to condense the messages + last message into a single query
        query = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
            model: languageModel,
            prompt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONDENSE_SYSTEM_PROMPT"].compile({
                question: lastMessage,
                chatHistory: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONDENSE_USER_PROMPT"].compile({
                    query: lastMessage,
                    chatHistory: messagesToCondense.map((m)=>`- ${m.role === "user" ? "Human" : "Assistant"}: ${m.content}`).join("\n\n")
                })
            })
        })).text;
    }
    if (body.mode === "deepResearch") {
        const pipeline = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$deep$2d$research$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DeepResearchPipeline"](namespace, {
            modelConfig: {
                json: languageModel,
                planning: languageModel,
                summary: languageModel,
                answer: languageModel
            },
            queryOptions: {
                tenantId,
                topK: body.topK,
                minScore: body.minScore,
                filter: body.filter,
                includeMetadata: body.includeMetadata,
                includeRelationships: body.includeRelationships,
                rerankLimit: body.rerankLimit,
                rerank: body.rerank
            }
        });
        const answer = await pipeline.runResearch(query);
        incrementUsage(namespace.id, 1);
        return answer.toDataStreamResponse({
            headers
        });
    }
    if (body.mode === "agentic") {
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$agentic$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(namespace, {
            model: languageModel,
            queryOptions: {
                tenantId,
                topK: body.topK,
                minScore: body.minScore,
                filter: body.filter,
                includeMetadata: body.includeMetadata,
                includeRelationships: body.includeRelationships,
                rerankLimit: body.rerankLimit,
                rerank: body.rerank
            },
            systemPrompt: body.systemPrompt,
            temperature: body.temperature,
            messagesWithoutQuery,
            lastMessage,
            afterQueries: (totalQueries)=>{
                incrementUsage(namespace.id, totalQueries);
            }
        });
        return result;
    }
    // TODO: track the usage
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vector$2d$store$2f$parse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryVectorStore"])(namespace, {
        query,
        tenantId,
        topK: body.topK,
        minScore: body.minScore,
        filter: body.filter,
        includeMetadata: body.includeMetadata,
        includeRelationships: body.includeRelationships,
        rerankLimit: body.rerankLimit,
        rerank: body.rerank
    });
    if (!data) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AgentsetApiError"]({
            code: "internal_server_error",
            message: "Failed to parse chunks"
        });
    }
    const newMessages = [
        ...messagesWithoutQuery,
        {
            role: "user",
            content: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEW_MESSAGE_PROMPT"].compile({
                chunks: data.results.map((chunk, idx)=>`[${idx + 1}]: ${chunk.text}`).join("\n\n"),
                query: lastMessage
            })
        }
    ];
    incrementUsage(namespace.id, 1);
    // add the sources to the stream
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDataStreamResponse"])({
        execute: (dataStream)=>{
            const messageStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
                model: languageModel,
                system: body.systemPrompt,
                messages: newMessages,
                temperature: body.temperature,
                onError: (error)=>{
                    console.error(error);
                }
            });
            dataStream.writeMessageAnnotation({
                type: "agentset_sources",
                value: data
            });
            messageStream.mergeIntoDataStream(dataStream);
        },
        headers
    });
});
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__4b2bfa2b._.js.map