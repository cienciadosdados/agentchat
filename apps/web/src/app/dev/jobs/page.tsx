'use client';

import { useState, useEffect } from 'react';

interface Job {
  id: string;
  status: string;
  createdAt: string;
  queuedAt: string | null;
  startedAt: string | null;
  completedAt: string | null;
  failedAt: string | null;
  error: string | null;
  payload: any;
  workflowRunsIds: string[];
}

interface JobStats {
  [status: string]: number;
}

interface DebugResponse {
  stats: JobStats;
  recentJobs: Job[];
  stuckJobs: {
    count: number;
    jobs: Job[];
  };
  timestamp: string;
}

export default function JobsDebugPage() {
  const [data, setData] = useState<DebugResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/dev/debug-jobs');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const processJob = async (jobId: string) => {
    setProcessing(jobId);
    try {
      const response = await fetch(`/api/dev/process-job/${jobId}`, {
        method: 'POST',
      });
      const result = await response.json();
      
      if (response.ok) {
        alert(`Job ${jobId} processado com sucesso!`);
        fetchData(); // Recarregar dados
      } else {
        alert(`Erro ao processar job: ${result.error}`);
      }
    } catch (error) {
      alert(`Erro ao processar job: ${error}`);
    } finally {
      setProcessing(null);
    }
  };

  const processAllStuck = async () => {
    if (!data?.stuckJobs.jobs.length) return;
    
    setProcessing('all');
    try {
      const response = await fetch('/api/dev/force-process-jobs', {
        method: 'POST',
      });
      const result = await response.json();
      
      if (response.ok) {
        alert(`${result.summary.success} jobs processados com sucesso!`);
        fetchData();
      } else {
        alert(`Erro: ${result.error}`);
      }
    } catch (error) {
      alert(`Erro: ${error}`);
    } finally {
      setProcessing(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="p-8">Carregando...</div>;
  }

  if (!data) {
    return <div className="p-8">Erro ao carregar dados</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Debug de Jobs de Ingestão</h1>
      
      <div className="mb-6">
        <button
          onClick={fetchData}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600"
        >
          🔄 Atualizar
        </button>
        
        {data.stuckJobs.count > 0 && (
          <button
            onClick={processAllStuck}
            disabled={processing === 'all'}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
          >
            {processing === 'all' ? 'Processando...' : `🚀 Processar ${data.stuckJobs.count} Jobs Travados`}
          </button>
        )}
      </div>

      {/* Estatísticas */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">Estatísticas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(data.stats).map(([status, count]) => (
            <div key={status} className="text-center">
              <div className="text-2xl font-bold">{count}</div>
              <div className="text-sm text-gray-600">{status}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Jobs Travados */}
      {data.stuckJobs.count > 0 && (
        <div className="bg-red-50 border border-red-200 p-4 rounded mb-6">
          <h2 className="text-xl font-semibold text-red-800 mb-2">
            ⚠️ Jobs Travados ({data.stuckJobs.count})
          </h2>
          <p className="text-red-600 mb-4">
            Estes jobs estão em QUEUED há mais de 5 minutos
          </p>
          <div className="space-y-2">
            {data.stuckJobs.jobs.map((job) => (
              <div key={job.id} className="flex items-center justify-between bg-white p-3 rounded">
                <div>
                  <div className="font-mono text-sm">{job.id}</div>
                  <div className="text-xs text-gray-500">
                    Criado: {new Date(job.createdAt).toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => processJob(job.id)}
                  disabled={processing === job.id}
                  className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 disabled:opacity-50"
                >
                  {processing === job.id ? 'Processando...' : '🚀 Processar'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Jobs Recentes */}
      <div className="bg-white border rounded">
        <h2 className="text-xl font-semibold p-4 border-b">Jobs Recentes</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3">ID</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Criado</th>
                <th className="text-left p-3">Tipo</th>
                <th className="text-left p-3">Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.recentJobs.map((job) => (
                <tr key={job.id} className="border-t">
                  <td className="p-3 font-mono text-sm">{job.id.slice(0, 8)}...</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      job.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                      job.status === 'FAILED' ? 'bg-red-100 text-red-800' :
                      job.status === 'PROCESSING' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="p-3 text-sm">
                    {new Date(job.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3 text-sm">
                    {job.payload?.type || 'N/A'}
                  </td>
                  <td className="p-3">
                    {job.status === 'QUEUED' && (
                      <button
                        onClick={() => processJob(job.id)}
                        disabled={processing === job.id}
                        className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 disabled:opacity-50"
                      >
                        {processing === job.id ? 'Processando...' : '🚀 Processar'}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Última atualização: {new Date(data.timestamp).toLocaleString()}
      </div>
    </div>
  );
}
