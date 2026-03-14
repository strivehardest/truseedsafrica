import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      // Pages — network first
      {
        urlPattern: /^https:\/\/truseedsafrica\.com\/.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "tsa-pages",
          expiration: { maxEntries: 20, maxAgeSeconds: 24 * 60 * 60 },
          networkTimeoutSeconds: 10,
        },
      },
      // Images — cache first
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "tsa-images",
          expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 },
        },
      },
      // Google Fonts — cache first, long TTL
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "tsa-fonts",
          expiration: { maxEntries: 10, maxAgeSeconds: 365 * 24 * 60 * 60 },
        },
      },
      // JS & CSS — stale while revalidate
      {
        urlPattern: /\.(?:js|css)$/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "tsa-static",
          expiration: { maxEntries: 30, maxAgeSeconds: 7 * 24 * 60 * 60 },
        },
      },
    ],
  },
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {},

  // ── Image optimisation — serves WebP/AVIF, reduces transfer size ──
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // ── Modern JS — eliminates legacy polyfills (saves ~14 KiB) ──
  experimental: {
    optimizePackageImports: ["@/components", "@/lib"],
  },
};

export default withPWA(nextConfig);