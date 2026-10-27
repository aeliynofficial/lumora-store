/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "wrbfzjygvnbmnvypjaal.supabase.co" },
    ],
  },
};
export default nextConfig;
