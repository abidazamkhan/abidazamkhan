import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
