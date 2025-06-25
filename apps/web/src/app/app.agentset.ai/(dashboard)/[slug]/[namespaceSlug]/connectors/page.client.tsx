"use client";

import { useNamespace } from "@/contexts/namespace-context";
import { useTRPC } from "@/trpc/react";
import { DeleteConfirmation } from "@/components/delete-confirmation";
import { TrashIcon } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  cn,
  Skeleton,
} from "@agentset/ui";

export default function ConnectorsPage() {
  const { activeNamespace } = useNamespace();
  const trpc = useTRPC();

  const { data: connectors, isLoading, refetch } = useQuery(
    trpc.connector.list.queryOptions({
      namespaceId: activeNamespace.id,
    }),
  );

  const { mutateAsync: deleteConnector } = useMutation(
    trpc.connector.delete.mutationOptions({
      onSuccess: () => {
        toast.success("Conector removido com sucesso!");
        refetch();
      },
      onError: (error) => {
        toast.error(`Erro ao remover conector: ${error.message}`);
      },
    }),
  );

  const handleDeleteConnector = async (connectorId: string) => {
    try {
      await deleteConnector({
        namespaceId: activeNamespace.id,
        connectorId,
      });
    } catch (error) {
      console.error("Erro ao deletar conector:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        <ConnectorSkeleton />
        <ConnectorSkeleton />
        <ConnectorSkeleton />
      </div>
    );
  }

  if (!connectors || connectors.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          Nenhum conector configurado ainda.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Clique em "Add Connector" para começar.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {connectors.map((connector) => (
        <Card key={connector.id}>
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
            <div>
              <CardTitle>{connector.name}</CardTitle>
              <CardDescription>
                Last synced: {new Date(connector.lastSync).toLocaleString()}
              </CardDescription>
            </div>

            <DeleteConfirmation
              trigger={
                <Button variant="ghost" size="icon">
                  <TrashIcon className="h-4 w-4" />
                </Button>
              }
              confirmText={connector.name}
              onConfirm={() => handleDeleteConnector(connector.id)}
            />
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "size-2 rounded-full",
                  connector.status === "connected"
                    ? "bg-green-500"
                    : "bg-red-500",
                )}
              />
              <span className="text-muted-foreground text-sm capitalize">
                {connector.status}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const ConnectorSkeleton = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex flex-col">
          <Skeleton className="h-4 w-24" />

          <CardDescription className="mt-1">
            <Skeleton className="h-4 w-48" />
          </CardDescription>
        </div>

        <Skeleton className="h-6 w-6" />
      </CardHeader>

      <CardContent>
        <div className="flex items-center space-x-2">
          <Skeleton className="h-2 w-2 rounded-full" />
          <Skeleton className="h-2 w-24 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
};
