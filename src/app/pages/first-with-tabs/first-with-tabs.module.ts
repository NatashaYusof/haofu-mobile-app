import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirstWithTabsPage } from './first-with-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: FirstWithTabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab1/jobcard',
        loadChildren: '../jobcard/jobcard.module#JobcardPageModule'
      },
      {
        path: 'tab1/jobcard/task/:id',
        loadChildren: '../task/task.module#TaskPageModule'
      },
      {
        path: 'tab1/jobcard/task/:id/childtask/:taskid',
        loadChildren: '../childtask/childtask.module#ChildtaskPageModule'
      },
      {
        path: 'tab1/jobcard/task/:id/childtask/:taskid/finding',
        loadChildren: '../finding/finding.module#FindingPageModule'
      },
      {
        path: 'tab1/jobcard/task/:id/childtask/:taskid/manual',
        loadChildren: '../manual/manual.module#ManualPageModule'
      },
      {
        path: 'tab2',
        loadChildren: '../tab2/tab2.module#Tab2PageModule'
      },
      {
        path: 'tab2/add-user',
        loadChildren: '../add-user/add-user.module#AddUserPageModule'
      },
      {
        path: 'tab3',
        loadChildren: '../tab3/tab3.module#Tab3PageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
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
  declarations: [FirstWithTabsPage]
})
export class FirstWithTabsPageModule {}
