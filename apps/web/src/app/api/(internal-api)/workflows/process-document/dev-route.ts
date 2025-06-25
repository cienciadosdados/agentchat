import type { TriggerDocumentJobBody } from "@/lib/workflow";
import { env } from "@/env";

import { db, DocumentStatus } from "@agentset/db";

// Função para processar documento em modo de desenvolvimento
export async function processDocumentJobDev(documentId: string) {
  console.log(`[DEV] Iniciando processamento do documento: ${documentId}`);

  const document = await db.document.findUnique({
    where: { id: documentId },
    include: { 
      ingestJob: { 
        include: { namespace: true } 
      } 
    },
  });

  if (!document) {
    throw new Error("Document not found");
  }

  try {
    // Atualizar status para PROCESSING
    await db.document.update({
      where: { id: documentId },
      data: {
        status: DocumentStatus.PROCESSING,
        processingAt: new Date(),
      },
    });

    // Simular processamento (em um ambiente real, aqui seria feito o embedding, etc.)
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay de processamento

    // Atualizar status para COMPLETED
    await db.document.update({
      where: { id: documentId },
      data: {
        status: DocumentStatus.COMPLETED,
        completedAt: new Date(),
      },
    });

    console.log(`[DEV] ✅ Documento ${documentId} processado com sucesso`);
    return { success: true, documentId };

  } catch (error) {
    // Atualizar status para FAILED em caso de erro
    await db.document.update({
      where: { id: documentId },
      data: {
        status: DocumentStatus.FAILED,
        error: error instanceof Error ? error.message : "Erro desconhecido",
        failedAt: new Date(),
      },
    });

    console.error(`[DEV] ❌ Erro ao processar documento ${documentId}:`, error);
    throw error;
  }
}

// Handler HTTP para desenvolvimento
export async function POST(request: Request) {
  if (env.NODE_ENV !== "development") {
    return Response.json({ error: "Este endpoint é apenas para desenvolvimento" }, { status: 403 });
  }

  try {
    const body: TriggerDocumentJobBody = await request.json();
    const result = await processDocumentJobDev(body.documentId);
    return Response.json(result);
  } catch (error) {
    console.error("[DEV] Erro no processamento do documento:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}
