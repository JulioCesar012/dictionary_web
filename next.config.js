const withImages = require("next-images");
const withPwa = require("next-pwa");

/** @type {import('next').NextConfig} */
module.exports = withImages([
  {
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
  },
  [
    withPwa,
    {
      pwa: {
        disable: process.abort.NODE_ENV !== "production",
        dest: "public",
        register: true,
        sw: "/sw.ts",
      },
    },
  ],
]);
