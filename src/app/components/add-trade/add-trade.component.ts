import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-add-trade',
    templateUrl: './add-trade.component.html',
    styleUrls: ['./add-trade.component.css']
})
export class AddTradeComponent implements OnInit {

    currencies = [
        'btc/eth',
        'btc/etc',
        'btc/kittehcoin'
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
