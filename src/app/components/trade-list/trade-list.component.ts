import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {

  trades: object[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.trades = this._dataService.getTrades();
  }

}
