import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AngularIbanModule } from 'angular-iban';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddTransferRoutingModule } from './add-transfer-routing.module';
import { AddTransferComponent } from './add-transfer.component';

@NgModule({
  declarations: [AddTransferComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    AddTransferRoutingModule,
    AngularIbanModule,
    ReactiveFormsModule
  ],
})
export class AddTransferModule { }
