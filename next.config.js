const withNextIntl = require('next-intl/plugin')('./src/i18n.ts')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = withNextIntl(nextConfig)
