/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://172.16.17.15:3000",
    "http://172.16.*.*"
  ]
};

export default nextConfig;
