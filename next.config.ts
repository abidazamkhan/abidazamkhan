import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "core.unipixer.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {

    return [
      {
        source: "/personal-hotspot",
        destination: "/index-personal-hotspot.html",
      },
      {
        source: "/personal-hotspot/",
        destination: "/index-personal-hotspot.html",
      },
    ];
  },
};

export default nextConfig;
