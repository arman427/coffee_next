import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    cacheComponents: true,
    poweredByHeader: false,
    reactCompiler: true,
    images: { formats: ["image/avif", "image/webp"] },
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
    devIndicators: false,
};

export default nextConfig;
