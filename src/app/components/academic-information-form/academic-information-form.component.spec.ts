import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicInformationFormComponent } from './academic-information-form.component';

describe('AcademicInformationFormComponent', () => {
  let component: AcademicInformationFormComponent;
  let fixture: ComponentFixture<AcademicInformationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicInformationFormComponent]
    });
    fixture = TestBed.createComponent(AcademicInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
