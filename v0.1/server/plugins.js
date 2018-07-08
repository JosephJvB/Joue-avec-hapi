// const plugins = require('./plugins');
// const routes = require('./routes');

// register plugins, define routes
module.exports = function pluggem(server) {
  return Promise.all([
    // plugins: logger & sockets
    server.register([
      {
        plugin: require('hapi-pino'),
        options: {
          prettyPrint: true,
          logEvents: ['onPostStart', 'onPostStop', 'response', 'request-error'],
        }
      },
      {
        plugin: require('nes'),
        options: {}
      },
    ]),
    // routes
    server.route({
      method: 'GET',
      path: '/hello',
      config: {
        id: 'alreet',
        handler: function (request, h) {
          return 'alreet'
        },
      }
    })
  ]);
};