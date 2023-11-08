import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInformationFormComponent } from './profile-information-form.component';

describe('ProfileInformationFormComponent', () => {
  let component: ProfileInformationFormComponent;
  let fixture: ComponentFixture<ProfileInformationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileInformationFormComponent]
    });
    fixture = TestBed.createComponent(ProfileInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
