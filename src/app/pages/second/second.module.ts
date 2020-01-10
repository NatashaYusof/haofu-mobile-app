import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SecondPage } from './second.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: SecondPage,
    children: [
      {
        path: 'sv-tab1',
        loadChildren: '../sv-tab1/sv-tab1.module#SvTab1PageModule'
      },
      {
        path: 'sv-tab1/dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
      },
      {
        path: 'sv-tab1/prjctmanagement',
        loadChildren: '../prjctmanagement/prjctmanagement.module#PrjctmanagementPageModule'
      },
   
      {
        path: 'tab2',
        loadChildren: '../tab2/tab2.module#Tab2PageModule'
      },
      {
        path: 'tab3',
        loadChildren: '../tab3/tab3.module#Tab3PageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/sv-tab1',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SecondPage]
})
export class SecondPageModule {}
