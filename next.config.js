/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   images: {
    domains: [
      'cdn.jsdelivr.net',
      'raw.githubusercontent.com',
      'assets.tina.io',
    ],
    // ::dS4OgwSTmS:: these are equiv. to defaults from `chakra.ui/theme/foundations/breakpoints`
    deviceSizes: [400, 768, 992, 1280, 1536],
    // async rewrites() {
    //   return [
    //     {
    //       // write index route to /home -- this is where tina loads
    //       source: '/',
    //       destination: '/home',
    //     },
    //   ];
    // },
  },
}

module.exports = nextConfig
