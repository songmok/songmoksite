/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [
      "localhost:5000",
      "songmok.site",
      "images.unsplash.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "s3.us-west-2.amazonaws.com",
      "www.notion.so",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/secure.notion-static.com/**",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/secure.notion-static.com/**",
      },
    ],
  },
  serverRuntimeConfig: {
    webSocketProxy: {
      path: "/_next/webpack-hmr",
      target: "http://localhost:8000",
      ws: true,
    },
  },
  compiler: {
    styledComponents: {
      displayName: false,
    },
  },
  env: {
    TISTORY_TK: process.env.TISTORY_TOKEN,
  },
};

module.exports = nextConfig;
