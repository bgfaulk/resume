/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/resume",
  assetPrefix: "/resume/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
