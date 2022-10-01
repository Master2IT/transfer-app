import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { AngularIbanModule } from 'angular-iban';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTransferRoutingModule } from './edit-transfer-routing.module';
import { EditTransferComponent } from './edit-transfer.component';


@NgModule({
  declarations: [EditTransferComponent],
  imports: [CommonModule, FormsModule, IonicModule.forRoot(), EditTransferRoutingModule, AngularIbanModule, ReactiveFormsModule],
})
export class EditTransferModule { }
