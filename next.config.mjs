// /** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV = 'production';
// const nextConfig = {
//   images: {
//     domains: [
//       "images.unsplash.com",
//       "res.cloudinary.com",
//       "assets.aceternity.com",
//     ],
//     unoptimized: true,
//   },
//   output: "export",
//   reactStrictMode: true,
//   distDir: 'dist',
//   basepath:'/green-vision'
// };
 
// export default nextConfig;

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production';
const nextConfig = {
  images: {
      domains: ['images.unsplash.com', 'res.cloudinary.com'],
      unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
  basepath:'/green-vision'
};

export default nextConfig;
