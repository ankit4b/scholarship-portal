import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from 'src/app/services/scholarship.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  appliedScholarshipList: any;
  userDetails: any;
  scholarshipsStatus: any = {};

  constructor(private scholarshipService: ScholarshipService){}

  ngOnInit(): void {
    this.initialize()
  }

  initialize(){
    this.scholarshipService.getAppliedScholarshipDetails().subscribe(data => {
      // console.log("Data :",data)
      this.appliedScholarshipList = data;
      
      let Inprogress = 0;
      let Disbursed = 0;
      let Reverted = 0

      for(let sc of this.appliedScholarshipList){
        // console.log(sc)
        if(sc["status"] == "Inprogress")
          Inprogress++;
        else if(sc["status"] == "Disbursed")
          Disbursed++;
        else
          Reverted++;
      }

      this.scholarshipsStatus["Total"] = this.appliedScholarshipList.length;
      this.scholarshipsStatus["Inprogress"] = Inprogress;
      this.scholarshipsStatus["Disbursed"] = Disbursed;
      this.scholarshipsStatus["Reverted"] = Reverted;
    })

    this.scholarshipService.getUserDetails().subscribe(data => {
      // console.log(data)
      this.userDetails = data;
    })
  }
}
