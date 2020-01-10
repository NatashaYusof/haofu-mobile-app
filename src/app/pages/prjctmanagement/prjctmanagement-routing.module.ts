import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrjctmanagementPage } from './prjctmanagement.page';

const routes: Routes = [
  {
    path: '',
    component: PrjctmanagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrjctmanagementPageRoutingModule {}
