import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobcardlistPage } from './jobcardlist.page';

const routes: Routes = [
  {
    path: '',
    component: JobcardlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobcardlistPageRoutingModule {}
