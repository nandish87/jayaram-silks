/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export for Cloudflare Pages / GitHub Pages / any static host
  reactStrictMode: true,
  images: {
    unoptimized: true, // Guarantees 100% compatibility with static hosting (Vercel, Netlify, Cloudflare, GitHub Pages)
  },
};

export default nextConfig;

