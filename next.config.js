/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ascunde badge-ul „N” din colț (vizibil doar în `next dev`; build-ul de producție nu îl include).
  devIndicators: false,

  /** Self-hosted (Hostinger etc.): bundle compact + copiere clară a `public` și `_next/static` lângă server. */
  output: "standalone",

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
