import { env } from "@/env";

import type { LLMConfig } from "@agentset/db";

export const getNamespaceLanguageModel = async (config?: LLMConfig) => {
  if (!config) {
    const { createOpenAI } = await import("@ai-sdk/openai");

    const defaultOpenAI = createOpenAI({
      apiKey: env.DEFAULT_OPENAI_API_KEY,
    });

    return defaultOpenAI.languageModel(env.DEFAULT_OPENAI_MODEL || "gpt-4");
  }

  switch (config.provider) {
    case "OPENAI": {
      const { createOpenAI } = await import("@ai-sdk/openai");

      const { apiKey, model } = config;
      const openai = createOpenAI({ apiKey });
      return openai.languageModel(model);
    }

    case "AZURE_OPENAI": {
      const { createOpenAI } = await import("@ai-sdk/openai");

      const { apiKey, model } = config;
      const openai = createOpenAI({ apiKey });
      return openai.languageModel(model);
    }

    default: {
      // This exhaustive check ensures TypeScript will error if a new provider
      // is added without handling it in the switch statement
      const _exhaustiveCheck: never = config;
      throw new Error(`Unknown vector store provider: ${_exhaustiveCheck}`);
    }
  }
};
