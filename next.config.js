const runtimeCaching = require("next-pwa/cache");
const { i18n } = require('./next-i18next.config');
const withPWA = require("next-pwa")({

  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: false,

});

const nextConfig = withPWA({
  reactStrictMode: true,
  i18n,
});

module.exports = nextConfig;