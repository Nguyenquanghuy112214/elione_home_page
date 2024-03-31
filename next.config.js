/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "elione.bkt.net.vn",
      },
      {
        protocol: "https",
        hostname: "resource.bksgroup.vn",
      },
    ],
  },
};

module.exports = nextConfig;
