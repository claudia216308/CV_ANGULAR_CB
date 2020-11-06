import { Component, OnInit } from '@angular/core';
import { Competence } from '../competence';
import { FRONT, BACK, FRAME } from '../mockCompetences';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  //données
  fronts: Competence[] = FRONT;
  backs: Competence[] = BACK;
  frames: Competence[] = FRAME;
  
  //couleurs 
  green: string = "green";
  orange: string= "orange";
  blue: string = ""; // valeur par défaut
  
  ngOnInit() {
  }

}

