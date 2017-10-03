'use strict';

const socket = io();

const ticker = document.querySelector('.ticker');

socket.on('tickerUpdate', function(price) {
  ticker.textContent = price;
});
