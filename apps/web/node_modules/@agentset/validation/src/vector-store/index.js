import z from "../zod";
import { PineconeVectorStoreConfigSchema } from "./pinecone";
export var VectorStoreSchema = z
    .discriminatedUnion("provider", [PineconeVectorStoreConfigSchema])
    .describe("The vector store config. If not provided, our managed vector store will be used. Note: You can't change the vector store config after the namespace is created.");
export { PineconeVectorStoreConfigSchema } from "./pinecone";
