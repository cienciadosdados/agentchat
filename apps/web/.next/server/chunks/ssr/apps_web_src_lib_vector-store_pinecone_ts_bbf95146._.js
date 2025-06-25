module.exports = {

"[project]/apps/web/src/lib/vector-store/pinecone.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Pinecone": (()=>Pinecone)
});
class Pinecone {
    apiKey;
    indexHost;
    namespace;
    constructor({ apiKey, indexHost, namespace }){
        this.apiKey = apiKey;
        this.indexHost = indexHost;
        this.namespace = namespace;
    }
    async makeRequest(method, path, body, { includeBody = true } = {}) {
        const combinedBody = {
            namespace: this.namespace,
            ...body
        };
        let finalPath = path;
        let finalBody = undefined;
        if (includeBody) {
            if (method === "GET") {
                const cleanObject = Object.fromEntries(Object.entries(combinedBody).filter(([_, value])=>value !== undefined));
                finalPath = `${path}?${new URLSearchParams(cleanObject).toString()}`;
            } else {
                finalBody = JSON.stringify(combinedBody);
            }
        }
        const response = await fetch(`${this.indexHost}${finalPath}`, {
            method,
            headers: {
                "Api-Key": this.apiKey,
                "Content-Type": "application/json",
                "X-Pinecone-Api-Version": "2025-01"
            },
            body: finalBody
        });
        const json = await response.json();
        return json;
    }
    async list(params = {}) {
        return this.makeRequest("GET", "/vectors/list", params);
    }
    async fetch(ids) {
        return this.makeRequest("GET", `/vectors/fetch?namespace=${this.namespace}&${ids.map((id)=>`ids=${encodeURIComponent(id)}`).join("&")}`, undefined, {
            includeBody: false
        });
    }
    async query(params) {
        return this.makeRequest("POST", `/query`, params);
    }
    async upsert(chunks) {
        return this.makeRequest("POST", `/vectors/upsert`, {
            vectors: chunks.map((chunk)=>({
                    id: chunk.id,
                    values: chunk.vector,
                    ...chunk.metadata && {
                        metadata: chunk.metadata
                    }
                }))
        });
    }
    async delete(ids) {
        return this.makeRequest("POST", `/vectors/delete`, {
            ids
        });
    }
    async deleteNamespace() {
        return this.makeRequest("POST", `/vectors/delete`, {
            deleteAll: true
        });
    }
    async getDimensions() {
        const response = await this.makeRequest("GET", "/describe_index_stats", undefined, {
            includeBody: false
        });
        return response.dimension;
    }
}
}}),

};

//# sourceMappingURL=apps_web_src_lib_vector-store_pinecone_ts_bbf95146._.js.map