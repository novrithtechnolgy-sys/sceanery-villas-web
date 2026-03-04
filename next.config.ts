import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dpjmcup95/**", // your cloud name path (recommended)
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // your cloud name path (recommended)
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",

      },
    ],
  },
};

export default nextConfig;