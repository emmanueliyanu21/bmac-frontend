import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTawkModule } from 'ngx-tawk';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SmeComponent } from './components/pages/sme.component';
import { HomeComponent } from './components/pages/home.component';
import { ImsComponent } from './components/pages/ims.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountComponent } from './components/pages/account.component';
import { PayrollComponent } from './components/pages/payroll.component';
import { NetworkComponent } from './components/pages/network.component';
import { EnterpriseComponent } from './components/pages/enterprise.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SmeComponent,
    HomeComponent,
    ImsComponent,
    FooterComponent,
    AccountComponent,
    PayrollComponent,
    NetworkComponent,
    EnterpriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTawkModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
