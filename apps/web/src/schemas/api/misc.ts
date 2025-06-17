import { env } from "@/env";
import { toSlug, validSlugRegex } from "@/lib/slug";
import z from "@/lib/zod";
import { fileTypeFromBuffer } from "file-type";

const allowedImageTypes = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/webp",
];

export const base64ImageSchema = z
  .string()
  .trim()
  .regex(/^data:image\/(png|jpeg|jpg|gif|webp);base64,/, {
    message: "Invalid image format, supports only png, jpeg, jpg, gif, webp.",
  })
  .refine(
    async (str) => {
      const base64Data = str.split(",")[1];

      if (!base64Data) {
        return false;
      }

      try {
        const buffer = new Uint8Array(Buffer.from(base64Data, "base64"));
        const fileType = await fileTypeFromBuffer(buffer);

        return fileType && allowedImageTypes.includes(fileType.mime);
      } catch (e) {
        return false;
      }
    },
    {
      message: "Invalid image format, supports only png, jpeg, jpg, gif, webp.",
    },
  )
  .transform((v) => v || null);

// Base64 encoded image or Uploadthing URL
// This schema contains an async refinement check for base64 image validation,
// which requires using parseAsync() instead of parse() when validating
export const uploadedImageSchema = z
  .union([
    base64ImageSchema,
    z
      .string()
      .url()
      .trim()
      .refine((url) => url.startsWith(env.ASSETS_UPLOADTHING_URL), {
        message: `URL must start with ${env.ASSETS_UPLOADTHING_URL}`,
      }),
  ])
  .transform((v) => v || null);

export const publicHostedImageSchema = z
  .string()
  .url()
  .trim()
  .refine((url) => url.startsWith("http://") || url.startsWith("https://"), {
    message: "Image URL must start with http:// or https://",
  });

export const slugSchema = z
  .string()
  .min(2, "Slug must be at least 2 characters")
  .max(48, "Slug must be less than 48 characters")
  .transform((v) => toSlug(v))
  .refine((v) => validSlugRegex.test(v), { message: "Invalid slug format" });
