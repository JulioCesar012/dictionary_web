/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    API_JSON_SERVER: process.env.API_JSON_SERVER,
  }
};

module.exports = nextConfig