import { env } from "@/env";

// Wrapper functions to replace S3 functionality
export async function uploadFile(file: File, key?: string) {
  try {
    const formData = new FormData();
    formData.append("files", file);
    
    const response = await fetch("/api/uploadthing", {
      method: "POST",
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error("Upload failed");
    }
    
    const result = await response.json();
    return {
      url: result[0]?.url || "",
      key: result[0]?.key || "",
    };
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
}

export async function deleteFile(key: string) {
  try {
    // Uploadthing delete logic would go here
    console.log("Deleting file:", key);
    return true;
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
}

export async function uploadAsset(file: File, key?: string) {
  try {
    const formData = new FormData();
    formData.append("files", file);
    
    const response = await fetch("/api/uploadthing", {
      method: "POST",
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error("Asset upload failed");
    }
    
    const result = await response.json();
    return {
      url: result[0]?.url || "",
      key: result[0]?.key || "",
    };
  } catch (error) {
    console.error("Asset upload error:", error);
    throw error;
  }
}

export async function deleteAsset(key: string) {
  try {
    // Uploadthing delete logic would go here
    console.log("Deleting asset:", key);
    return true;
  } catch (error) {
    console.error("Asset delete error:", error);
    throw error;
  }
}

// Helper function to extract key from Uploadthing URL
export function extractKeyFromUrl(url: string): string {
  const parts = url.split("/");
  return parts[parts.length - 1] || "";
}

// Helper function to get file metadata (placeholder for S3 functionality)
export async function getFileMetadata(key: string) {
  // Uploadthing doesn't provide metadata API like S3
  // Return basic metadata structure
  return {
    ContentLength: 0,
    ContentType: "application/octet-stream",
    LastModified: new Date(),
  };
}
