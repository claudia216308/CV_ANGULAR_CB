import { Component, Input, OnInit } from '@angular/core';
import { Competence } from 'src/app/modele/competence';

@Component({
  selector: 'app-competence-card',
  templateUrl: './competence-card.component.html',
  styleUrls: ['./competence-card.component.css']
})
export class CompetenceCardComponent implements OnInit {

  @Input()
  elements: Competence[]

  @Input()
  color: string

  @Input()
  title: string

  constructor() { }

  ngOnInit(): void {
  }

}
