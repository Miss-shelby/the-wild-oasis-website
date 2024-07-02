/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tignmmgqfyyhbceidvyt.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/client-images/**',
          },
        ],
      },
      // output:"export"
};

export default nextConfig;
