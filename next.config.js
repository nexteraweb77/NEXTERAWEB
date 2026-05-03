/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ascunde badge-ul „N” din colț (vizibil doar în `next dev`; build-ul de producție nu îl include).
  devIndicators: false,
};

module.exports = nextConfig;
