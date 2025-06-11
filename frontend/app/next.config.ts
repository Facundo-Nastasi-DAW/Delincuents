/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['plantasfaitful.com.ar', 'perenual.com'], // añadimos perenual.com
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
