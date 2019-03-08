// require('babel-polyfill');

module.exports = {
  apis: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT,
    apiHost: process.env.APIHOST || 'localhost',
    apiPort: process.env.APIPORT
  }
}
