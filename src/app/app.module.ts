import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularIbanModule } from 'angular-iban';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { TransferComponent } from './transfer/transfer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    // AngularIbanModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
