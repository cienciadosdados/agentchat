import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { getNamespaceByUser } from "../auth";

const connectorSchema = z.object({
  connectorProvider: z.enum(["s3", "google_drive", "notion", "dropbox", "onedrive"]),
  clientId: z.string().optional(),
  clientSecret: z.string().optional(),
  accessKey: z.string().optional(),
  secretKey: z.string().optional(),
});

export const connectorsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        namespaceId: z.string(),
        connector: connectorSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const ns = await getNamespaceByUser(ctx, { id: input.namespaceId });

      if (!ns) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Namespace not found",
        });
      }

      // TODO: Implementar lógica real de criação de conectores
      // Por enquanto, apenas simula a criação
      const connector = {
        id: `conn_${Date.now()}`,
        name: getConnectorName(input.connector.connectorProvider),
        type: input.connector.connectorProvider,
        status: "connected" as const,
        lastSync: new Date().toISOString(),
        namespaceId: input.namespaceId,
      };

      // TODO: Salvar no banco de dados
      console.log("Creating connector:", connector);

      return connector;
    }),

  list: protectedProcedure
    .input(
      z.object({
        namespaceId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const ns = await getNamespaceByUser(ctx, { id: input.namespaceId });

      if (!ns) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Namespace not found",
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
          lastSync: "2024-03-20T10:00:00Z",
        },
        {
          id: "2",
          name: "AWS S3",
          type: "s3",
          status: "connected",
          lastSync: "2024-03-19T15:30:00Z",
        },
        {
          id: "3",
          name: "Dropbox",
          type: "dropbox",
          status: "disconnected",
          lastSync: "2024-03-18T12:00:00Z",
        },
      ];
    }),

  delete: protectedProcedure
    .input(
      z.object({
        namespaceId: z.string(),
        connectorId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const ns = await getNamespaceByUser(ctx, { id: input.namespaceId });

      if (!ns) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Namespace not found",
        });
      }

      // TODO: Implementar lógica real de exclusão
      console.log("Deleting connector:", input.connectorId);

      return { success: true };
    }),
});

function getConnectorName(provider: string): string {
  const names: Record<string, string> = {
    s3: "AWS S3",
    google_drive: "Google Drive",
    notion: "Notion",
    dropbox: "Dropbox",
    onedrive: "OneDrive",
  };
  return names[provider] || provider;
}
