import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalDataPage } from './personal-data';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonalDataPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalDataPage),
    IonicPageModule,
    ReactiveFormsModule
  ],
})
export class PersonalDataPageModule {}
