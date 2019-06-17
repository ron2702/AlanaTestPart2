import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    IonicPageModule,
    ReactiveFormsModule
  ],
})
export class ContactPageModule {}
