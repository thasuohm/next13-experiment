/** @type {import('next').NextConfig} */
const pkg = require('./package.json')
const env = process.env.APP_ENV || 'development'

const nextConfig = {
  poweredByHeader: false,
  crossOrigin: 'anonymous',
  env: {APP_ENV: env},
  generateBuildId: async () => `${pkg.name}@${env}-${pkg.version}`,
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: env === 'production' ? '/robots.production.txt' : '/robots.development.txt',
      },
    ]
  },
}

module.exports = nextConfig
