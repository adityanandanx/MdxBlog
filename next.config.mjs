import addMdx from '@next/mdx';
import { hostname } from 'os';

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com"
      }
      // hostname: "images.unsplash.com",
    ]
  }
}

addMdx(nextConfig, {
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  }
})

export default nextConfig