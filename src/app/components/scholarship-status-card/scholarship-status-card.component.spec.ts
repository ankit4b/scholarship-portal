import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipStatusCardComponent } from './scholarship-status-card.component';

describe('ScholarshipStatusCardComponent', () => {
  let component: ScholarshipStatusCardComponent;
  let fixture: ComponentFixture<ScholarshipStatusCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScholarshipStatusCardComponent]
    });
    fixture = TestBed.createComponent(ScholarshipStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
