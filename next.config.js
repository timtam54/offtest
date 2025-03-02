// next.config.js
const withPWA = require('next-pwa')({
    dest: 'public', // where the service worker is generated
    register: true, // register the service worker
    skipWaiting: true, // activate new service workers immediately
  });
  
  module.exports = withPWA({
    reactStrictMode: true,
  });