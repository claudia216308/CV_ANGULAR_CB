import { Component, OnInit } from '@angular/core';
import { LIST_EXPERIENCE } from 'src/app/data/mockExperience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  entries = LIST_EXPERIENCE

  constructor() { }

  ngOnInit() {
  }

}
