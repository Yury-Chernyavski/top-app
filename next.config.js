/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        titleProp: true
      },
      test: /\.svg$/,
    });

    return config;
  },
};

module.exports = nextConfig;
