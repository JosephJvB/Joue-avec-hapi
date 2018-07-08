const Hapi = require('hapi');

const pluggem = require('./plugins')

const server = Hapi.server({
  host: 'localhost',
  port: 4000,
});

// init: register -> start
pluggem(server).then(function () {
  return Promise.resolve(server.start()).then(function () {
    server.broadcast('hellooooo');
  })
});

// catch'em
process.on('unhandledRejection', function (err) {
  console.error(`UNCAUGHT: ${err},\nExiting...`);
  process.exit(1);
});