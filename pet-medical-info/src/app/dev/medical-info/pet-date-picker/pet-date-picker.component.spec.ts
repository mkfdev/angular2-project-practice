import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDatePickerComponent } from './pet-date-picker.component';

describe('PetDatePickerComponent', () => {
  let component: PetDatePickerComponent;
  let fixture: ComponentFixture<PetDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
