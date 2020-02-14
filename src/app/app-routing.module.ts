import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'first-with-tabs', loadChildren: './pages/first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' },
  { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' },
  { path: 'sv-tab1',loadChildren:'./pages/sv-tab1/sv-tab1.module#SvTab1PageModule'  },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'add-user', loadChildren: './pages/add-user/add-user.module#AddUserPageModule' },
  { path: 'jobcard', loadChildren: './pages/jobcard/jobcard.module#JobcardPageModule' },
  { path: 'task', loadChildren: './pages/task/task.module#TaskPageModule' },
  { path: 'childtask', loadChildren: './pages/childtask/childtask.module#ChildtaskPageModule' },
  { path: 'finding', loadChildren: './pages/finding/finding.module#FindingPageModule' },
  { path: 'manual', loadChildren: './pages/manual/manual.module#ManualPageModule' },
  { path: 'timedetail', loadChildren: './pages/timedetail/timedetail.module#TimedetailPageModule' },
  { path: 'canvas', loadChildren: './pages/canvas/canvas.module#CanvasPageModule' },
  { path: 'dashboard',loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule'},
  { path: 'prjctmanagement',loadChildren:'./pages/prjctmanagement/prjctmanagement.module#PrjctmanagementPageModule'},
  { path: 'smartjobcard', loadChildren:'./pages/smartjobcard/smartjobcard.module#SmartjobcardPageModule'},
  { path: 'edit', loadChildren:'./pages/edit/edit.module#EditPageModule'},
  { path: 'view',loadChildren:'./pages/view/view.module#ViewPageModule' },
  { path: 'addproject', loadChildren:'./pages/addproject/addproject.module#AddprojectPageModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
