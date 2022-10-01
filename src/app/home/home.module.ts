import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
