/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["@react-email/components", "inngest"],
  images: {
    unoptimized: true,
  },
}

export default nextConfig