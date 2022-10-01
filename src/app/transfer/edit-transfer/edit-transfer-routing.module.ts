import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTransferComponent } from './edit-transfer.component';

const routes: Routes = [
  {
    path: '',
    component: EditTransferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTransferRoutingModule {}
