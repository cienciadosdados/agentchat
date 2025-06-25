import { useState } from "react";
import { useNamespace } from "@/contexts/namespace-context";
import { useCursorPagination } from "@/hooks/use-cursor-pagination";
import { capitalize } from "@/lib/string-utils";
import { useTRPC } from "@/trpc/react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { IngestJobStatus } from "@agentset/db";

const statusLabels = Object.values(IngestJobStatus).map((status) => ({
  label: capitalize(status.split("_").join(" ")) as string,
  value: status,
}));

export function useJobs() {
  const { activeNamespace } = useNamespace();
  const trpc = useTRPC();
  const [statuses, setStatuses] = useState<IngestJobStatus[]>([]);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const { cursor, cursorDirection, handleNext, handlePrevious, hasPrevious } =
    useCursorPagination();

  const { isLoading, data, refetch, isFetching } = useQuery(
    trpc.ingestJob.all.queryOptions(
      {
        namespaceId: activeNamespace.id,
        statuses,
        cursor,
        cursorDirection,
      },
      { 
        refetchInterval: (data) => {
          // Refetch mais frequentemente se houver jobs em andamento
          const hasActiveJobs = data?.items?.some(job => 
            job.status === IngestJobStatus.QUEUED || 
            job.status === IngestJobStatus.PROCESSING
          );
          return hasActiveJobs ? 5_000 : 15_000; // 5s para jobs ativos, 15s para outros
        },
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
      },
    ),
  );

  return {
    isLoading,
    isFetching,
    data,
    refetch,
    cursor,
    cursorDirection,
    handleNext,
    handlePrevious,
    hasPrevious,
    statuses,
    setStatuses,
    statusLabels,
    expandedJobId,
    setExpandedJobId,
  };
}
