import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hbbxncc0vppbnkmk.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;