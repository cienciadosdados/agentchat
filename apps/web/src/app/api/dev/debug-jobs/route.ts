import { env } from "@/env";

import { db } from "@agentset/db";

// Endpoint para debug e informações sobre jobs
export async function GET() {
  if (env.NODE_ENV !== "development") {
    return Response.json({ error: "Este endpoint é apenas para desenvolvimento" }, { status: 403 });
  }

  try {
    // Buscar estatísticas dos jobs
    const jobStats = await db.ingestJob.groupBy({
      by: ['status'],
      _count: {
        id: true,
      },
    });

    // Buscar os últimos 10 jobs
    const recentJobs = await db.ingestJob.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        status: true,
        createdAt: true,
        queuedAt: true,
        startedAt: true,
        completedAt: true,
        failedAt: true,
        error: true,
        payload: true,
        workflowRunsIds: true,
      },
    });

    // Buscar jobs em QUEUED há mais de 5 minutos
    const stuckJobs = await db.ingestJob.findMany({
      where: {
        status: 'QUEUED',
        queuedAt: {
          lt: new Date(Date.now() - 5 * 60 * 1000), // 5 minutos atrás
        },
      },
      select: {
        id: true,
        createdAt: true,
        queuedAt: true,
        payload: true,
      },
    });

    const stats = jobStats.reduce((acc, stat) => {
      acc[stat.status] = stat._count.id;
      return acc;
    }, {} as Record<string, number>);

    return Response.json({
      message: "Debug dos jobs de ingestão",
      stats,
      recentJobs,
      stuckJobs: {
        count: stuckJobs.length,
        jobs: stuckJobs,
      },
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error("[DEV] Erro ao buscar debug info:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}
