/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", 
    images: {
        unoptimized: true,
      },
    reactStrictMode: true,
    assetPrefix: process.env.ASSET_PREFIX,
    basePath: process.env.BASE_PATH,
};

export default nextConfig;
