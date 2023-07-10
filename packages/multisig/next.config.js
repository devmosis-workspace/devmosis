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

const commonPackages = ["@common/utils"];

const chainPackages = ["@chain-sources/osmosis"];

const transpilePackages = [...commonPackages, ...chainPackages];

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
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

module.exports = nextConfig;
