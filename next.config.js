/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiBaseUrl: 'http://192.168.10.109:9090/',
    uiBaseUrl: 'http://192.168.10.109:8888/',
  },
  webpack: (config, context) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  }
}

module.exports = nextConfig
