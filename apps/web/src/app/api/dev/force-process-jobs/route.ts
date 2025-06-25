import { env } from "@/env";
import { getBaseUrl } from "@/lib/utils";

import { db, IngestJobStatus } from "@agentset/db";

// Endpoint para forçar processamento de jobs em desenvolvimento
export async function POST() {
  if (env.NODE_ENV !== "development") {
    return Response.json({ error: "Este endpoint é apenas para desenvolvimento" }, { status: 403 });
  }

  try {
    // Buscar todos os jobs que estão em QUEUED
    const queuedJobs = await db.ingestJob.findMany({
      where: {
        status: IngestJobStatus.QUEUED,
      },
      select: {
        id: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    console.log(`[DEV] Encontrados ${queuedJobs.length} jobs em QUEUED`);

    const results = [];

    // Processar cada job
    for (const job of queuedJobs) {
      try {
        console.log(`[DEV] Processando job ${job.id}...`);
        
        const response = await fetch(`${getBaseUrl()}/api/(internal-api)/workflows/ingest/dev-route`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ jobId: job.id }),
        });

        if (response.ok) {
          const result = await response.json();
          results.push({
            jobId: job.id,
            status: 'success',
            documentsCreated: result.documentsCreated,
          });
          console.log(`[DEV] ✅ Job ${job.id} processado com sucesso`);
        } else {
          const error = await response.text();
          results.push({
            jobId: job.id,
            status: 'error',
            error: error,
          });
          console.error(`[DEV] ❌ Erro ao processar job ${job.id}:`, error);
        }
      } catch (error) {
        results.push({
          jobId: job.id,
          status: 'error',
          error: error instanceof Error ? error.message : 'Erro desconhecido',
        });
        console.error(`[DEV] ❌ Erro ao processar job ${job.id}:`, error);
      }
    }

    return Response.json({
      message: `Processamento concluído. ${queuedJobs.length} jobs processados.`,
      results,
      summary: {
        total: queuedJobs.length,
        success: results.filter(r => r.status === 'success').length,
        errors: results.filter(r => r.status === 'error').length,
      },
    });

  } catch (error) {
    console.error("[DEV] Erro geral no processamento:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}

// Endpoint GET para verificar status dos jobs
export async function GET() {
  if (env.NODE_ENV !== "development") {
    return Response.json({ error: "Este endpoint é apenas para desenvolvimento" }, { status: 403 });
  }

  try {
    const jobStats = await db.ingestJob.groupBy({
      by: ['status'],
      _count: {
        id: true,
      },
    });

    const stats = jobStats.reduce((acc, stat) => {
      acc[stat.status] = stat._count.id;
      return acc;
    }, {} as Record<string, number>);

    return Response.json({
      message: "Status dos jobs de ingestão",
      stats,
    });

  } catch (error) {
    console.error("[DEV] Erro ao buscar estatísticas:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}
