/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import type { NextConfig } from "next";

import "./src/env";

const config: NextConfig = {
  // Performance optimizations
  experimental: {
    // Enable SWC minification for better performance
    swcMinify: true,
    // Enable concurrent features
    concurrentFeatures: true,
    // Optimize server components
    serverComponentsExternalPackages: ["@prisma/client"],
    // Enable turbo mode for faster builds
  },

  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Image optimizations
  images: {
    remotePatterns: [
      {
        hostname: "assets.agentset.ai",
      },
    ],
    // Enable image optimization
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
            },
          },
        },
      };
    }

    // Development optimizations
    if (dev) {
      // Faster rebuilds
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    return config;
  },

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@agentset/db",
    "@agentset/emails",
    "@agentset/validation",
    "@agentset/ui",
  ],

  // Output optimizations
  output: "standalone",

  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
