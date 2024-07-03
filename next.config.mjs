/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/raizes-next",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;