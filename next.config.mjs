/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["github.com", `${process.env.NEXT_PUBLIC_IMAGE_URL}`],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  // output: "export"
};

export default nextConfig;
