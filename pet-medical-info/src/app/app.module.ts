import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'angular-custom-modal';

import { AppComponent } from './app.component';
import { MedicalInfoComponent } from './dev/medical-info/components/medical-info.component';
import { MedicalFormModalComponent } from './dev/medical-info/components/medical-form-modal/medical-form-modal.component';
import {
  PetDatePickerComponent
} from './dev/medical-info/pet-date-picker';
import { MyModalComponent } from './dev/medical-info/components/my-modal/my-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicalInfoComponent,
    MedicalFormModalComponent,
    PetDatePickerComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
