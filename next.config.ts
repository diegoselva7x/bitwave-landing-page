import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bitwave-landing-page",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/*.png",
      },
    ],
  },
};

export default nextConfig;
