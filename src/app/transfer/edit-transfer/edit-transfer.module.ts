import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EditTransferRoutingModule } from './edit-transfer-routing.module';
import { EditTransferComponent } from './edit-transfer.component';


@NgModule({
  declarations: [EditTransferComponent],
  imports: [CommonModule, EditTransferRoutingModule, IonicModule],
})
export class EditTransferModule {}
