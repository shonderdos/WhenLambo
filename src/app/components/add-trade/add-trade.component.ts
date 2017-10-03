import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {IntTrade} from '../../interfaces/trade';

@Component({
    selector: 'app-add-trade',
    templateUrl: './add-trade.component.html',
    styleUrls: ['./add-trade.component.css']
})
export class AddTradeComponent implements OnInit {

    addTrade: FormGroup = this._formBuilder.group(
        {
            currencies: ['', Validators.required],
            sellTarget: ['', Validators.required],
            stoploss: ['', Validators.required],
            amount: ['', Validators.required],
        }
    );

    currencies: string[];

    constructor(private _formBuilder: FormBuilder,
                private _dataService: DataService) {
    }

    ngOnInit() {
        this.currencies = this._dataService.getCurrencies();
    }

    onSubmit(formValues: IntTrade) {
        this._dataService.addTrade(formValues);
        this.addTrade.reset();
    }

}
