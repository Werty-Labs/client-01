import path from "node:path";
import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://us.i.posthog.com https://us-assets.i.posthog.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https: https://us.i.posthog.com",
  "font-src 'self' data:",
  "connect-src 'self' https://us.i.posthog.com https://us-assets.i.posthog.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  compress: true,
  images: {
    remotePatterns: [],
  },
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy WordPress /booking/* tour pages → closest matching new page.
      {
        source: "/booking/arugam-bay-the-surfing-paradise",
        destination: "/tours/arugam-bay-the-surfing-paradise",
        permanent: true,
      },
      {
        source: "/booking/ella-the-scenic-mountain-retreat",
        destination: "/tours/explore-the-cold-country",
        permanent: true,
      },
      {
        source: "/booking/kandy-the-sacred-city-of-sri-lanka",
        destination: "/destinations/kandy",
        permanent: true,
      },
      {
        source: "/booking/mirissa-whale-watching-and-beaches",
        destination: "/destinations/mirissa",
        permanent: true,
      },
      {
        source: "/booking/polonnaruwa-the-ancient-royal-city",
        destination: "/destinations/polonnaruwa",
        permanent: true,
      },
      {
        source: "/booking/trincomalee-the-serene-east-coast",
        destination: "/destinations/trincomalee",
        permanent: true,
      },
      // Merged into the weather guide, which Google already ranked far higher.
      {
        source: "/blog/best-time-to-visit-sri-lanka",
        destination: "/blog/sri-lanka-weather-guide",
        permanent: true,
      },
      // Legacy WordPress pages with a direct equivalent on the new site.
      // (No rule needed for /about — it already resolves to the real /about page.)
      { source: "/tours-page", destination: "/tours", permanent: true },
      { source: "/tours-list-view", destination: "/tours", permanent: true },
      { source: "/destination", destination: "/destinations", permanent: true },
      { source: "/news", destination: "/blog", permanent: true },
      { source: "/news-:slug", destination: "/blog", permanent: true },
      { source: "/gallery", destination: "/", permanent: true },
      { source: "/terms-conditions", destination: "/", permanent: true },
      { source: "/categories/tour", destination: "/tours", permanent: true },
      { source: "/category-portfolio/:slug", destination: "/tours", permanent: true },
      { source: "/ba_type/beach-coastal", destination: "/tours", permanent: true },
    ];
  },
};

export default nextConfig;
