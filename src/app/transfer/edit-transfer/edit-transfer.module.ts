import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { AngularIbanModule } from 'angular-iban';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTransferComponent } from './edit-transfer.component';
import { EditTransferRoutingModule } from './edit-transfer-routing.module';

@NgModule({
  declarations: [EditTransferComponent],
  imports: [CommonModule, FormsModule, EditTransferRoutingModule, IonicModule.forRoot(), AngularIbanModule, ReactiveFormsModule],
})
export class EditTransferModule { }
