const bittrex = require('node.bittrex.api');
const config = require('./settings.js');
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/views'));

bittrex.options({
	'apikey' : config.APIKEY,
	'apisecret' : config.APISECRET,
});

const server = app.listen(5000, () => {
	console.log('Express server listening on port', server.address().port);
});

const io = require('socket.io')(server);

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
});

io.on('connection', function(socket) {
  bittrex.websockets.client(function() {
    bittrex.websockets.subscribe(['BTC-LTC'], function(data) {
      bittrex.getticker({ market : 'BTC-LTC'}, function(data, err) {
        if (err) {
          return console.error(err);
        }
        if(data.success) {
          socket.emit('tickerUpdate', data.result.Last);
        }
      });
    });
  });
});
