"use client";

import { useState } from "react";
import { useNamespace } from "@/contexts/namespace-context";
import { useTRPC } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { capitalize } from "@/lib/string-utils";
import { PlusIcon } from "lucide-react";
import { z } from "zod";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropboxIcon,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  GoogleDriveIcon,
  Input,
  NotionIcon,
  OneDriveIcon,
  RadioButton,
  RadioGroup,
  S3Icon,
} from "@agentset/ui";

const formSchema = z.object({
  connectorProvider: z.string().min(1, "Please select a connector provider"),
  clientId: z.string().optional(),
  clientSecret: z.string().optional(),
  accessKey: z.string().optional(),
  secretKey: z.string().optional(),
});

const connectorProviders = [
  { value: "s3", icon: S3Icon, label: "AWS S3" },
  { value: "google_drive", icon: GoogleDriveIcon, label: "Google Drive" },
  { value: "notion", icon: NotionIcon, label: "Notion" },
  { value: "dropbox", icon: DropboxIcon, label: "Dropbox" },
  { value: "onedrive", icon: OneDriveIcon, label: "OneDrive" },
];

export default function AddConnector() {
  const { activeNamespace } = useNamespace();
  const trpc = useTRPC();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      connectorProvider: "",
      clientId: "",
      clientSecret: "",
      accessKey: "",
      secretKey: "",
    },
  });

  const { mutateAsync: createConnector, isPending } = useMutation(
    trpc.connector.create.mutationOptions({
      onSuccess: (data) => {
        toast.success(`Conector ${data.name} adicionado com sucesso!`);
        form.reset();
        setIsAddModalOpen(false);
        trpc.connector.list.invalidate({ namespaceId: activeNamespace.id });
      },
      onError: (error) => {
        toast.error(`Erro ao adicionar conector: ${error.message}`);
      },
    }),
  );

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await createConnector({
        namespaceId: activeNamespace.id,
        connector: values,
      });
    } catch (error) {
      console.error("Erro ao criar conector:", error);
    }
  };

  return (
    <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Connector
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Add New Connector</DialogTitle>
          <DialogDescription>
            Configure a new connector to sync your documents.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="connectorProvider"
                render={({ field }) => (
                  <FormItem className="mt-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-3 gap-4"
                      >
                        {connectorProviders.map((provider) => (
                          <RadioButton
                            key={provider.value}
                            value={provider.value}
                            label={provider.label}
                            icon={provider.icon}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.watch("connectorProvider") === "s3" && (
                <>
                  <FormField
                    control={form.control}
                    name="accessKey"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} placeholder="Enter AWS Access Key" />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="secretKey"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="Enter AWS Secret Key"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {form.watch("connectorProvider") === "google_drive" && (
                <>
                  <FormField
                    control={form.control}
                    name="clientId"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter Google Drive Client ID"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="clientSecret"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="Enter Google Drive Client Secret"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>

            <DialogFooter className="mt-10 flex-row items-center justify-between sm:justify-between">
              <p className="text-muted-foreground text-xs">
                Can't find the connector you need?{" "}
                <a
                  href="mailto:support@agentset.ai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  Contact us
                </a>
              </p>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isPending}>
                  Add Connector
                </Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
