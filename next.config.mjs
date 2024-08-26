/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/careers-page",
  basePath: "/careers-page",
  distDir: "out",
};

export default nextConfig;
