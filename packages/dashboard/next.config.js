const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
];

const chainPackages = ["@chain-sources/osmosis"];

const commonPackages = ["@common/types", "@common/utils", "@common/components"];

const transpilePackages = [...commonPackages, ...chainPackages];

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages,
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    emotion: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
