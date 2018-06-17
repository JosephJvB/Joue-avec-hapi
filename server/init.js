async function init({ logger, methods, server }) {

	await server.register(logger)

	if (methods) {
		if (!(methods instanceof Array)) {
			console.warn(`Expect server methods to be 'Array'\nReceived '${methods}'`)
		}
		server.method(methods)
	}

	await server.start()
	// hapi-pino logging nicely already :)
	// .then(() => console.log('UP2 G?', app))

}

module.exports = init
