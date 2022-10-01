import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { AddTransferRoutingModule } from './add-transfer-routing.module';
import { IonicModule } from '@ionic/angular';
import { AddTransferComponent } from './add-transfer.component';

@NgModule({
  declarations: [AddTransferComponent],
  imports: [
    CommonModule,
    AddTransferRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
})
export class AddTransferModule {}
