import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material';


// Angular Material Modules
import {MdToolbarModule} from '@angular/material';

import {AppComponent} from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
    {path:'', component:DashboardComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        RegisterComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
