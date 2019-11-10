// https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
