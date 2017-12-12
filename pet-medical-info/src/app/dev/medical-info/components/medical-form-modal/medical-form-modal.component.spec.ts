import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFormModalComponent } from './medical-form-modal.component';

describe('MedicalInfoViewComponent', () => {
  let component: MedicalFormModalComponent;
  let fixture: ComponentFixture<MedicalFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
