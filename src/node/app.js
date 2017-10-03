const bittrex = require('node.bittrex.api');
const config = require('./settings.js');
const express = require('express');
const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

const app = express();
const db = new PouchDB('WhenLambo');

db.createIndex({
  index: {
    fields: ['handle']
  }
});

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

/*db.post({
  handle: 'BTC-LTC',
  max: 0.01206760,
  min: 0.01206750
}).then(function (response) {
  console.log(response);
}).catch(function (err) {
  console.log(err);
});*/

getMarkets().then(function(data) {
  watchMarkets(data);
});

/**
 * Start the connection with the broker and start watching the market(s)
 * @param {Array} markets - Array with all the market handles to watch
 */
function watchMarkets(markets) {
  bittrex.websockets.subscribe(markets, function(data) {
    for(let i = 0; i < markets.length; i++) {
      let handle = markets[i];
      bittrex.getticker({ market : handle}, (data, err) => {
        if (err) {
          return console.error(err);
        }
        if(data.success) {
          matchCurrentPrice(handle, data);
          //socket.emit('tickerUpdate', data.result.Last.toPrecision(7));
        }
      });
    }
  });
}

/**
 * Check if the current price matches a given price in the database
 * @param {String} handle - Handle of the data from the returned market
 * @param {Object} marketData - Market information from the broker
 */
function matchCurrentPrice(handle, marketData) {
  db.find({
    selector: {handle: handle}
  }).then(function (result) {
    for(let i = 0; i < result.docs.length; i++) {
      let doc = result.docs[i];
      if(marketData.result.Last.toPrecision(7) < doc.min || marketData.result.Last.toPrecision(7) >= doc.max) {
        sellCoin(doc, marketData);
      }
    }
  }).catch(function (err) {
    // ouch, an error
  });
}

/**
 * Get all the markets that a user is watching from the database
 */
function getMarkets() {
  return db.allDocs({include_docs: true}).then(function(result) {
    let filteredMarkets = [];
    for(let i = 0; i < result.rows.length; i++) {
      if(result.rows[i].doc.handle) {
        filteredMarkets.push(result.rows[i].doc.handle);
      }
    }

    return Array.from(new Set(filteredMarkets));
  });
}


/**
 * Sell a specific coin for a given price
 * @param {Object} doc - Document that is stored in the database
 * @param {Number} lastPrice - Last price that came back from Bittrex. We want to sell it for this price
 */
function sellCoin(doc, lastPrice) {
  const url = 'https://bittrex.com/api/v1.1/market/selllimit?market='+doc.handle+'&quantity=1.2&rate=1.3'
  bittrex.sendCustomRequest(url, function(data, err) {
    console.log( data );
    console.log( err );
  }, true);
}
