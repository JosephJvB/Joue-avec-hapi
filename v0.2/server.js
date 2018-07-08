const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: 4000,
});

Promise.resolve(server.register(require('nes')))
.then(function () {
  return Promise.resolve(server.start());
})
.then(function() {
  setTimeout(() => server.broadcast('good morning'), 2000);
});

process.on('unhandledRejection', function (err) {
  console.error('ERROR:', err, '\nExiting...');
  return process.exit(1);
});