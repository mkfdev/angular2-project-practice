import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { UserComponent } from './dev/user/user.component';
import { DashboardComponent } from './dev/dashboard/dashboard.component';
import { SidebarComponent } from './dev/dashboard/sidebar.component';
import { MedicalInfoComponent } from './dev/medical-info/components/medical-info.component';
import { AppDatepickerComponent } from './dev/medical-info/components/app-datepicker';

import {
  PetComponent,
  PetRegisterComponent
} from './dev/pet/components';


@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    UserComponent,
    DashboardComponent,
    PetComponent,
    PetRegisterComponent,
    SidebarComponent,
    MedicalInfoComponent,
    AppDatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
