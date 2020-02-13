import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartjobcardPageRoutingModule } from './smartjobcard-routing.module';

import { SmartjobcardPage } from './smartjobcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartjobcardPageRoutingModule
  ],
  declarations: [SmartjobcardPage]
})
export class SmartjobcardPageModule {}
