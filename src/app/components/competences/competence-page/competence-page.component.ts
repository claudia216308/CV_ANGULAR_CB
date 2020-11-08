import { Component, OnInit } from '@angular/core';
import { FRONT, BACK, FRAME } from 'src/app/data/mockCompetences';
import { Competence } from '../../../modele/competence';

@Component({
  selector: 'app-competence',
  templateUrl: './competence-page.component.html',
  styleUrls: ['./competence-page.component.css']
})
export class CompetencePageComponent implements OnInit {

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

