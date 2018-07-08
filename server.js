const Hapi = require('hapi');

// Hapi server
const server = Hapi.server({
  host: 'localhost',
  port: 4000,
});

// configure -> then init
Promise.all([
  server.register([
    require('inert'),
    {
      plugin: require('hapi-pino'),
      options: { prettyPrint: true }
    }
  ]),
  server.route([
    {
      method: 'GET',
      path: '/',
      handler: { file: `${__dirname}/index.html` },
    },
  ])
]).then(function init () {
  server.start();
});

// pass hapi server to socket server
const io = require('socket.io')(server.listener);
io.on('connection', function(client) {
  // send ping
  client.emit('PING', {
    to: 'client',
    from: 'server',
  });
  // listen for pong
  client.on('PONG', function(data) {
    console.log('PONG', data);
  });
});

process.on('unhandledRejection', function catcher(err) {
  console.error('CAUGHT ERROR:', err, '\n', 'Exiting...');
  process.exit(1);
});
