/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Production optimizations
  compress: true,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Production-only optimizations
  poweredByHeader: false,

  // Strict mode for catching issues early
  reactStrictMode: true,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
      "@mui/material",
      "@mui/icons-material",
    ],
  },
};

export default nextConfig;
