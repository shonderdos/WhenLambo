import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {IntTrade} from "../../interfaces/trade";

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {

  trades: IntTrade[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.trades = this._dataService.getTrades();
  }

}
