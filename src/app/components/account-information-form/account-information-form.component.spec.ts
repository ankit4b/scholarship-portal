import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInformationFormComponent } from './account-information-form.component';

describe('AccountInformationFormComponent', () => {
  let component: AccountInformationFormComponent;
  let fixture: ComponentFixture<AccountInformationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountInformationFormComponent]
    });
    fixture = TestBed.createComponent(AccountInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
