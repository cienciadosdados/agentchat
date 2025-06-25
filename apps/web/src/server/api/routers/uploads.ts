import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { extname } from "path";

// Implementação simples para substituir o pacote filenamize
function filenamize(input: string): string {
  return input
    .replace(/[^a-zA-Z0-9_\-]/g, '_') // Substitui caracteres não alfanuméricos por underscores
    .replace(/_{2,}/g, '_') // Remove underscores duplicados
    .replace(/^_|_$/g, '') // Remove underscores no início e fim
    .toLowerCase();
}

import { getNamespaceByUser } from "../auth";

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
  ".xml",
];

// Helper function to generate upload URL for Uploadthing
const presignUploadUrl = async (key: string, contentType: string, fileSize: number) => {
  return {
    data: `/api/uploadthing?slug=documentUploader`,
    error: null,
  };
};

export const uploadsRouter = createTRPCRouter({
  getPresignedUrl: protectedProcedure
    .input(
      z.object({
        namespaceId: z.string(),
        fileName: z.string(),
        contentType: z.string(),
        fileSize: z.number().min(1).max(1000000000),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const ext = extname(input.fileName);
      const filename = filenamize(input.fileName.replace(ext, ""));

      if (!supportedExtensions.includes(ext)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Unsupported file type",
        });
      }

      const ns = await getNamespaceByUser(ctx, { id: input.namespaceId });

      if (!ns) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Namespace not found",
        });
      }

      const key = `namespaces/${ns.id}/${filename}${ext}`;
      const url = await presignUploadUrl(key, input.contentType, input.fileSize);

      return {
        url: url.data,
        key,
      };
    }),
  getPresignedUrls: protectedProcedure
    .input(
      z.object({
        namespaceId: z.string(),
        files: z
          .array(
            z.object({
              fileName: z.string(),
              contentType: z.string(),
              fileSize: z.number().min(1).max(1000000000),
            }),
          )
          .min(1, { message: "At least one file is required" })
          .max(100, { message: "Maximum 100 files" }),
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

      const preparedFiles = input.files.map((file) => {
        const ext = extname(file.fileName);
        const filename = filenamize(file.fileName.replace(ext, ""));

        return {
          ext,
          contentType: file.contentType,
          fileSize: file.fileSize,
          key: `namespaces/${ns.id}/${filename}${ext}`,
        };
      });

      if (
        preparedFiles.some((file) => !supportedExtensions.includes(file.ext))
      ) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Unsupported file type",
        });
      }

      const urls = await Promise.all(
        preparedFiles.map(async (file) => {
          const urlResult = await presignUploadUrl(file.key, file.contentType, file.fileSize);

          return {
            url: urlResult.data,
            key: file.key,
          };
        }),
      );

      return urls;
    }),
});
