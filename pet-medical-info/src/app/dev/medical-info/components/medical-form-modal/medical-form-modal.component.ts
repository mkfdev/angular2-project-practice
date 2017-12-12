import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'medical-info-view',
  template: `
  <form [formGroup]="medicalForm" (ngSubmit)="onSubmit()" novalidate>
    <div class="flexbox enroll-list form-group">
      <!-- card list -->
      <ul class="flex-card-list">
        <!-- card list item -->
        <li class="flex-card-listitem">
          <!-- card module -->
          <div class="flex-card">
            <!-- image container -->
            <div class="flex-card-image"></div>
            <!-- content container -->
            <div class="flex-card-content">
              <ul class="list-in-card flex-medical-list">
                <li>
                  <label for="medicaldate" class="list-title">Date: </label>
                  <app-pet-date-picker></app-pet-date-picker>
                 </li>
                 <li>
                  <label class="list-title">Description: </label>
                  <textarea type="text" class="list-content"></textarea>
                 </li>
                 <li>
                  <label class="list-title">Comment: </label>
                  <textarea class="list-content overflow-scroll" resize="none"></textarea>
                 </li>
              </ul>
              <div class="btns-in-card">
                <button type="submit" class="btn btn-radius btn-outline-mint btn-type1-mint">Enroll</button>
                <button type="button" class="btn btn-radius btn-mint">cancel</button>
              </div>
            </div>
          </div>
        </li>
        <!-- card list item -->
      </ul>
    </div>
  </form> 

  `,
  styleUrls: ['../medical-info.scss']
})
export class MedicalFormModalComponent implements OnInit {

  medicalForm: FormGroup;

  ngOnInit() {
    this.medicalForm = new FormGroup({
      medicaldate: new FormControl('',[
        Validators.required
      ])
    });
  }

  get medicaldate(){
    return this.medicalForm.get('medicaldate');
  }

  onSubmit(){
    console.log(this.medicalForm);
    this.medicalForm.reset();
  }

}
