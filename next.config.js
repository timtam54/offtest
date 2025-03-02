// next.config.js
const withPWA = require('next-pwa')({
    dest: 'public', // where the service worker is generated
    register: true, // register the service worker
    skipWaiting: true, // activate new service workers immediately
    fallbacks: {
      // Failed page requests fallback to this.
      document: "/",
    }
  });
  
  module.exports = withPWA({
    reactStrictMode: true,
  });