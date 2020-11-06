import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabNav } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  routeLinks: any[];

  constructor(private router: Router) {
    this.routeLinks = [
        {
            label: 'Présentation',
            link: 'presentation',
            index: 0
        }, {
            label: 'Expérience & Formation',
            link: 'experience',
            index: 1
        }, {
            label: 'Compétences',
            link: 'competences',
            index: 3
        }, {
            label: 'Projets',
            link: 'projets',
            index: 4
        }, {
          label: 'Me contacter',
          link: 'contact',
          index: 4
      }
    ];
}

 ngOnInit(): void {
  };

  title = 'app';
}
