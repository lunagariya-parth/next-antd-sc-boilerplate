/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false
    }
  },
  //d
  webpack: (config, { isServer }) => {
    // Exact path and loader name
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: 'file-loader' // Or 'url-loader' if preferred
    })

    return config
  }
}

export default nextConfig
  