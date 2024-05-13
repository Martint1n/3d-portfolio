/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Ajouter une règle de chargement pour les fichiers .glb
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/', // Chemin public de sortie
          outputPath: 'static/', // Dossier de sortie dans .next/static/
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
