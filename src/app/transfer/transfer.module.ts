import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { TransferItemModule } from './transfer-item/transfer-item.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TransfersEffect } from './store/transfer.effects';
import { transferReducer } from './store/transfer.reducer';
import { TransferRoutingModule } from './transfer-routing.module';
@NgModule({
  declarations: [],
  imports: [FormsModule,
    CommonModule,
    IonicModule.forRoot(),
    TransferItemModule,
    TransferRoutingModule,
    StoreModule.forFeature('transfers', transferReducer),
    EffectsModule.forFeature([TransfersEffect]),
  ],
})
export class TransferModule { }
