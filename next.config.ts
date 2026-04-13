import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/evgeniya123.github.io",
  assetPrefix: "/evgeniya123.github.io",
};

export default nextConfig;