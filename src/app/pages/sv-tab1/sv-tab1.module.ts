import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SvTab1PageRoutingModule } from './sv-tab1-routing.module';

import { SvTab1Page } from './sv-tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SvTab1PageRoutingModule
  ],
  declarations: [SvTab1Page]
})
export class SvTab1PageModule {}
