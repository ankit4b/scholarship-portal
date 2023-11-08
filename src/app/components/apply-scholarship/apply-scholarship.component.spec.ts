import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyScholarshipComponent } from './apply-scholarship.component';

describe('ApplyScholarshipComponent', () => {
  let component: ApplyScholarshipComponent;
  let fixture: ComponentFixture<ApplyScholarshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyScholarshipComponent]
    });
    fixture = TestBed.createComponent(ApplyScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
