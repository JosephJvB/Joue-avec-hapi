const Hapi = require('hapi') // https://github.com/hapijs/hapi

module.exports = {
	logger: {
		plugin: require('hapi-pino'), // https: //github.com/pinojs/hapi-pino
		options: {
			prettyPrint: true,
			logEvents: ['onPostStart', 'onPostStop', 'response', 'request-error']
			// log all events
		}
	},
	methods: [],
	server: Hapi.server({
		port: 6969,
		host: 'localhost'
	})
}
