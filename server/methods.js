/*
  When this gets more serious, refactor to file structure: server/methods/method-name.js
  but then I need these to talk to the database...
  Done prev with feathers knex
  https: //github.com/feathersjs/feathers/issues/258
  man IDK
*/

const add = {
	name: 'add',
	method: (num) => {
		console.log('adding')
		return num + 1
	},
	options: {}
}

const subtract = {
	name: 'subtract',
	method: (num) => {
		console.log('subtracting')
		return num - 1
	},
	options: {}
}

module.exports = {
	add,
	subtract
}
