import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { TransferItemModule } from './transfer-item/transfer-item.module';

@NgModule({
  declarations: [],
  imports: [FormsModule, CommonModule, IonicModule.forRoot(), TransferItemModule],
})
export class TransferModule {}
