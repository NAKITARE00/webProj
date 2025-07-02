/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Enables standalone mode for better deployment
  // images: {
  //   unoptimized: true, // Disables Image Optimization API
  // },
};

module.exports = nextConfig;