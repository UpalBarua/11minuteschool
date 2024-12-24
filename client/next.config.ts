import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn.10minuteschool.com",
      },
      {
        hostname: "cdn.10ms.com",
      },
    ],
  },
};

export default nextConfig;
