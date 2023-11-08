import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-academic-information-form',
  templateUrl: './academic-information-form.component.html',
  styleUrls: ['./academic-information-form.component.scss']
})
export class AcademicInformationFormComponent {
  constructor(private formBuilder: FormBuilder){}

  academicForm = this.formBuilder.group({
    
    prevEducation: this.formBuilder.array([ 
      this.formBuilder.group({
        course: [''],
        board: [''],
        passingYear: [''],
        rollNo: [''],
        totalMark: [''],
        securedMark: [''],
        percentage: [''],
        marksheet: [null]
      })
    ]),
    currentEducation: this.formBuilder.group({
      district: ['', [Validators.required]],
      block: ['', [Validators.required]],
      institute: ['', Validators.required],
      CourseNature: ['', Validators.required],
      CourseName: ['', Validators.required],
      BranchName: ['', Validators.required],
      CourseYear: ['', Validators.required],
      RegistrationNo: ['', Validators.required],
      RegistrationDate: ['', Validators.required]
    }),
    lastPassedExam: this.formBuilder.group({
      course: [''],
      passingYear: [''],
      rollNo: [''],
      totalMark: [''],
      securedMark: [''],
      percentage: [''],
      marksheet: [null]
    })
  })

  
  addPrevEducation() {
    const prevEducationFormGroup = this.formBuilder.group({
      course: [''],
      board: [''],
      passingYear: [''],
      rollNo: [''],
      totalMark: [''],
      securedMark: [''],
      percentage: [''],
      marksheet: [null]
    });
    this.prevEducation.push(prevEducationFormGroup);
  }

  get prevEducation(){
    return this.academicForm.get('prevEducation') as FormArray;
  }
 
  onSubmit(){}
}
