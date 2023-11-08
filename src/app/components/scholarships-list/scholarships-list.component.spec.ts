import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipsListComponent } from './scholarships-list.component';

describe('ScholarshipsListComponent', () => {
  let component: ScholarshipsListComponent;
  let fixture: ComponentFixture<ScholarshipsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScholarshipsListComponent]
    });
    fixture = TestBed.createComponent(ScholarshipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
