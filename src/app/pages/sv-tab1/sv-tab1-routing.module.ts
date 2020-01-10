import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SvTab1Page } from './sv-tab1.page';

const routes: Routes = [
  {
    path: '',
    component: SvTab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SvTab1PageRoutingModule {}
