const runtimeCaching = require("next-pwa/cache");
const { i18n } = require('./next-i18next.config');
const withInterceptStdout = require('next-intercept-stdout');
const withPWA = require("next-pwa")(   withInterceptStdout(
  {
    i18n,
    reactStrictMode: true,
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      runtimeCaching,
      disable: false,
    },
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text),
),);

module.exports = withPWA;
