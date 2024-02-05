/** @type {import('next').NextConfig} */
const nextConfig = {


    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        // domains: ["www.svgrepo.com"]
      },

      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },


};

export default nextConfig;
