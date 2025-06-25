import { env } from "@/env";
import { Redis } from "@upstash/redis";

// O cliente @upstash/redis espera uma URL HTTPS, não uma URL redis://
// Formato correto: https://flowing-fish-11567.upstash.io
export const redis = new Redis({
  url: "https://flowing-fish-11567.upstash.io",
  token: env.REDIS_TOKEN,
});
