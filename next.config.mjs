/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.ap-south-2.amazonaws.com'],
}
};

export default nextConfig;
