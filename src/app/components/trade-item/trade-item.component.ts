import {Component, OnInit, Input} from '@angular/core';
import {DataService} from '../../services/data.service';
import {IntTrade} from '../../interfaces/trade';

@Component({
    selector: 'app-trade-item',
    templateUrl: './trade-item.component.html',
    styleUrls: ['./trade-item.component.css']
})
export class TradeItemComponent implements OnInit {

    @Input('trade') trade: IntTrade;

    constructor(private _dataService: DataService) {
    }

    ngOnInit() {
    }

    onRemove(trade: IntTrade){
        this._dataService.removeTrade(trade);
    }

}
