import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTransferComponent } from './add-transfer.component';

const routes: Routes = [
  {
    path: '',
    component: AddTransferComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTransferRoutingModule { }
