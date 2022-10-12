import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'transfer',
    loadChildren: () => import('./transfer/transfer.module').then((m) => m.TransferModule),
  },
  {
    path: 'transfer/create',
    loadChildren: () =>
      import('./transfer/add-transfer/add-transfer.module').then(
        (m) => m.AddTransferModule
      ),
  },
  {
    path: 'transfer/edit/:id',
    loadChildren: () =>
      import('./transfer/edit-transfer/edit-transfer.module').then(
        (m) => m.EditTransferModule
      ),
  },
  {
    path: '',
    redirectTo: 'transfer',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}