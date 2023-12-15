/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image123.azureedge.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "hillzimage.blob.core.windows.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
