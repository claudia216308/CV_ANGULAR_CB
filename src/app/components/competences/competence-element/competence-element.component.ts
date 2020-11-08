import { Component, Input, OnInit } from '@angular/core';
import { Competence } from '../../../modele/competence';

@Component({
  selector: 'app-competence-element',
  templateUrl: './competence-element.component.html',
  styleUrls: ['./competence-element.component.css']
})
export class CompetenceElementComponent implements OnInit {

  @Input() color: string;
  @Input() competence: Competence;

  ngOnInit() {
  }


}
