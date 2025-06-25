import { env } from "@/env";
import { metadataDictToNode } from "@llamaindex/core/vector-store";
import { TextNode } from "llamaindex";

import { formatResults } from "../vector-store/parse";

export type KeywordSearchChunk = {
  id: string;
  text: string;
  namespaceId: string;
  tenantId?: string | null;
  documentId: string;
  metadata: string;
};

const topLevelMetadataKeys = [
  "namespaceId",
  "documentId",
  "tenantId",
] satisfies (keyof KeywordSearchChunk)[];

const safeParse = (json: string) => {
  try {
    return JSON.parse(json);
  } catch (error) {
    return null;
  }
};

export class KeywordStore {
  constructor(
    private readonly namespaceId: string,
    private readonly tenantId?: string,
  ) {}

  private encodeId(id: string) {
    return id.replaceAll("#", "_");
  }

  private decodeId(id: string) {
    return id.replaceAll("_", "#");
  }

  async search(
    query: string,
    {
      documentId,
      page = 1,
      limit = 10,
      includeMetadata,
      includeRelationships,
    }: {
      documentId?: string;
      page?: number;
      limit?: number;
      includeMetadata?: boolean;
      includeRelationships?: boolean;
    } = {},
  ) {
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
      results: [],
    };
  }

  async listIds({
    page = 1,
    limit = 1000,
    documentId,
  }: {
    page?: number;
    limit?: number;
    documentId?: string;
  } = {}) {
    // Temporary implementation - returns empty array
    console.log("KeywordStore.listIds called - returning empty array (Azure Search disabled)");
    
    return {
      total: 0,
      totalPages: 1,
      perPage: limit,
      currentPage: page,
      hasNextPage: false,
      hasPreviousPage: false,
      ids: [],
    };
  }

  async deleteByIds(ids: string[]) {
    // No-op implementation
    console.log("KeywordStore.deleteByIds called - no-op (Azure Search disabled):", ids.length, "ids");
  }

  async upsert(chunks: KeywordSearchChunk[]) {
    // No-op implementation
    console.log("KeywordStore.upsert called - no-op (Azure Search disabled):", chunks.length, "chunks");
  }
}
