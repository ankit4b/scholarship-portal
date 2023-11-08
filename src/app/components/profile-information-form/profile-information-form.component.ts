import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-information-form',
  templateUrl: './profile-information-form.component.html',
  styleUrls: ['./profile-information-form.component.scss']
})
export class ProfileInformationFormComponent implements OnInit {
  @Output() tabChangeEvent = new EventEmitter<string>() 

  constructor(private formBuilder: FormBuilder, private router: Router){}

  changeTab(name: string){
    this.tabChangeEvent.emit(name);
  }

  // profileForm = new FormGroup({
  //   fatherName: new FormControl('Father'),
  //   motherName: new FormControl(''),
  //   guardianName: new FormControl(''),
  //   address: new FormGroup({
  //     district: new FormControl(''),
  //     block: new FormControl(''),
  //     ward: new FormControl(''),
  //     village: new FormControl(''),
  //     pin: new FormControl(''),
  //     address: new FormControl('')
  //   })
  // }
  // );

  profileForm = this.formBuilder.group({
    profilePic: [null],
    gender: ['', [Validators.required]],
    religion: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    aadhaar: ['', [Validators.required, Validators.pattern('[0-9]{12}')]],
    mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    fatherName: ['', [Validators.required, Validators.minLength(3)]],
    motherName: ['', [Validators.required, Validators.minLength(3)]],
    guardianName: [''],
    address: this.formBuilder.group({
      district: [''],
      block: [''],
      ward: [''],
      village: [''],
      pin: [''],
      address: ['']
    }),
    altMobileNos: this.formBuilder.array([])
  })

  get altMobileNos(){
    return this.profileForm.get('altMobileNos') as FormArray;
  }

  addAltMobileNos() {
    this.altMobileNos.push(this.formBuilder.control(''));
  }

  ngOnInit(): void {
  }

  loadApiData(){

    // ** setValue() method is strictly consider the structure of the formGroup, Must include all the controls
 
    // this.profileForm.setValue({
    //   fatherName: "Surendra Sahu",
    //   motherName: "Saudamini Sahu",
    //   guardianName: "Akankshya Sahu",
    //   address: {
    //     district: "Balangir",
    //     block: "Balangir",
    //     ward: "18",
    //     village: "Tulsinagar",
    //     pin: "767001",
    //     address: "Near Raghunathji Temple"
    //   }
    // })


    // ** patchValue() : Used to only update the selected or required values

    this.profileForm.patchValue({
      fatherName: "Surendra Sahu",
      motherName: "Saudamini Sahu",
      guardianName: "Akankshya Sahu"
    })
  }

  onSubmit(){
      if(this.profileForm.valid){
        console.log("Valid : ",this.profileForm)
      }
      else{
        console.log("Invalid : ", this.profileForm)
        console.log(this.profileForm.get("fatherName")?.errors?.["required"])
      }
      this.router.navigateByUrl('/dashboard/apply-scholarship/academic-information-from')
    }
}
