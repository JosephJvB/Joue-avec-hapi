const Nes = require('nes');

const client = new Nes.Client('ws://localhost');

Promise.resolve(client.connect())
.then(function () {
  client.onUpdate = function (update) {
    console.log(update)
    return 'vietnam!';
  };
});