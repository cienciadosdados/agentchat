import { useState } from "react";
import { useTRPC } from "@/trpc/react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const uploadWithProgress = (
  url: string,
  file: File,
  {
    onProgress,
  }: {
    onProgress: (percent: number) => void;
  },
) => {
  return new Promise<void>((resolve, reject) => {
    const formData = new FormData();
    formData.append("files", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    // Track upload progress
    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const percentCompleted = Math.round((event.loaded * 100) / event.total);
        onProgress(percentCompleted);
      }
    });

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve();
      } else {
        reject(new Error(`Upload failed: ${xhr.responseText}`));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Error during upload."));
    };

    xhr.send(formData);
  });
};

export function useUploadFiles({ namespaceId }: { namespaceId: string }) {
  const trpc = useTRPC();
  const { mutateAsync: getPresignedUrls } = useMutation(
    trpc.upload.getPresignedUrls.mutationOptions(),
  );

  const [uploadedFiles, setUploadedFiles] = useState<
    { key: string; name: string }[]
  >([]);

  const [progresses, setProgresses] = useState<Record<string, number>>({});
  const [isUploading, setIsUploading] = useState(false);

  async function onUpload(files: File[]) {
    setIsUploading(true);
    const newEntries: { name: string; key: string }[] = [];

    try {
      const presignResponses = await getPresignedUrls({
        namespaceId,
        files: files.map((file) => ({
          fileName: file.name,
          contentType: file.type,
          fileSize: file.size,
        })),
      });

      const uploadPromises = presignResponses.map(async (presignResponse, i) => {
        const file = files[i]!;

        try {
          await uploadWithProgress(presignResponse.url, file, {
            onProgress: (percent) => {
              setProgresses((prev) => ({ ...prev, [file.name]: percent }));
            },
          });

          const newEntry = { name: file.name, key: presignResponse.key };
          newEntries.push(newEntry);
          setUploadedFiles((prev) => [...prev, newEntry]);
          
          return newEntry;
        } catch (error) {
          console.error(`Failed to upload ${file.name}:`, error);
          toast.error(`Failed to upload ${file.name}!`);
          throw error;
        }
      });

      await Promise.all(uploadPromises);
      
      if (newEntries.length > 0) {
        toast.success(`Successfully uploaded ${newEntries.length} file(s)!`);
      }
    } catch (error) {
      console.error("Upload error:", error);
      if (error instanceof Error) {
        toast.error(`Upload failed: ${error.message}`);
      } else {
        toast.error("Failed to upload files! Please try again.");
      }
    } finally {
      setProgresses({});
      setIsUploading(false);
    }

    return newEntries;
  }

  return {
    onUpload,
    uploadedFiles,
    progresses,
    isUploading,
  };
}
