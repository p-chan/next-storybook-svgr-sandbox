/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
}

module.exports = nextConfig
