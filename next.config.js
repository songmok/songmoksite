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
    TISTORY_TK:
      "7aa6b49411700399bcca1a3189d54ad2_a515b9d8911d44f7f82f805e99b35ee4",
  },
};

module.exports = nextConfig;
