import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scholarship-status-card',
  templateUrl: './scholarship-status-card.component.html',
  styleUrls: ['./scholarship-status-card.component.scss']
})
export class ScholarshipStatusCardComponent {
  @Input() name !: string;
  @Input() department !: string;
  @Input() application_no !: string;
  @Input() status !: string;

}
