const { server } = require('hapi') // https://github.com/hapijs/hapi

// setup
const app = server({
  port: 6969,
  host: 'localhost'
})

async function init () {

  await app.register({
    plugin: require('hapi-pino'), // https: //github.com/pinojs/hapi-pino
    options: {
      prettyPrint: true,
      logEvents: ['onPostStart', 'onPostStop', 'response', 'request-error'] // all events
    }
  })

  await app.start()
    // hapi-pino logging start nicely already :)
    // .then(() => console.log(`UP2 G? ${app.info.uri}`))

}

init()

// error handler
process.on('unhandledRejection', (ERR) => {
  console.log('BIG SUCC', ERR)
  process.exit(1)
})


// hapi 'gettingStarted' runs you through some server routing, which is interesting
// But it aint for me yo


/*

Im pretty sure that you can attach any sort of properties you want to the app object
Like you can do with window on client side

app: {},
  auth: { strategy: [Function: bound _strategy] },
  decorations: { handler: [], request: [], server: [], toolkit: [] },
  cache: { [Function: policy] provision: [AsyncFunction] },
  events:
   { _eventListeners:
      { log: [Object],
        request: [Object],
        response: [Object],
        route: [Object],
        start: [Object],
        stop: [Object] },
     _notificationsQueue: [],
     _eventsProcessing: false,
     _sourcePodiums: [] },
  info:
   { created: 1529139384345,
     started: 1529139384356,
     host: 'localhost',
     port: 6969,
     protocol: 'http',
     id: 'JoevB:31299:jih63w9l',
     uri: 'http://localhost:6969',
     address: '127.0.0.1' },

  settings:
   { port: 6969,
     host: 'localhost',
     routes:
      { cache: [Object],
        compression: {},
        cors: false,
        ext: {},
        files: [Object],
        json: [Object],
        log: [Object],
        payload: [Object],
        response: [Object],
        security: false,
        state: [Object],
        timeout: [Object],
        validate: [Object] },
     compression: { minBytes: 1024 },
     debug: { request: [Array] },
     load: { sampleInterval: 0, concurrent: 0 },
     mime: null,
     operations: { cleanStop: true },
     router: { isCaseSensitive: true, stripTrailingSlash: false },
     autoListen: true },

     */