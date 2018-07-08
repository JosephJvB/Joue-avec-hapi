const Nes = require('nes');

const client = new Nes.Client('ws://localhost:4000');

Promise.resolve(client.connect()).then(function() {
  client.onUpdate = function(data) {
    console.log(data)
  }
});