import { withPayload } from '@payloadcms/next/withPayload';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Serve static files from uploads directory
    async rewrites() {
        return [
            {
                source: '/media/:path*',
                destination: '/api/media/file/:path*',
            },
        ];
    },
};

export default withPayload(nextConfig);
