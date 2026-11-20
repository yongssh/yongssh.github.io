/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", 
    distDir: 'dist',
    images: {
        unoptimized: true,
      },
    reactStrictMode: true,
    assetPrefix: process.env.ASSET_PREFIX,
    basePath: process.env.BASE_PATH,

    images: {
      remotePatterns: [
        {protocol: "https", hostname: "storage.ghost.io"},
        {protocol: "https", hostname: "dailynortwestern.com"},
        {protocol: "https", hostname: "www.thenation.com"}
      ],
    },
};

export default nextConfig;
