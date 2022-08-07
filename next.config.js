const withPwa = require("next-pwa");

/** @type {import('next').NextConfig} */
module.exports = withPwa({
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  env: {
    API_JSON_SERVER: process.env.API_JSON_SERVER,
  },
  pwa: { dest: "public",
  },
});
