const { withSuperjson } = require('next-superjson')

/** @type {import('next').NextConfig} */
const nextConfig = withSuperjson()({
  reactStrictMode: true,
  env: {
    publishURL: process.env.PUBLISH_URL,
  }
})

module.exports = nextConfig
