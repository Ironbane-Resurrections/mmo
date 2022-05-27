var os = require('os')
if (os.hostname() === 'your_domain_or_ip') {
  // Server running on server
  module.exports = {
    port: 3000,
    key: '/path/to/private/key.pem', // Not required for localhost
    cert: '/path/to/certificate.pem', // Not required for localhost
    socketPath: '/simmo/socket' // Also update src/client/src/network-controller.js
  }
} else {
  // Server running on remote Localhost
  module.exports = {
    port: 3000,
    socketPath: '/simmo/socket' // Also update src/client/src/network-controller.js
  }
}
 