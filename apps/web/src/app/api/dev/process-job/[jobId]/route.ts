import { env } from "@/env";
import { getBaseUrl } from "@/lib/utils";

import { db, IngestJobStatus } from "@agentset/db";

// Endpoint para processar um job específico manualmente
export async function POST(
  request: Request,
  { params }: { params: { jobId: string } }
) {
  if (env.NODE_ENV !== "development") {
    return Response.json({ error: "Este endpoint é apenas para desenvolvimento" }, { status: 403 });
  }

  try {
    const { jobId } = params;

    // Buscar o job
    const job = await db.ingestJob.findUnique({
      where: { id: jobId },
      include: {
        namespace: true,
      },
    });

    if (!job) {
      return Response.json({ error: "Job não encontrado" }, { status: 404 });
    }

    console.log(`[DEV] Processando job manualmente: ${jobId}`);
    console.log(`[DEV] Status atual: ${job.status}`);
    console.log(`[DEV] Payload:`, job.payload);

    // Chamar diretamente nosso endpoint de desenvolvimento
    const response = await fetch(`${getBaseUrl()}/api/(internal-api)/workflows/ingest/dev-route`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jobId }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[DEV] Erro ao processar job ${jobId}:`, errorText);
      return Response.json({
        error: `Erro ao processar job: ${response.status} - ${errorText}`,
        jobId,
      }, { status: 500 });
    }

    const result = await response.json();
    console.log(`[DEV] ✅ Job ${jobId} processado com sucesso:`, result);

    // Buscar o job atualizado
    const updatedJob = await db.ingestJob.findUnique({
      where: { id: jobId },
      select: {
        id: true,
        status: true,
        startedAt: true,
        completedAt: true,
        error: true,
      },
    });

    return Response.json({
      message: `Job ${jobId} processado com sucesso`,
      originalStatus: job.status,
      updatedJob,
      processingResult: result,
    });

  } catch (error) {
    console.error("[DEV] Erro no processamento manual:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}

// GET para ver detalhes do job
export async function GET(
  request: Request,
  { params }: { params: { jobId: string } }
) {
  if (env.NODE_ENV !== "development") {
    return Response.json({ error: "Este endpoint é apenas para desenvolvimento" }, { status: 403 });
  }

  try {
    const { jobId } = params;

    const job = await db.ingestJob.findUnique({
      where: { id: jobId },
      include: {
        namespace: {
          select: {
            id: true,
            name: true,
            organizationId: true,
          },
        },
        documents: {
          select: {
            id: true,
            status: true,
            createdAt: true,
            processingAt: true,
            completedAt: true,
            failedAt: true,
            error: true,
          },
        },
      },
    });

    if (!job) {
      return Response.json({ error: "Job não encontrado" }, { status: 404 });
    }

    return Response.json({
      job,
      documentsCount: job.documents.length,
      documentsByStatus: job.documents.reduce((acc, doc) => {
        acc[doc.status] = (acc[doc.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
    });

  } catch (error) {
    console.error("[DEV] Erro ao buscar job:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}
