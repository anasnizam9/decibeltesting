/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/decibeltesting',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
  },
};
module.exports = nextConfig;