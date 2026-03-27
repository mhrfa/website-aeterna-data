import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactCompiler: false,       // Temporary disable for dev testing
    experimental: {
        viewTransition: true,    // React 19.2 View Transitions
    },
}

export default nextConfig
