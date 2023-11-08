import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-apply-scholarship',
  templateUrl: './apply-scholarship.component.html',
  styleUrls: ['./apply-scholarship.component.scss']
})
export class ApplyScholarshipComponent implements OnInit {
  tabs: string[] = ['profile-information-from', 'academic-information-from', 'account-information-from']
  activeTab: string = this.tabs[0];

  constructor(private location: Location){}

  ngOnInit(): void {
    const url = this.location.path();
    const segments = url.split('/');
    const lastSegment = segments.pop();
    // console.log("lastSegment ",lastSegment)
    if(lastSegment){
      if(this.tabs.includes(lastSegment)){
        this.activeTab = lastSegment
      }
    }
      
  }

  selectTab(name: string){
    this.activeTab = name;
  }
}
