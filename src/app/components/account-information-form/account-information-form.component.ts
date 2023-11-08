import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-information-form',
  templateUrl: './account-information-form.component.html',
  styleUrls: ['./account-information-form.component.scss']
})
export class AccountInformationFormComponent {
  constructor(private fb: FormBuilder){}

  bankForm = this.fb.group({
    ifsc: ['', [Validators.required]],
    bankName: ['',[Validators.required]],
    branchName: ['', Validators.required],
    accountHolderName: ['', Validators.required],
    accountNumber: ['', Validators.required],
    reAccountNumber: ['', Validators.required],
    accountLinkedAadhaar: ['No', Validators.required],
    passbookImg: [null, [Validators.required]]
  })

  onSubmit(){
    
  }
}
