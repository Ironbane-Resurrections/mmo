module.exports = {
    port: 3000,
    key: '/path/to/private/key.pem', // Not required for localhost
    cert: '/path/to/certificate.pem', // Not required for localhost
    socketPath: '/simmo/socket' // Also update src/client/src/network-controller.js
}