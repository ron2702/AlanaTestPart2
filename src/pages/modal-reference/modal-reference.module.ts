import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalReferencePage } from './modal-reference';

@NgModule({
  declarations: [
    ModalReferencePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalReferencePage),
  ],
})
export class ModalReferencePageModule {}
