import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobcardlistPageRoutingModule } from './jobcardlist-routing.module';

import { JobcardlistPage } from './jobcardlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobcardlistPageRoutingModule
  ],
  declarations: [JobcardlistPage]
})
export class JobcardlistPageModule {}
