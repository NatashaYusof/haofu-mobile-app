import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrjctmanagementPageRoutingModule } from './prjctmanagement-routing.module';

import { PrjctmanagementPage } from './prjctmanagement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrjctmanagementPageRoutingModule
  ],
  declarations: [PrjctmanagementPage]
})
export class PrjctmanagementPageModule {}
