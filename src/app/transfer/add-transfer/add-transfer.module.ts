import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AngularIbanModule } from 'angular-iban';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddTransferComponent } from './add-transfer.component';
import { AddTransferRoutingModule } from './add-transfer-routing.module';

@NgModule({
  declarations: [AddTransferComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddTransferRoutingModule,
    IonicModule.forRoot(),
    AngularIbanModule,
    ReactiveFormsModule
  ],
})
export class AddTransferModule { }
