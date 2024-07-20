

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production';
const nextConfig = {
  images: {
      domains: ['images.unsplash.com', 'res.cloudinary.com'],
      unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
  exportTrailingSlash: true,
  basepath:'/Green-Vision'
};

export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//       domains: ['images.unsplash.com', 'res.cloudinary.com'],
//       unoptimized: true,
//   }
// };

// export default nextConfig;
