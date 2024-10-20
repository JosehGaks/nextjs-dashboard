/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr:"incremental" // allows you to adopt PPR for specific routes
    }
};

export default nextConfig;
