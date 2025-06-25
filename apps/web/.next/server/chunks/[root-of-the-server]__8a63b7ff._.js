module.exports = {

"[project]/apps/web/.next-internal/server/app/api/uploadthing/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
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
"[project]/apps/web/src/lib/uploadthing.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ourFileRouter": (()=>ourFileRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/uploadthing/next/index.js [app-route] (ecmascript) <locals>");
;
const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUploadthing"])();
const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    imageUploader: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 1
        }
    })// Set permissions and file types for this FileRoute
    .middleware(async ({ req })=>{
        // This code runs on your server before upload
        // You can add authentication here if needed
        return {
            userId: "user"
        }; // Whatever is returned here is accessible in onUploadComplete as `metadata`
    }).onUploadComplete(async ({ metadata, file })=>{
        // This code RUNS ON YOUR SERVER after upload
        console.log("Upload complete for userId:", metadata.userId);
        console.log("file url", file.url);
        // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
        return {
            uploadedBy: metadata.userId,
            url: file.url
        };
    }),
    // Multiple file upload route
    multipleImageUploader: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 10
        }
    }).middleware(async ({ req })=>{
        return {
            userId: "user"
        };
    }).onUploadComplete(async ({ metadata, file })=>{
        console.log("Upload complete for userId:", metadata.userId);
        console.log("file url", file.url);
        return {
            uploadedBy: metadata.userId,
            url: file.url
        };
    }),
    // Document uploader
    documentUploader: f({
        pdf: {
            maxFileSize: "16MB",
            maxFileCount: 1
        },
        text: {
            maxFileSize: "4MB",
            maxFileCount: 1
        }
    }).middleware(async ({ req })=>{
        return {
            userId: "user"
        };
    }).onUploadComplete(async ({ metadata, file })=>{
        console.log("Upload complete for userId:", metadata.userId);
        console.log("file url", file.url);
        return {
            uploadedBy: metadata.userId,
            url: file.url
        };
    })
};
}}),
"[project]/apps/web/src/app/api/uploadthing/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/uploadthing/next/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$uploadthing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/uploadthing.ts [app-route] (ecmascript)");
;
;
const { GET, POST } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRouteHandler"])({
    router: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$uploadthing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ourFileRouter"],
    config: {
    }
});
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__8a63b7ff._.js.map