/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeimg.com", "localhost", "192.168.7.20"],
  },
};

module.exports = nextConfig;
