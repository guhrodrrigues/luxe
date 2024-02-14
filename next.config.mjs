/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/guhrodriguess.png",
      },
    ],
  },
};

export default nextConfig;
