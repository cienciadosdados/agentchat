import type { TriggerIngestionJobBody } from "@/lib/workflow";
import { chunkArray } from "@/lib/functions";
import { env } from "@/env";
import { getBaseUrl } from "@/lib/utils";

import type { Document, Prisma } from "@agentset/db";
import { db, DocumentStatus, IngestJobStatus } from "@agentset/db";

const BATCH_SIZE = 30;

// Função para processar ingestão em modo de desenvolvimento
export async function processIngestionJobDev(jobId: string) {
  console.log(`[DEV] Iniciando processamento do job: ${jobId}`);

  const ingestionJob = await db.ingestJob.findUnique({
    where: { id: jobId },
    include: { namespace: true },
  });

  if (!ingestionJob) {
    throw new Error("Ingestion job not found");
  }

  // Atualizar status para PRE_PROCESSING
  await db.ingestJob.update({
    where: { id: ingestionJob.id },
    data: {
      status: IngestJobStatus.PRE_PROCESSING,
      preProcessingAt: new Date(),
    },
  });

  const commonData = {
    status: DocumentStatus.QUEUED,
    tenantId: ingestionJob.tenantId,
    ingestJobId: ingestionJob.id,
  } satisfies Partial<Prisma.DocumentCreateArgs["data"]>;

  let documents: Pick<Document, "id">[] = [];

  // Processar diferentes tipos de payload
  if (
    ingestionJob.payload.type === "FILE" ||
    ingestionJob.payload.type === "TEXT" ||
    ingestionJob.payload.type === "MANAGED_FILE"
  ) {
    if (ingestionJob.payload.type === "TEXT") {
      const { text } = ingestionJob.payload;
      const document = await db.document.create({
        data: {
          ...commonData,
          name: ingestionJob.payload.name,
          source: {
            type: "TEXT",
            text,
          },
          totalCharacters: text.length,
        },
        select: { id: true },
      });
      documents = [document];
    }

    if (ingestionJob.payload.type === "FILE") {
      const { fileUrl } = ingestionJob.payload;
      const document = await db.document.create({
        data: {
          ...commonData,
          name: ingestionJob.payload.name,
          source: {
            type: "FILE",
            fileUrl: fileUrl,
          },
        },
        select: { id: true },
      });
      documents = [document];
    }

    if (ingestionJob.payload.type === "MANAGED_FILE") {
      const { key } = ingestionJob.payload;
      const document = await db.document.create({
        data: {
          ...commonData,
          name: ingestionJob.payload.name,
          source: {
            type: "MANAGED_FILE",
            key: key,
          },
        },
        select: { id: true },
      });
      documents = [document];
    }
  } else if (ingestionJob.payload.type === "MANAGED_FILES") {
    const batches = chunkArray(ingestionJob.payload.files, 20);

    for (let i = 0; i < batches.length; i++) {
      const fileBatch = batches[i]!;
      const newDocuments = await db.document.createManyAndReturn({
        select: { id: true },
        data: fileBatch.map((file) => ({
          ...commonData,
          ingestJobId: ingestionJob.id,
          ...(file.name && { name: file.name }),
          source: {
            type: "MANAGED_FILE",
            key: file.key,
          },
        })),
      });
      documents = documents.concat(newDocuments);
    }
  } else if (ingestionJob.payload.type === "URLS") {
    const batches = chunkArray(ingestionJob.payload.urls, 20);

    for (let i = 0; i < batches.length; i++) {
      const urlBatch = batches[i]!;
      const newDocuments = await db.document.createManyAndReturn({
        select: { id: true },
        data: urlBatch.map((url) => ({
          ...commonData,
          ingestJobId: ingestionJob.id,
          source: { type: "FILE", fileUrl: url },
        })),
      });
      documents = documents.concat(newDocuments);
    }
  }

  // Atualizar contadores de documentos
  await db.namespace.update({
    where: { id: ingestionJob.namespace.id },
    data: {
      totalDocuments: { increment: documents.length },
      organization: {
        update: {
          totalDocuments: { increment: documents.length },
        },
      },
    },
  });

  // Atualizar status para PROCESSING
  await db.ingestJob.update({
    where: { id: ingestionJob.id },
    data: {
      status: IngestJobStatus.PROCESSING,
      processingAt: new Date(),
    },
  });

  // Em desenvolvimento, processar documentos diretamente
  for (const document of documents) {
    try {
      // Simular processamento do documento
      await fetch(`${getBaseUrl()}/api/(internal-api)/workflows/process-document/dev-route`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ documentId: document.id }),
      });
    } catch (error) {
      console.error(`[DEV] Erro ao processar documento ${document.id}:`, error);
    }
  }

  console.log(`[DEV] ✅ Job ${jobId} processado com ${documents.length} documentos`);
  return { success: true, documentsCreated: documents.length };
}

// Handler HTTP para desenvolvimento
export async function POST(request: Request) {
  if (env.NODE_ENV !== "development") {
    return Response.json({ error: "Este endpoint é apenas para desenvolvimento" }, { status: 403 });
  }

  try {
    const body: TriggerIngestionJobBody = await request.json();
    const result = await processIngestionJobDev(body.jobId);
    return Response.json(result);
  } catch (error) {
    console.error("[DEV] Erro no processamento:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}
