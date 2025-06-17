import { filePayloadSchema, managedFilePayloadSchema, textPayloadSchema, } from "../ingest-payload";
import z from "../zod";
// remove name from the payload since it's a separate field
export var documentPayloadSchema = z
    .discriminatedUnion("type", [
    textPayloadSchema.omit({ name: true }),
    filePayloadSchema.omit({ name: true }),
    managedFilePayloadSchema.omit({ name: true }),
])
    .describe("The source of the document.");
export var documentPropertiesSchema = z
    .object({
    fileSize: z.number().describe("The size of the file in bytes."),
    mimeType: z
        .string()
        .nullable()
        .default(null)
        .describe("The MIME type of the file."),
})
    .describe("The properties of the document.");
