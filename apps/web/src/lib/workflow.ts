import { env } from "@/env";
import { Client as QstashClient, Receiver } from "@upstash/qstash";
import { Client as WorkflowClient } from "@upstash/workflow";

import { getBaseUrl } from "./utils";

// Determinar se estamos em modo de desenvolvimento local
const isDevelopmentMode = env.NODE_ENV === "development";

// Configurar cliente QStash apenas se não estivermos em modo de desenvolvimento
export const qstashClient = isDevelopmentMode
  ? (null as unknown as QstashClient) // Não inicializar em desenvolvimento
  : new QstashClient({
      baseUrl: env.QSTASH_URL,
      token: env.QSTASH_TOKEN,
    });

// Configurar cliente Workflow apenas se não estivermos em modo de desenvolvimento
const workflowClient = isDevelopmentMode
  ? (null as unknown as WorkflowClient) // Não inicializar em desenvolvimento
  : new WorkflowClient({
      baseUrl: env.QSTASH_URL,
      token: env.QSTASH_TOKEN,
    });

// Configurar receptor QStash apenas se não estivermos em modo de desenvolvimento
export const qstashReceiver = isDevelopmentMode
  ? (null as unknown as Receiver) // Não inicializar em desenvolvimento
  : new Receiver({
      currentSigningKey: env.QSTASH_CURRENT_SIGNING_KEY,
      nextSigningKey: env.QSTASH_NEXT_SIGNING_KEY,
    });


// Tipo de retorno para operações de workflow
type WorkflowResponse = {
  workflowId?: string;
  workflowRunId: string;
};

// Tipo completo para nossa resposta padronizada
type StandardWorkflowResponse = {
  workflowId: string;
  workflowRunId: string;
};

// Função auxiliar para gerar IDs únicos para workflows simulados
const generateMockWorkflowId = () => {
  return `mock-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

// Função auxiliar para simular respostas de workflow
const createMockWorkflowResponse = (): StandardWorkflowResponse => {
  return {
    workflowId: generateMockWorkflowId(),
    workflowRunId: generateMockWorkflowId(),
  };
};

// Função auxiliar para processar workflows localmente em modo de desenvolvimento
const processLocalWorkflow = async (
  endpoint: string,
  body: Record<string, unknown>,
): Promise<StandardWorkflowResponse> => {
  if (isDevelopmentMode) {
    console.log(`[DEV MODE] Processando localmente: ${endpoint} com payload:`, body);
    
    try {
      // Fazer chamada HTTP real para o endpoint local
      const response = await fetch(`${getBaseUrl()}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      console.log(`[DEV MODE] ✅ Processamento concluído para ${endpoint}`);
      
      return createMockWorkflowResponse();
    } catch (error) {
      console.error(`[DEV MODE] ❌ Erro ao processar ${endpoint}:`, error);
      throw error;
    }
  }

  // Em produção, usar o cliente QStash real
  const response = await workflowClient.trigger({
    url: `${getBaseUrl()}${endpoint}`,
    body,
  }) as WorkflowResponse;
  
  // Garantir que o retorno tenha a estrutura correta
  return {
    workflowId: response.workflowId || generateMockWorkflowId(),
    workflowRunId: response.workflowRunId,
  };
};

export type TriggerIngestionJobBody = {
  jobId: string;
};
export const triggerIngestionJob = async (body: TriggerIngestionJobBody) => {
  if (isDevelopmentMode) {
    // Em desenvolvimento, usar endpoint específico que não depende do QStash
    return processLocalWorkflow("/api/(internal-api)/workflows/ingest/dev-route", body);
  }
  return processLocalWorkflow("/api/workflows/ingest", body);
};

export type TriggerDocumentJobBody = {
  documentId: string;
  cleanup?: boolean;
};
export const triggerDocumentJob = async (body: TriggerDocumentJobBody) => {
  if (isDevelopmentMode) {
    // Em desenvolvimento, usar endpoint específico que não depende do QStash
    return processLocalWorkflow("/api/(internal-api)/workflows/process-document/dev-route", body);
  }
  return processLocalWorkflow("/api/workflows/process-document", body);
};

export type DeleteDocumentBody = {
  documentId: string;
  deleteJobWhenDone?: boolean;
  deleteNamespaceWhenDone?: boolean;
  deleteOrgWhenDone?: boolean;
};
export const triggerDeleteDocumentJob = async (body: DeleteDocumentBody) => {
  return processLocalWorkflow("/api/workflows/delete-document", body);
};

export type DeleteIngestJobBody = {
  jobId: string;
  deleteNamespaceWhenDone?: boolean;
  deleteOrgWhenDone?: boolean;
};
export const triggerDeleteIngestJob = async (body: DeleteIngestJobBody) => {
  return processLocalWorkflow("/api/workflows/delete-ingest-job", body);
};

export type DeleteNamespaceBody = {
  namespaceId: string;
  deleteOrgWhenDone?: boolean;
};
export const triggerDeleteNamespace = async (body: DeleteNamespaceBody) => {
  return processLocalWorkflow("/api/workflows/delete-namespace", body);
};

export type ReIngestJobBody = {
  jobId: string;
};
export const triggerReIngestJob = async (body: ReIngestJobBody) => {
  return processLocalWorkflow("/api/workflows/re-ingest", body);
};

type CancelArgs = Parameters<typeof workflowClient.cancel>[0];
export const cancelWorkflow = async (args: CancelArgs) => {
  if (isDevelopmentMode) {
    console.log("[DEV MODE] Simulando cancelamento de workflow:", args);
    return { success: true };
  }
  
  return workflowClient.cancel(args);
};
