import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

    trades: object[] = [];

    constructor() {
    }

    getCurrencies() {
        return <string[]> [
            'btc/eth',
            'btc/etc',
            'btc/dash'
        ]
    }

    addTrade(trade) {
        this.trades.push(trade);
    }

    getTrades() {
        return this.trades;
    }

}
