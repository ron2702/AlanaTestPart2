import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VacantPage } from './vacant';

@NgModule({
  declarations: [
    VacantPage,
  ],
  imports: [
    IonicPageModule.forChild(VacantPage),
  ],
})
export class VacantPageModule {}
