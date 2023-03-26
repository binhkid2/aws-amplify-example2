/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abcdeff20752-dev.s3.ap-northeast-1.amazonaws.com',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
}
