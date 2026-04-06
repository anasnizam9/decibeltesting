// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// module.exports = nextConfig;

//** @type {import('next').NextConfig} */
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
export default nextConfig;