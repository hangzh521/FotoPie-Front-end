/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.BACKEND_API}/api/:path*`, // http://localhost:9090/ => /api/
      },

      {
        source: "/:tagString",
        destination: `${process.env.Get_Synonyms_API_Prefix}/:tagString/json`,
      },
    ];
  },
  env: {
    REQUEST_TIMEOUT: 30000,
  },
};
