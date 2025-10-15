/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ]
  },
  webpack: {
    resolve: {
      modules: ['node_modules'],
    },
  },
}

module.exports = nextConfig
