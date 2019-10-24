const proxy = require('http-proxy-middleware');

const wsProxy = proxy('/ws',
  {
    target: 'wss://r0fb789oz9.execute-api.us-east-2.amazonaws.com/dev',
    changeOrigin: true,
    ws: true,
    logLevel: "debug",
    pathRewrite: { '^/ws': '' }
  });

module.exports = function (app) {
  app.use(proxy('/api', {
    // target: 'http://localhost:3001',
    target: 'https://yoae7sq4lj.execute-api.us-east-2.amazonaws.com/dev',
    logLevel: "debug",
    changeOrigin: true,
    xfwd: false,
    secure: true,
    pathRewrite: { '^/api': '' }
  })
  );
  app.use(wsProxy);
};