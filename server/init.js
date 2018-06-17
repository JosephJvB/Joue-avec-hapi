async function init({ logger, methods, server }) {

	await server.register(logger)

	if (methods) {
		// apply methods if valid, warn if not
		if (methods instanceof Array) {
			server.method(methods)
		} else {
			console.warn(`Expect server methods to be 'Array'\nReceived '${methods}'`)
		}
	}

	await server.start()
	// .then(() => console.log('HIOYOO', server.methods.add(1)))
}

module.exports = init
