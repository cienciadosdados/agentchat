import z from "../zod";
export var googleEmbeddingModelEnum = z.enum(["text-embedding-004"]);
export var GoogleEmbeddingConfigSchema = z
    .object({
    provider: z.literal("GOOGLE"),
    model: googleEmbeddingModelEnum,
    apiKey: z.string(),
})
    .openapi({
    title: "Google Embedding Config",
});
