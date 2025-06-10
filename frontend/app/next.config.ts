/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['plantasfaitful.com.ar'], // ¡aquí va el dominio sin https ni path!
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
module.exports = nextConfig;
