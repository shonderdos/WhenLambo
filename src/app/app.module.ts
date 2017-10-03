import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from '@angular/forms';

// Angular Material Modules
import {MdToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';

// Service
import {DataService} from './services/data.service';

import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AddTradeComponent} from './components/add-trade/add-trade.component';
import {TradeListComponent} from './components/trade-list/trade-list.component';
import {TradeItemComponent} from './components/trade-item/trade-item.component';

const appRoutes: Routes = [
    {path: '', component: DashboardComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NavbarComponent,
        AddTradeComponent,
        TradeListComponent,
        TradeItemComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MdToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
