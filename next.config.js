/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  // Add this to help with the lightningcss issue
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig