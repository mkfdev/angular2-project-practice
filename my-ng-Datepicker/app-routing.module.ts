import { DashboardComponent } from './dev/dashboard/dashboard.component';
import { MedicalInfoComponent } from './dev/medical-info/components/medical-info.component';
import {
  PetComponent,
  PetRegisterComponent
} from './dev/pet/components';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PetComponent },
  { path: 'register', component: PetRegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'medical', component: MedicalInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }