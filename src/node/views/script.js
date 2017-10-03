'use strict';

const socket = io();

const ticker = document.querySelector('.ticker');

socket.on('tickerUpdate', function(priceObject) {
  ticker.textContent = priceObject;
});
