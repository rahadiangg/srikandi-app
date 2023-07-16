const { withSuperjson } = require('next-superjson')

/** @type {import('next').NextConfig} */
const nextConfig = withSuperjson()({
  reactStrictMode: true,
  env: {
    publishURL: process.env.NEXT_PUBLIC_PUBLISH_URL,
    postURL: process.env.NEXT_PUBLIC_POST_URL
  }
})

module.exports = nextConfig
