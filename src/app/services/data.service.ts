import {Injectable} from '@angular/core';
import {IntTrade} from '../interfaces/trade';

@Injectable()
export class DataService {

    trades: IntTrade[] = [];

    constructor() {
    }

    getCurrencies() {
        return <string[]> [
            'btc/eth',
            'btc/etc',
            'btc/dash'
        ]
    }

    addTrade(trade: IntTrade) {
        this.trades.push(trade);
    }

    getTrades() {
        return this.trades;
    }

    removeTrade(trade: IntTrade) {
        this.trades.map((t, i) => {
            if (t === trade) {
                this.trades.splice(i, 1);
            }
        });
    }

}
