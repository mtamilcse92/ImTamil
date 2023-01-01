/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: "akamai",
    path: "public"
  },
  basePath: '/nextjs-pages',
  assetPrefix: '/nextjs-pages',
}

module.exports = nextConfig
