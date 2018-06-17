/*
  When this gets more serious, refactor to file structure: server/methods/method-name.js
  but then I need these to talk to the database...

  I think each method could be connected to some knex function
  const { create, read, update, delete } = require('./db-actions)

  Feathers gives you more than that in that regard - with pre-built patch, create etc functions

  Done prev with feathers knex
  https: //github.com/feathersjs/feathers/issues/258 - look there's mikey!

  But yolo
  Still no idea how to export server object for redux thunk
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
